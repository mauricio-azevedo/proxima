# ADR 0001: Consolidate pickup game membership and admin roles

## Status

Accepted

## Context

The initial schema represented pickup-game membership and administration with separate tables:

- `PickupGameUser`
- `PickupGameAdmin`

It also represented admin hierarchy with `PickupGameAdminRole`:

- `OWNER`
- `ADMIN`

This created overlapping concepts:

- a user could be a member;
- a user could be an admin;
- a user could be both;
- a user could be the original creator through `PickupGame.createdByUserId`;
- a user could be an owner through `PickupGameAdminRole.OWNER`.

For the current product, this is more structure than the domain needs.

The product concept is that a `PickupGame` is the recurring football pickup game itself. Users belong to a pickup game, and some members can manage it.

## Decision

Use `PickupGameUser` as the single membership table.

Add `PickupGameUser.role`:

- `MEMBER`
- `ADMIN`

Remove:

- `PickupGameAdmin`
- `PickupGameAdminRole`
- `OWNER`

Keep `PickupGame.createdByUserId` as audit metadata only.

`PickupGame.createdByUserId` must not be used as the source of current operational authorization.

## Business rules

An active pickup game must always have at least one `ADMIN`.

A normal user-initiated flow must not leave a pickup game without an admin.

If the only admin wants to leave, the system must require the admin to promote another member before leaving.

The system must not automatically promote another member during normal user-initiated leave flows.

Exceptional system-level recovery flows may automatically promote a member when explicit transfer is impossible.

Examples:

- the only admin deletes their account;
- the only admin is removed by moderation/compliance;
- a repair job finds an active pickup game without admins.

Recovery policy:

1. promote the oldest remaining `PickupGameUser` by `createdAt`;
2. if no member remains, cancel or archive the pickup game instead of keeping it active without admins.

## Consequences

### Positive

- Simpler domain model.
- No duplicated user-pickup-game relationship.
- Easier authorization checks.
- Easier UI semantics: membership and admin status live in one record.
- Avoids premature ownership hierarchy.
- Supports creator leaving the pickup game without breaking audit history.

### Negative

- Requires schema migration.
- Requires any future admin-specific logic to query `PickupGameUser.role`.
- If strong owner-only governance becomes necessary later, the role model may need to evolve.

## Alternatives considered

### Keep `PickupGameAdmin` separate

Rejected.

Separate admin and membership tables duplicate the same relationship between user and pickup game and make it unclear whether admins are also members.

### Keep `OWNER` and `ADMIN`

Rejected for now.

Owner-level governance introduces transfer, removal and hierarchy edge cases that are premature for the current product.

### Use `createdByUserId` as owner

Rejected.

The creator is historical audit metadata. Treating the creator as the permanent owner creates problems when the creator wants to leave.

### Auto-promote another member when the only admin leaves

Rejected for normal user-initiated flows.

Automatic promotion assigns responsibility without explicit consent and can surprise users.

Accepted only for exceptional system-level recovery flows where explicit transfer is impossible.

## Implementation guidance

Use application-level use cases to enforce admin continuity.

Do not rely only on frontend validation.

Membership mutations and role changes must be transactional.

Suggested use cases:

- `LeavePickupGameUseCase`
- `PromotePickupGameUserUseCase`
- `DemotePickupGameUserUseCase`
- `RecoverPickupGameAdminUseCase`

Suggested tests:

- member can leave;
- admin can leave when another admin exists;
- last admin cannot leave in normal flow;
- last admin can leave only after promoting another member;
- deleting the only admin promotes the oldest remaining member;
- deleting the only admin with no remaining members archives or cancels the pickup game;
- admin demotion cannot leave a pickup game without admins.
