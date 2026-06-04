import { useMemo, useState } from 'react';
import { Avatar, Button, Dropdown, Input, Label, Tab, Tabs, TextField } from '@heroui/react';
import './App.css';

type Screen = 'login' | 'register' | 'home' | 'search' | 'profile';
type AppTab = Extract<Screen, 'home' | 'search' | 'profile'>;

interface UserSession {
  name: string;
  email: string;
}

const defaultUser: UserSession = {
  name: 'Maurício Azevedo',
  email: 'mauricio@example.com',
};

function App() {
  const [screen, setScreen] = useState<Screen>('login');
  const [user, setUser] = useState<UserSession | null>(null);

  function completeAuth(nextUser: UserSession) {
    setUser(nextUser);
    setScreen('home');
  }

  function logout() {
    setUser(null);
    setScreen('login');
  }

  if (!user) {
    if (screen === 'register') {
      return <RegisterScreen onLoginRequested={() => setScreen('login')} onRegistered={completeAuth} />;
    }

    return <LoginScreen onRegisterRequested={() => setScreen('register')} onLoggedIn={completeAuth} />;
  }

  return <AppShell activeTab={screen as AppTab} user={user} onTabChange={setScreen} onLogout={logout} />;
}

interface LoginScreenProps {
  onRegisterRequested: () => void;
  onLoggedIn: (user: UserSession) => void;
}

function LoginScreen({ onRegisterRequested, onLoggedIn }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onLoggedIn({ name: defaultUser.name, email: email.trim() || defaultUser.email });
  }

  return (
    <main className="auth-screen">
      <form className="auth-form" onSubmit={submit}>
        <h1>Login</h1>

        <TextField isRequired name="email" type="email">
          <Label>Email</Label>
          <Input
            fullWidth
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </TextField>

        <TextField isRequired name="password" type="password">
          <Label>Senha</Label>
          <Input
            fullWidth
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </TextField>

        <Button type="submit" variant="primary" fullWidth isDisabled={!email.trim() || !password.trim()}>
          Entrar
        </Button>

        <Button type="button" variant="tertiary" fullWidth onPress={onRegisterRequested}>
          Criar conta
        </Button>
      </form>
    </main>
  );
}

interface RegisterScreenProps {
  onLoginRequested: () => void;
  onRegistered: (user: UserSession) => void;
}

function RegisterScreen({ onLoginRequested, onRegistered }: RegisterScreenProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onRegistered({ name: name.trim() || defaultUser.name, email: email.trim() || defaultUser.email });
  }

  return (
    <main className="auth-screen">
      <form className="auth-form" onSubmit={submit}>
        <h1>Cadastro</h1>

        <TextField isRequired name="name">
          <Label>Nome</Label>
          <Input fullWidth autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} />
        </TextField>

        <TextField isRequired name="email" type="email">
          <Label>Email</Label>
          <Input
            fullWidth
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </TextField>

        <TextField isRequired name="password" type="password">
          <Label>Senha</Label>
          <Input
            fullWidth
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </TextField>

        <Button
          type="submit"
          variant="primary"
          fullWidth
          isDisabled={!name.trim() || !email.trim() || !password.trim()}
        >
          Criar conta
        </Button>

        <Button type="button" variant="tertiary" fullWidth onPress={onLoginRequested}>
          Entrar
        </Button>
      </form>
    </main>
  );
}

interface AppShellProps {
  activeTab: AppTab;
  user: UserSession;
  onTabChange: (screen: AppTab) => void;
  onLogout: () => void;
}

function AppShell({ activeTab, user, onTabChange, onLogout }: AppShellProps) {
  const title = useMemo(() => {
    if (activeTab === 'search') return 'Buscar';
    if (activeTab === 'profile') return 'Perfil';
    return 'Início';
  }, [activeTab]);

  return (
    <main className="app-frame">
      <header className="app-header">
        <h1>{title}</h1>
        <UserMenu user={user} onLogout={onLogout} />
      </header>

      <section className="app-content" />

      <nav className="app-dock" aria-label="Navegação principal">
        <Tabs
          aria-label="Navegação principal"
          selectedKey={activeTab}
          onSelectionChange={(key) => onTabChange(key as AppTab)}
        >
          <Tab key="home" title={<HomeIcon />} />
          <Tab key="search" title={<SearchIcon />} />
          <Tab key="profile" title={<UserIcon />} />
        </Tabs>
      </nav>
    </main>
  );
}

interface UserMenuProps {
  user: UserSession;
  onLogout: () => void;
}

function UserMenu({ user, onLogout }: UserMenuProps) {
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
              <GearIcon />
            </div>
          </Dropdown.Item>

          <Dropdown.Item id="logout" textValue="Sair" variant="danger" onClick={onLogout}>
            <div className="menu-item-row">
              <Label>Sair</Label>
              <LogoutIcon />
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? 'U';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return `${first}${last}`.toUpperCase();
}

function HomeIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.8 10.9 12 4l8.2 6.9v8.3a1.8 1.8 0 0 1-1.8 1.8h-3.2v-6.1H8.8V21H5.6a1.8 1.8 0 0 1-1.8-1.8z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10.8 4.2a6.6 6.6 0 1 0 4.2 11.7l3.6 3.6a1.1 1.1 0 0 0 1.5-1.5l-3.6-3.6A6.6 6.6 0 0 0 10.8 4.2Zm0 2.2a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8Z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 12.2a4.1 4.1 0 1 0 0-8.2 4.1 4.1 0 0 0 0 8.2Zm0 2.1c-4.7 0-7.7 2.4-7.7 5.2 0 .8.6 1.5 1.5 1.5h12.4c.9 0 1.5-.7 1.5-1.5 0-2.8-3-5.2-7.7-5.2Z" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg className="menu-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.4 13.5a7.8 7.8 0 0 0 .1-1.5 7.8 7.8 0 0 0-.1-1.5l2-1.5-2-3.5-2.4 1a8.7 8.7 0 0 0-2.6-1.5L14 2h-4l-.4 2.5A8.7 8.7 0 0 0 7 6L4.6 5l-2 3.5 2 1.5a7.8 7.8 0 0 0-.1 1.5 7.8 7.8 0 0 0 .1 1.5l-2 1.5 2 3.5 2.4-1a8.7 8.7 0 0 0 2.6 1.5L10 22h4l.4-2.5A8.7 8.7 0 0 0 17 18l2.4 1 2-3.5-2-1.5ZM12 15.4a3.4 3.4 0 1 1 0-6.8 3.4 3.4 0 0 1 0 6.8Z" />
    </svg>
  );
}

function LogoutIcon() {
  return (
    <svg className="menu-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.2 4.8a1 1 0 0 0-1-1H5.8A2.8 2.8 0 0 0 3 6.6v10.8a2.8 2.8 0 0 0 2.8 2.8h6.4a1 1 0 1 0 0-2H5.8a.8.8 0 0 1-.8-.8V6.6a.8.8 0 0 1 .8-.8h6.4a1 1 0 0 0 1-1Zm4.6 6.2-2.1-2.1a1 1 0 1 1 1.4-1.4l3.8 3.8a1 1 0 0 1 0 1.4l-3.8 3.8a1 1 0 1 1-1.4-1.4l2.1-2.1H10a1 1 0 1 1 0-2h7.8Z" />
    </svg>
  );
}

export default App;
