import { ArrowRightFromSquare, Gear, Person } from '@gravity-ui/icons';
import { Avatar, Dropdown, Label, Separator, Tabs } from '@heroui/react';

import type { AppTab } from '../../app/types/app-tab';
import type { UserSession } from '../../app/types/user-session';
import { LanguageMenuButton } from '../i18n/components/LanguageMenuButton';
import { useLocale } from '../i18n/hooks/use-locale';
import { ThemeToggleButton } from '../theme/components/ThemeToggleButton';

interface AppShellProps {
  activeTab: AppTab;
  user: UserSession;
  onTabChange: (tab: AppTab) => void;
  onLogout: () => void;
}

export function AppShell({ activeTab, user, onTabChange, onLogout }: AppShellProps) {
  const { t } = useLocale();

  return (
    <main className="app-frame">
      <header className="app-header">
        <h1>{getTabTitle(activeTab, t)}</h1>
        <div className="app-header-actions">
          <LanguageMenuButton />
          <ThemeToggleButton />
          <UserMenu user={user} onLogout={onLogout} />
        </div>
      </header>

      <section className="app-content" />

      <nav className="app-dock" aria-label={t('app.navigation.main')}>
        <Tabs selectedKey={activeTab} onSelectionChange={(key) => onTabChange(key as AppTab)}>
          <Tabs.ListContainer>
            <Tabs.List aria-label={t('app.navigation.main')}>
              <Tabs.Tab id="home">
                {t('app.tabs.home')}
                <Tabs.Indicator />
              </Tabs.Tab>

              <Tabs.Tab id="search">
                {t('app.tabs.search')}
                <Tabs.Indicator />
              </Tabs.Tab>

              <Tabs.Tab id="profile">
                {t('app.tabs.profile')}
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
  const { t } = useLocale();
  const initials = getInitials(user.name);

  return (
    <Dropdown>
      <Dropdown.Trigger aria-label={t('menu.user.open')} className="rounded-full">
        <Avatar>
          <Avatar.Fallback delayMs={600}>{initials}</Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>

      <Dropdown.Popover className="w-64 overflow-hidden">
        <div className="w-full px-3 pt-3 pb-1">
          <div className="flex min-w-0 items-center gap-2">
            <Avatar size="sm">
              <Avatar.Fallback delayMs={600}>{initials}</Avatar.Fallback>
            </Avatar>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm leading-5 font-medium" title={user.name}>
                {user.name}
              </p>
              <p className="truncate text-xs leading-none text-muted" title={user.email}>
                {user.email}
              </p>
            </div>
          </div>
        </div>

        <Dropdown.Menu className="w-full min-w-0">
          <Dropdown.Item id="profile" textValue={t('menu.profile')}>
            <div className="flex w-full min-w-0 items-center justify-between gap-2">
              <Label>{t('menu.profile')}</Label>
              <Person className="size-3.5 shrink-0 text-muted" />
            </div>
          </Dropdown.Item>

          <Dropdown.Item id="settings" textValue={t('menu.settings')}>
            <div className="flex w-full min-w-0 items-center justify-between gap-2">
              <Label>{t('menu.settings')}</Label>
              <Gear className="size-3.5 shrink-0 text-muted" />
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>

        <Separator />

        <Dropdown.Menu className="w-full min-w-0">
          <Dropdown.Item id="logout" textValue={t('menu.signOut')} variant="danger" onClick={onLogout}>
            <div className="flex w-full min-w-0 items-center justify-between gap-2">
              <Label>{t('menu.signOut')}</Label>
              <ArrowRightFromSquare className="size-3.5 shrink-0 text-danger" />
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}

function getTabTitle(tab: AppTab, t: ReturnType<typeof useLocale>['t']): string {
  if (tab === 'search') return t('app.tabs.search');
  if (tab === 'profile') return t('app.tabs.profile');
  return t('app.tabs.home');
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? 'U';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return `${first}${last}`.toUpperCase();
}
