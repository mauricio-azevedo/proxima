import { useState } from 'react';

import type { LoginRequest } from '../features/auth/types/login-request';
import type { RegisterRequest } from '../features/auth/types/register-request';
import { useAuthSession } from '../features/auth/hooks/use-auth-session';
import { LoginPage } from '../features/auth/login/LoginPage';
import { RegisterPage } from '../features/auth/register/RegisterPage';
import { AuthSessionLoadingPage } from '../features/auth/session/AuthSessionLoadingPage';
import { AppShell } from '../shared/layout/AppShell';
import '../App.css';
import type { AppTab } from './types/app-tab';

export type AuthScreen = 'login' | 'register';

export function App() {
  const [authScreen, setAuthScreen] = useState<AuthScreen>('login');
  const [activeTab, setActiveTab] = useState<AppTab>('home');
  const authSession = useAuthSession();

  async function login(payload: LoginRequest) {
    await authSession.login(payload);
    setActiveTab('home');
  }

  async function register(payload: RegisterRequest) {
    await authSession.register(payload);
    setActiveTab('home');
  }

  function logout() {
    authSession.logout();
    setActiveTab('home');
    setAuthScreen('login');
  }

  if (authSession.status === 'checking') {
    return <AuthSessionLoadingPage />;
  }

  if (authSession.status === 'unauthenticated' || !authSession.user) {
    if (authScreen === 'register') {
      return <RegisterPage onLoginRequested={() => setAuthScreen('login')} onRegisterRequested={register} />;
    }

    return <LoginPage onLoginRequested={login} onRegisterRequested={() => setAuthScreen('register')} />;
  }

  return <AppShell activeTab={activeTab} user={authSession.user} onTabChange={setActiveTab} onLogout={logout} />;
}
