import { useState, type ReactElement } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router';

import { useAuthSession } from '../features/auth/hooks/use-auth-session';
import { LoginPage } from '../features/auth/login/LoginPage';
import { RegisterPage } from '../features/auth/register/RegisterPage';
import { AuthSessionLoadingPage } from '../features/auth/session/AuthSessionLoadingPage';
import type { AuthOperation } from '../features/auth/types/auth-operation';
import type { LoginRequest } from '../features/auth/types/login-request';
import type { RegisterRequest } from '../features/auth/types/register-request';
import { CreatePickupGamePage } from '../features/pickup-games/CreatePickupGamePage';
import { useLocale } from '../shared/i18n/hooks/use-locale';
import { AppShell } from '../shared/layout/AppShell';
import { PageFade } from '../shared/ui/PageFade';
import '../App.css';
import type { AppTab } from './types/app-tab';

interface RouteState {
  from?: string;
}

export function App() {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState<AppTab>('home');
  const [authOperation, setAuthOperation] = useState<AuthOperation>(null);
  const [authErrorMessage, setAuthErrorMessage] = useState<string | null>(null);
  const authSession = useAuthSession();
  const location = useLocation();
  const navigate = useNavigate();
  const authenticated = isAuthenticated(authSession);
  const isAuthPending = authSession.status === 'checking' || authOperation !== null;

  function login(payload: LoginRequest) {
    void authenticate('login', payload);
  }

  function register(payload: RegisterRequest) {
    void authenticate('register', payload);
  }

  async function authenticate(operation: Exclude<AuthOperation, null>, payload: LoginRequest | RegisterRequest) {
    setAuthErrorMessage(null);
    setAuthOperation(operation);

    try {
      if (operation === 'login') {
        await authSession.login(payload as LoginRequest);
        navigate(getAuthenticatedRedirectPath(location.state), { replace: true });
      } else {
        await authSession.register(payload as RegisterRequest);
        navigate('/app', { replace: true });
      }

      setActiveTab('home');
    } catch (error) {
      setAuthErrorMessage(readAuthErrorMessage(error, getAuthFallbackMessage(operation, t)));
    } finally {
      setAuthOperation(null);
    }
  }

  function logout() {
    authSession.logout();
    setActiveTab('home');
    setAuthErrorMessage(null);
    navigate('/login', { replace: true });
  }

  function navigateToLogin() {
    setAuthErrorMessage(null);
    navigate('/login');
  }

  function navigateToRegister() {
    setAuthErrorMessage(null);
    navigate('/register');
  }

  function navigateToCreatePickupGame() {
    setActiveTab('home');
    navigate('/app/pickup-games/new');
  }

  function navigateToHome() {
    setActiveTab('home');
    navigate('/app');
  }

  function changeTab(tab: AppTab) {
    setActiveTab(tab);

    if (location.pathname !== '/app') {
      navigate('/app');
    }
  }

  return (
    <AnimatePresence mode="wait">
      {isAuthPending ? (
        <PageFade key="auth-loading">
          <AuthSessionLoadingPage />
        </PageFade>
      ) : (
        <PageFade key={location.pathname}>
          <Routes location={location}>
            <Route
              path="/login"
              element={
                <GuestRoute
                  isAuthenticated={authenticated}
                  element={
                    <LoginPage
                      errorMessage={authErrorMessage}
                      isSubmitting={authOperation === 'login'}
                      onLoginRequested={login}
                      onRegisterRequested={navigateToRegister}
                    />
                  }
                />
              }
            />
            <Route
              path="/register"
              element={
                <GuestRoute
                  isAuthenticated={authenticated}
                  element={
                    <RegisterPage
                      errorMessage={authErrorMessage}
                      isSubmitting={authOperation === 'register'}
                      onLoginRequested={navigateToLogin}
                      onRegisterRequested={register}
                    />
                  }
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
                      <AppShell
                        activeTab={activeTab}
                        user={authSession.user}
                        onCreatePickupGameRequested={navigateToCreatePickupGame}
                        onTabChange={changeTab}
                        onLogout={logout}
                      />
                    ) : null
                  }
                />
              }
            />
            <Route
              path="/app/pickup-games/new"
              element={
                <ProtectedRoute
                  isAuthenticated={authenticated}
                  element={
                    authSession.user ? (
                      <AppShell
                        activeTab="home"
                        headerVariant="compact"
                        showDock={false}
                        showLiveBar={false}
                        title={t('pickupGames.create.shellTitle')}
                        user={authSession.user}
                        onBack={navigateToHome}
                        onCreatePickupGameRequested={navigateToCreatePickupGame}
                        onTabChange={changeTab}
                        onLogout={logout}
                      >
                        <CreatePickupGamePage onCancel={navigateToHome} onCreated={navigateToHome} />
                      </AppShell>
                    ) : null
                  }
                />
              }
            />
            <Route path="*" element={<Navigate to={authenticated ? '/app' : '/login'} replace />} />
          </Routes>
        </PageFade>
      )}
    </AnimatePresence>
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

function readAuthErrorMessage(error: unknown, fallbackMessage: string) {
  if (error instanceof Error) {
    return error.message;
  }

  return fallbackMessage;
}

function getAuthFallbackMessage(operation: Exclude<AuthOperation, null>, t: ReturnType<typeof useLocale>['t']) {
  return operation === 'login' ? t('auth.login.errorFallback') : t('auth.register.errorFallback');
}
