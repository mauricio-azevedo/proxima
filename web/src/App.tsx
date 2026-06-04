import { useMemo, useState } from 'react';
import { Avatar, Button, Card, Dropdown, Input, Label } from '@heroui/react';
import './App.css';

type Screen = 'login' | 'register' | 'home' | 'search' | 'profile';

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

  return <AppShell activeScreen={screen} user={user} onScreenChange={setScreen} onLogout={logout} />;
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
    onLoggedIn({
      name: defaultUser.name,
      email: email.trim() || defaultUser.email,
    });
  }

  return (
    <main className="auth-screen">
      <section className="auth-panel" aria-labelledby="login-title">
        <div className="auth-copy">
          <p className="eyebrow">Próxima</p>
          <h1 id="login-title">Entre para organizar sua pelada.</h1>
          <p>Lista, chegada, fila e partidas em um fluxo simples para a quadra.</p>
        </div>

        <Card className="auth-card">
          <form className="auth-form" onSubmit={submit}>
            <div className="form-heading">
              <h2>Login</h2>
              <p>Acesse sua conta para continuar.</p>
            </div>

            <Input
              isRequired
              label="Email"
              type="email"
              autoComplete="email"
              placeholder="voce@email.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <Input
              isRequired
              label="Senha"
              type="password"
              autoComplete="current-password"
              placeholder="Sua senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <Button type="submit" variant="primary" className="auth-submit" isDisabled={!password.trim()}>
              Entrar
            </Button>

            <p className="auth-switch">
              Não tem conta?{' '}
              <button type="button" onClick={onRegisterRequested}>
                Criar conta
              </button>
            </p>
          </form>
        </Card>
      </section>
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
    onRegistered({
      name: name.trim() || defaultUser.name,
      email: email.trim() || defaultUser.email,
    });
  }

  return (
    <main className="auth-screen">
      <section className="auth-panel" aria-labelledby="register-title">
        <div className="auth-copy">
          <p className="eyebrow">Próxima</p>
          <h1 id="register-title">Crie sua conta.</h1>
          <p>Comece com uma conta simples. O restante da pelada vem depois.</p>
        </div>

        <Card className="auth-card">
          <form className="auth-form" onSubmit={submit}>
            <div className="form-heading">
              <h2>Cadastro</h2>
              <p>Use nome, email e senha para criar sua conta.</p>
            </div>

            <Input
              isRequired
              label="Nome"
              autoComplete="name"
              placeholder="Seu nome"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <Input
              isRequired
              label="Email"
              type="email"
              autoComplete="email"
              placeholder="voce@email.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <Input
              isRequired
              label="Senha"
              type="password"
              autoComplete="new-password"
              placeholder="Crie uma senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <Button
              type="submit"
              variant="primary"
              className="auth-submit"
              isDisabled={!name.trim() || !email.trim() || !password.trim()}
            >
              Criar conta
            </Button>

            <p className="auth-switch">
              Já tem conta?{' '}
              <button type="button" onClick={onLoginRequested}>
                Entrar
              </button>
            </p>
          </form>
        </Card>
      </section>
    </main>
  );
}

interface AppShellProps {
  activeScreen: Screen;
  user: UserSession;
  onScreenChange: (screen: Screen) => void;
  onLogout: () => void;
}

function AppShell({ activeScreen, user, onScreenChange, onLogout }: AppShellProps) {
  const title = useMemo(() => {
    if (activeScreen === 'search') return 'Buscar';
    if (activeScreen === 'profile') return 'Perfil';
    return 'Início';
  }, [activeScreen]);

  return (
    <main className="app-frame">
      <header className="app-header">
        <h1>{title}</h1>
        <UserMenu user={user} onLogout={onLogout} />
      </header>

      <section className="empty-content" aria-labelledby="empty-title">
        <div>
          <p className="eyebrow">Conteúdo</p>
          <h2 id="empty-title">Tela vazia por enquanto.</h2>
          <p>O layout base já está pronto para receber os próximos módulos.</p>
        </div>
      </section>

      <Dock activeScreen={activeScreen} onScreenChange={onScreenChange} />
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
      <Dropdown.Trigger className="avatar-trigger" aria-label="Abrir menu do usuário">
        <Avatar>
          <Avatar.Fallback>{initials}</Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>

      <Dropdown.Popover className="user-popover">
        <div className="user-card-header">
          <Avatar size="sm">
            <Avatar.Fallback>{initials}</Avatar.Fallback>
          </Avatar>
          <div>
            <p className="user-name">{user.name}</p>
            <p className="user-email">{user.email}</p>
          </div>
        </div>

        <Dropdown.Menu>
          <Dropdown.Item id="settings" textValue="Configurações">
            <div className="menu-item-row">
              <Label>Configurações</Label>
              <GearIcon />
            </div>
          </Dropdown.Item>

          <Dropdown.Separator />

          <Dropdown.Item id="logout" textValue="Sair" variant="danger" onClick={onLogout}>
            <div className="menu-item-row danger">
              <Label>Sair</Label>
              <LogoutIcon />
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}

interface DockProps {
  activeScreen: Screen;
  onScreenChange: (screen: Screen) => void;
}

function Dock({ activeScreen, onScreenChange }: DockProps) {
  return (
    <nav className="dock" aria-label="Navegação principal">
      <DockButton label="Início" isActive={activeScreen === 'home'} onClick={() => onScreenChange('home')}>
        <HomeIcon />
      </DockButton>
      <DockButton label="Buscar" isActive={activeScreen === 'search'} onClick={() => onScreenChange('search')}>
        <SearchIcon />
      </DockButton>
      <DockButton label="Perfil" isActive={activeScreen === 'profile'} onClick={() => onScreenChange('profile')}>
        <UserIcon />
      </DockButton>
    </nav>
  );
}

interface DockButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function DockButton({ label, isActive, onClick, children }: DockButtonProps) {
  return (
    <button
      type="button"
      className={isActive ? 'dock-button active' : 'dock-button'}
      aria-label={label}
      aria-current={isActive ? 'page' : undefined}
      onClick={onClick}
    >
      {children}
    </button>
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
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.8 10.9 12 4l8.2 6.9v8.3a1.8 1.8 0 0 1-1.8 1.8h-3.2v-6.1H8.8V21H5.6a1.8 1.8 0 0 1-1.8-1.8z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10.8 4.2a6.6 6.6 0 1 0 4.2 11.7l3.6 3.6a1.1 1.1 0 0 0 1.5-1.5l-3.6-3.6A6.6 6.6 0 0 0 10.8 4.2Zm0 2.2a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8Z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
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
