# Pickup games home state ownership

## Context

The authenticated app renders the pickup games home, the live pickup game bar, and the route-backed create pickup game drawer. These surfaces all depend on the same pickup games home payload.

The app must keep one authoritative owner for that payload. Multiple independent owners create duplicated fetches, stale views, visual loading regressions, and unclear mutation refresh behavior.

## Decision

`AuthenticatedAppRoute` owns the pickup games home controller.

```txt
App
└── AuthenticatedAppRoute
    ├── usePickupGamesHome()
    ├── AppShell
    └── CreatePickupGameDrawer
```

`AppShell` is a layout and presentation boundary. It receives `pickupGamesHome` as a prop and must not call `usePickupGamesHome()` directly.

`CreatePickupGameDrawer` owns only the create form state and create request lifecycle. It does not own the pickup games home payload. After a successful creation, it calls `onCreated`; the authenticated route controller closes the drawer route and refreshes the shared pickup games home controller.

## Runtime flow

```txt
User opens /app/pickup-games/new
        ↓
AuthenticatedAppRoute keeps AppShell mounted
        ↓
CreatePickupGameDrawer creates the pickup game
        ↓
onCreated()
        ↓
AuthenticatedAppRoute navigates back to /app
        ↓
pickupGamesHome.refresh()
        ↓
Home and live bar read the updated shared payload
```

## Rules

1. `usePickupGamesHome()` belongs in `AuthenticatedAppRoute` or a deliberate successor route-level controller.
2. `AppShell` must remain controlled by props for pickup games home data.
3. `CreatePickupGameDrawer` must not fetch or mutate the home payload directly.
4. Creating, joining, leaving, or changing live state for a pickup game must refresh or update the shared route-level controller.
5. A route-backed drawer must not remount the app shell when opened or closed.

## Why this matters

The create drawer is route-backed, but the route is not a separate app shell. The home screen remains mounted under the drawer, preserving visual continuity and avoiding loading flicker. Data refresh is explicit after mutation instead of being an accidental side effect of navigation or remounting.
