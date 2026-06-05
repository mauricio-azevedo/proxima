import { useState, type ReactElement } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router';

import type { LoginRequest } from '../features/auth/types/login-request';
import type { RegisterRequest } from '../features/auth/types/register-request';
import { useAuthSession } from '../features/auth/hooks/use-auth-session';
import { LoginPage } from '../features/auth/login/LoginPage';
import { RegisterPage } from '../features/auth/register/RegisterPage';
import { AuthSessionLoadingPage } from '../features/auth/session/AuthSessionLoadingPage';
import { AppShell } from '../shared/layout/AppShell';
import '../App.css';
import type { AppTab } from './types/app-tab';

interface RouteState {
  from?: string;
}

export function App() {
  const [activeTab, setActiveTab] = useState<AppTab>('home');
  const authSession = useAuthSession();
  const location = useLocation();
  const navigate = useNavigate();

  async function login(payload: LoginRequest) {
    await authSession.login(payload);
    setActiveTab('home');
    navigate(getAuthenticatedRedirectPath(location.state), { replace: true });
  }

  async function register(payload: RegisterRequest) {
    await authSession.register(payload);
    setActiveTab('home');
    navigate('/app', { replace: true });
  }

  function logout() {
    authSession.logout();
    setActiveTab('home');
    navigate('/login', { replace: true });
  }

  if (authSession.status === 'checking') {
    return <AuthSessionLoadingPage />;
  }

  const authenticated = isAuthenticated(authSession);

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <GuestRoute
            isAuthenticated={authenticated}
            element={<LoginPage onLoginRequested={login} onRegisterRequested={() => navigate('/register')} />}
          />
        }
      />
      <Route
        path="/register"
        element={
          <GuestRoute
            isAuthenticated={authenticated}
            element={<RegisterPage onLoginRequested={() => navigate('/login')} onRegisterRequested={register} />}
          />
        }
      />
      <Route
        path="/app"
        element={
          <ProtectedRoute
            isAuthenticated={authenticated}
            element={
              authSession.user ? (
                <AppShell activeTab={activeTab} user={authSession.user} onTabChange={setActiveTab} onLogout={logout} />
              ) : null
            }
          />
        }
      />
      <Route path="*" element={<Navigate to={authenticated ? '/app' : '/login'} replace />} />
    </Routes>
  );
}

function ProtectedRoute({ isAuthenticated, element }: { isAuthenticated: boolean; element: ReactElement | null }) {
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return element;
}

function GuestRoute({ isAuthenticated, element }: { isAuthenticated: boolean; element: ReactElement }) {
  if (isAuthenticated) {
    return <Navigate to="/app" replace />;
  }

  return element;
}

function isAuthenticated(authSession: ReturnType<typeof useAuthSession>) {
  return authSession.status === 'authenticated' && Boolean(authSession.user);
}

function getAuthenticatedRedirectPath(state: unknown) {
  if (isRouteState(state) && state.from) {
    return state.from;
  }

  return '/app';
}

function isRouteState(value: unknown): value is RouteState {
  return typeof value === 'object' && value !== null && 'from' in value && typeof value.from === 'string';
}
