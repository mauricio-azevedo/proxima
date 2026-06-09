import { Navigate, useLocation } from 'react-router';

import { CreatePickupGameDrawer } from '../features/pickup-games/CreatePickupGameDrawer';
import { usePickupGamesHome } from '../features/pickup-games/hooks/use-pickup-games-home';
import { AppShell } from '../shared/layout/AppShell';
import type { AppTab } from './types/app-tab';
import type { UserSession } from './types/user-session';

interface AuthenticatedAppRouteProps {
  activeTab: AppTab;
  user: UserSession;
  onCreatePickupGameRequested: () => void;
  onTabChange: (tab: AppTab) => void;
  onLogout: () => void;
  onCreateDrawerClosed: () => void;
}

export function AuthenticatedAppRoute({
  activeTab,
  user,
  onCreatePickupGameRequested,
  onTabChange,
  onLogout,
  onCreateDrawerClosed,
}: AuthenticatedAppRouteProps) {
  const location = useLocation();
  const pickupGamesHome = usePickupGamesHome();
  const isCreatePickupGameRoute = location.pathname === '/app/pickup-games/new';

  if (location.pathname !== '/app' && !isCreatePickupGameRoute) {
    return <Navigate to="/app" replace />;
  }

  async function handlePickupGameCreated() {
    onCreateDrawerClosed();
    await pickupGamesHome.refresh();
  }

  return (
    <>
      <AppShell
        activeTab={activeTab}
        pickupGamesHome={pickupGamesHome}
        user={user}
        onCreatePickupGameRequested={onCreatePickupGameRequested}
        onTabChange={onTabChange}
        onLogout={onLogout}
      />
      <CreatePickupGameDrawer isOpen={isCreatePickupGameRoute} onClose={onCreateDrawerClosed} onCreated={handlePickupGameCreated} />
    </>
  );
}
