import type { ReactNode } from 'react';
import { Avatar, Dropdown, Label, Separator } from '@heroui/react';
import { GearIcon, HomeIcon, LogoutIcon, SearchIcon, UserIcon } from './icons';

type User = {
  name: string;
  email: string;
  initials: string;
};

type AppShellProps = {
  title: string;
  user: User;
  children: ReactNode;
  activeTab?: 'home' | 'search' | 'profile';
  onLogout?: () => void;
};

export function AppShell({ title, user, children, activeTab = 'home', onLogout }: AppShellProps) {
  return (
    <main className="min-h-svh bg-zinc-950 text-zinc-50">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-zinc-950/82 px-5 py-3 backdrop-blur-2xl">
        <div className="mx-auto flex h-12 w-full max-w-3xl items-center justify-between">
          <h1 className="text-[1.7rem] leading-none font-semibold tracking-[-0.05em] text-white">
            {title}
          </h1>
          <UserMenu user={user} onLogout={onLogout} />
        </div>
      </header>

      <section className="mx-auto min-h-[calc(100svh-8.5rem)] w-full max-w-3xl px-5 pt-5 pb-28">
        {children}
      </section>

      <BottomDock activeTab={activeTab} />
    </main>
  );
}

function UserMenu({ user, onLogout }: { user: User; onLogout?: () => void }) {
  return (
    <Dropdown>
      <Dropdown.Trigger className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70">
        <Avatar>
          <Avatar.Fallback delayMs={300}>{user.initials}</Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>
      <Dropdown.Popover>
        <div className="px-3 pt-3 pb-2">
          <div className="flex items-center gap-3">
            <Avatar size="sm">
              <Avatar.Fallback delayMs={300}>{user.initials}</Avatar.Fallback>
            </Avatar>
            <div className="min-w-0">
              <p className="truncate text-sm leading-5 font-medium text-foreground">{user.name}</p>
              <p className="truncate text-xs leading-4 text-muted">{user.email}</p>
            </div>
          </div>
        </div>
        <Dropdown.Menu>
          <Dropdown.Item id="settings" textValue="Configurações">
            <div className="flex w-full items-center justify-between gap-3">
              <Label>Configurações</Label>
              <GearIcon className="size-4 text-muted" />
            </div>
          </Dropdown.Item>
          <Separator />
          <Dropdown.Item id="logout" textValue="Sair" variant="danger" onClick={onLogout}>
            <div className="flex w-full items-center justify-between gap-3 pt-2">
              <Label>Sair</Label>
              <LogoutIcon className="size-4 text-danger" />
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}

function BottomDock({ activeTab }: { activeTab: 'home' | 'search' | 'profile' }) {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-30 px-5 pb-[max(1rem,env(safe-area-inset-bottom))]"
      aria-label="Principal"
    >
      <div className="mx-auto grid h-16 w-full max-w-sm grid-cols-3 items-center rounded-[2rem] border border-white/10 bg-zinc-900/88 p-1.5 shadow-2xl shadow-black/40 backdrop-blur-2xl">
        <DockButton label="Início" active={activeTab === 'home'} href="/app">
          <HomeIcon className="size-6" />
        </DockButton>
        <DockButton label="Buscar" active={activeTab === 'search'} href="/search">
          <SearchIcon className="size-6" />
        </DockButton>
        <DockButton label="Perfil" active={activeTab === 'profile'} href="/profile">
          <UserIcon className="size-6" />
        </DockButton>
      </div>
    </nav>
  );
}

function DockButton({
  label,
  href,
  active,
  children,
}: {
  label: string;
  href: string;
  active: boolean;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      aria-current={active ? 'page' : undefined}
      className={[
        'mx-auto flex size-12 items-center justify-center rounded-full transition',
        active
          ? 'bg-white text-zinc-950 shadow-lg shadow-white/10'
          : 'text-zinc-400 hover:bg-white/8 hover:text-white',
      ].join(' ')}
    >
      {children}
    </a>
  );
}
