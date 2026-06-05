import { ArrowRightFromSquare, Gear, Person } from '@gravity-ui/icons';
import { Avatar, Dropdown, Label, Separator, Tabs } from '@heroui/react';

import type { AppTab } from '../../app/types/app-tab';
import type { UserSession } from '../../app/types/user-session';
import { ThemeToggleButton } from '../theme/components/ThemeToggleButton';

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
        <div className="app-header-actions">
          <ThemeToggleButton />
          <UserMenu user={user} onLogout={onLogout} />
        </div>
      </header>

      <section className="app-content" />

      <nav className="app-dock" aria-label="Navegação principal">
        <Tabs selectedKey={activeTab} onSelectionChange={(key) => onTabChange(key as AppTab)}>
          <Tabs.ListContainer>
            <Tabs.List aria-label="Navegação principal">
              <Tabs.Tab id="home">
                Início
                <Tabs.Indicator />
              </Tabs.Tab>

              <Tabs.Tab id="search">
                Buscar
                <Tabs.Indicator />
              </Tabs.Tab>

              <Tabs.Tab id="profile">
                Perfil
                <Tabs.Indicator />
              </Tabs.Tab>
            </Tabs.List>
          </Tabs.ListContainer>
        </Tabs>
      </nav>
    </main>
  );
}

function UserMenu({ user, onLogout }: { user: UserSession; onLogout: () => void }) {
  const initials = getInitials(user.name);

  return (
    <Dropdown>
      <Dropdown.Trigger aria-label="Abrir menu do usuário" className="rounded-full">
        <Avatar>
          <Avatar.Fallback delayMs={600}>{initials}</Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>

      <Dropdown.Popover>
        <div className="w-64 px-3 pt-3 pb-1">
          <div className="flex min-w-0 items-center gap-2">
            <Avatar size="sm">
              <Avatar.Fallback delayMs={600}>{initials}</Avatar.Fallback>
            </Avatar>

            <div className="flex min-w-0 flex-col gap-0">
              <p className="truncate text-sm leading-5 font-medium" title={user.name}>
                {user.name}
              </p>
              <p className="truncate text-xs leading-none text-muted" title={user.email}>
                {user.email}
              </p>
            </div>
          </div>
        </div>

        <Dropdown.Menu>
          <Dropdown.Item id="profile" textValue="Perfil">
            <div className="flex w-full items-center justify-between gap-2">
              <Label>Perfil</Label>
              <Person className="size-3.5 text-muted" />
            </div>
          </Dropdown.Item>

          <Dropdown.Item id="settings" textValue="Configurações">
            <div className="flex w-full items-center justify-between gap-2">
              <Label>Configurações</Label>
              <Gear className="size-3.5 text-muted" />
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>

        <Separator />

        <Dropdown.Menu>
          <Dropdown.Item id="logout" textValue="Sair" variant="danger" onClick={onLogout}>
            <div className="flex w-full items-center justify-between gap-2">
              <Label>Sair</Label>
              <ArrowRightFromSquare className="size-3.5 text-danger" />
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
