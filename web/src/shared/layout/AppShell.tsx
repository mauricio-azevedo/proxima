import { Avatar, Dropdown, Label, Tab, Tabs } from '@heroui/react';

import type { AppTab } from '../../app/types/app-tab';
import type { UserSession } from '../../app/types/user-session';
import { GearIcon, HomeIcon, LogoutIcon, SearchIcon, UserIcon } from '../icons/app-icons';

interface AppShellProps {
  activeTab: AppTab;
  user: UserSession;
  onTabChange: (tab: AppTab) => void;
  onLogout: () => void;
}

export function AppShell({ activeTab, user, onTabChange, onLogout }: AppShellProps) {
  return (
    <main className="app-frame">
      <header className="app-header">
        <h1>{getTabTitle(activeTab)}</h1>
        <UserMenu user={user} onLogout={onLogout} />
      </header>

      <section className="app-content" />

      <nav className="app-dock" aria-label="Navegação principal">
        <Tabs
          aria-label="Navegação principal"
          selectedKey={activeTab}
          onSelectionChange={(key) => onTabChange(key as AppTab)}
        >
          <Tab key="home" title={<HomeIcon className="icon" />} />
          <Tab key="search" title={<SearchIcon className="icon" />} />
          <Tab key="profile" title={<UserIcon className="icon" />} />
        </Tabs>
      </nav>
    </main>
  );
}

function UserMenu({ user, onLogout }: { user: UserSession; onLogout: () => void }) {
  const initials = getInitials(user.name);

  return (
    <Dropdown>
      <Dropdown.Trigger aria-label="Abrir menu do usuário">
        <Avatar>
          <Avatar.Fallback>{initials}</Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>

      <Dropdown.Popover>
        <div className="user-menu-header">
          <Avatar size="sm">
            <Avatar.Fallback>{initials}</Avatar.Fallback>
          </Avatar>
          <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        </div>

        <Dropdown.Menu>
          <Dropdown.Item id="settings" textValue="Configurações">
            <div className="menu-item-row">
              <Label>Configurações</Label>
              <GearIcon className="menu-icon" />
            </div>
          </Dropdown.Item>

          <Dropdown.Item id="logout" textValue="Sair" variant="danger" onClick={onLogout}>
            <div className="menu-item-row">
              <Label>Sair</Label>
              <LogoutIcon className="menu-icon" />
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}

function getTabTitle(tab: AppTab): string {
  if (tab === 'search') return 'Buscar';
  if (tab === 'profile') return 'Perfil';
  return 'Início';
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? 'U';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return `${first}${last}`.toUpperCase();
}
