import { useState } from 'react';

import { AuthSessionLoadingPage } from '../features/auth/session/AuthSessionLoadingPage';
import { useAuthSession } from '../features/auth/hooks/use-auth-session';
import { LoginPage } from '../features/auth/login/LoginPage';
import { RegisterPage } from '../features/auth/register/RegisterPage';
import { AppShell } from '../shared/layout/AppShell';
import '../App.css';
import type { AppTab } from './types/app-tab';

export type AuthScreen = 'login' | 'register';

export function App() {
  const [authScreen, setAuthScreen] = useState<AuthScreen>('login');
  const [activeTab, setActiveTab] = useState<AppTab>('home');
  const authSession = useAuthSession();

  async function login(payload: Parameters<typeof authSession.login>[0]) {
    await authSession.login(payload);
    setActiveTab('home');
  }

  async function register(payload: Parameters<typeof authSession.register>[0]) {
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
