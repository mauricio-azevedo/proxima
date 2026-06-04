import { useState } from 'react';

import type { AppTab } from './types/app-tab';
import type { UserSession } from './types/user-session';
import { LoginPage } from '../features/auth/login/LoginPage';
import { RegisterPage } from '../features/auth/register/RegisterPage';
import { AppShell } from '../shared/layout/AppShell';
import '../App.css';

export type AuthScreen = 'login' | 'register';

export function App() {
  const [authScreen, setAuthScreen] = useState<AuthScreen>('login');
  const [activeTab, setActiveTab] = useState<AppTab>('home');
  const [user, setUser] = useState<UserSession | null>(null);

  function authenticate(nextUser: UserSession) {
    setUser(nextUser);
    setActiveTab('home');
  }

  function logout() {
    setUser(null);
    setAuthScreen('login');
  }

  if (!user) {
    if (authScreen === 'register') {
      return <RegisterPage onLoginRequested={() => setAuthScreen('login')} onRegistered={authenticate} />;
    }

    return <LoginPage onRegisterRequested={() => setAuthScreen('register')} onLoggedIn={authenticate} />;
  }

  return <AppShell activeTab={activeTab} user={user} onTabChange={setActiveTab} onLogout={logout} />;
}
