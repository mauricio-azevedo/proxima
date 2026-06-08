# Pickup games domain

## Core concepts

### PickupGame

A `PickupGame` is the recurring football pickup game itself: the stable social and operational unit users belong to.

Examples:

- `Pelada da Terça`
- `Quinta no Society`
- `Domingo FC`

A `PickupGame` is not a single match. It can have multiple calendar days, and each day can have multiple matches.

### PickupGameUser

A `PickupGameUser` represents a user's membership in a `PickupGame`.

Roles:

- `MEMBER`: belongs to the pickup game.
- `ADMIN`: belongs to the pickup game and can manage operational settings and members.

`PickupGameUser.role` is the source of operational authorization for pickup-game management.

### createdByUserId

`PickupGame.createdByUserId` records who originally created the pickup game.

It is audit metadata, not the source of current authorization.

A creator can later leave the pickup game if admin-continuity rules are satisfied.

### GameDay

A `GameDay` is a specific calendar date for a `PickupGame`.

Presence, list entries, queue entries and matches are scoped to a `GameDay`, not directly to the recurring `PickupGame`.

### DayListEntry

A `DayListEntry` means a user put their name on the list for a specific `GameDay`.

Membership in a `PickupGame` does not imply presence on any specific `GameDay`.

### QueueEntry

A `QueueEntry` represents a user's operational queue position for a specific `GameDay`.

In product language, the queue drives labels such as:

- `Você tá dentro`
- `Você é 1ª`
- `Você é 2ª`
- `Você é 3ª`

### Match

A `Match` is a specific football match played within a `GameDay`.

A single `GameDay` can contain multiple matches.

## Business rules

### Membership and admin roles

A pickup game has members through `PickupGameUser`.

A pickup game has admins through `PickupGameUser.role = ADMIN`.

There is no separate owner role in the domain model.

There is no separate admin-membership table.

### Admin continuity invariant

An active `PickupGame` must always have at least one `ADMIN`.

Normal user-initiated flows must not leave a pickup game without an admin.

### Leaving a pickup game

A `MEMBER` can leave a pickup game.

An `ADMIN` can leave a pickup game only if at least one other `ADMIN` remains.

If the only `ADMIN` wants to leave, the system must require them to promote another member to `ADMIN` before leaving.

The system must not automatically promote another member during normal user-initiated leave flows.

### Removing or demoting admins

An `ADMIN` can promote a `MEMBER` to `ADMIN`.

An `ADMIN` can demote another `ADMIN` to `MEMBER` only if at least one `ADMIN` remains after the demotion.

The system must reject any operation that would leave the pickup game without an `ADMIN`.

### Exceptional recovery flows

Exceptional system-level flows may need to preserve admin continuity without explicit user choice.

Examples:

- the only admin deletes their account;
- the only admin is removed by a moderation or compliance action;
- a data repair job discovers a pickup game without an active admin.

In these exceptional flows, the system may automatically promote another member to `ADMIN` using a deterministic recovery policy.

Recommended recovery policy:

1. promote the oldest remaining `PickupGameUser` by `createdAt`;
2. if no member remains, cancel or archive the pickup game instead of keeping it active without admins.

Automatic promotion must be treated as a recovery mechanism, not normal product behavior.

Recovery flows should be auditable.

## Home listing contract

The home screen is not a raw pickup-game list. It is a product view model optimized for the user's current situation.

Endpoint:

```txt
GET /pickup-games/home
```

Response shape:

```ts
interface PickupGamesHomeResponse {
  activePickupGame: PickupGameHomeItem | null;
  myPickupGames: PickupGameHomeItem[];
  discoverPickupGames: PickupGameHomeItem[];
}
```

### activePickupGame

`activePickupGame` is the user's most relevant operational pickup game, if any.

It only includes pickup games the user belongs to.

A pickup game is operationally active when its next `GameDay` has one of these derived states:

- `waiting_for_players`
- `ready_to_start`
- `playing`

The API returns at most one `activePickupGame` so the client can render one persistent live bar above the bottom dock.

### myPickupGames

`myPickupGames` contains pickup games where the viewer has a `PickupGameUser` membership, excluding the selected `activePickupGame`.

This powers the `Suas peladas` section.

### discoverPickupGames

`discoverPickupGames` contains public pickup games where the viewer is not a member.

This powers the `Outras peladas` section.

### Operational state

`operationalState` is derived for UI purposes. It is not currently persisted as a separate database enum.

Rules:

- `GameDayStatus.PLAYING` -> `playing`
- `GameDayStatus.WAITING_FOR_PLAYERS` and active queue count is less than `teamSize * 2` -> `waiting_for_players`
- `GameDayStatus.WAITING_FOR_PLAYERS` and active queue count is at least `teamSize * 2` -> `ready_to_start`
- other statuses -> `null`

### Viewer state

`viewerState` describes the viewer's operational position for the live bar.

Values:

- `not_arrived`: user is not in the active queue.
- `inside_first_match`: before the first match starts, the user is inside the first match capacity.
- `next_team`: user is waiting in a later team.
- `playing`: user is in the current running match.

Product labels are derived from these states:

- `not_arrived` + `waiting_for_players` or `ready_to_start` -> `Cheguei`
- `inside_first_match` -> `Você tá dentro`
- `next_team` + `viewerTeamQueueNumber = 1` -> `Você é 1ª`
- `next_team` + `viewerTeamQueueNumber = 2` -> `Você é 2ª`
- `next_team` + `viewerTeamQueueNumber = 3` -> `Você é 3ª`
- `playing` -> `Jogando`

### Pegar Nª

When a match is already playing and the viewer is not in the queue, the home view model returns `viewerProspectiveTeamQueueNumber`.

The client should use it to render labels such as:

- `Pegar 1ª`
- `Pegar 2ª`
- `Pegar 3ª`

This tells the user what queue team they will join before they take the action.

### Primary action

`primaryAction` tells the client what action should be offered from the live bar:

- `arrive`: create or reuse the day list entry and create a queue entry.
- `start_match`: admin can start the first match.
- `open`: open the pickup game operational screen.
- `null`: no primary live-bar action.

The client should not infer these actions from raw counts and statuses.

## Acceptance criteria

### Member leaves

Given I am a `MEMBER` of a pickup game
When I leave the pickup game
Then my `PickupGameUser` membership is removed.

### Admin leaves when another admin exists

Given I am an `ADMIN` of a pickup game
And another `ADMIN` exists
When I leave the pickup game
Then my `PickupGameUser` membership is removed
And the other `ADMIN` remains.

### Last admin tries to leave

Given I am the only `ADMIN` of a pickup game
When I try to leave the pickup game
Then the system must require another member to be promoted to `ADMIN` before I can leave.

### Last admin is deleted by exceptional system flow

Given I am the only `ADMIN` of a pickup game
And my account is deleted by a system-level flow
When the system removes my membership
Then the system must either promote the oldest remaining member to `ADMIN` or cancel/archive the pickup game if no member remains.

### Admin demotion

Given a pickup game has multiple admins
When one admin is demoted to `MEMBER`
Then at least one `ADMIN` must remain.

Given a pickup game has only one admin
When that admin is demoted
Then the operation must be rejected unless another member is promoted in the same transaction.

## Implementation notes

The admin-continuity invariant must be enforced in backend use cases, not only in the frontend.

Operations that change membership or roles should run in database transactions.

The database schema can represent membership and roles, but the invariant that at least one admin remains is a business rule that must be enforced by application logic and tests.
