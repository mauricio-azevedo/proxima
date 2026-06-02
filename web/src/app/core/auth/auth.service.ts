import { Injectable, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { ApiHttpService } from '../http/api-http.service';
import type { AuthResponse, AuthUser, LoginPayload, RegisterPayload } from './auth.models';

const ACCESS_TOKEN_KEY = 'proxima_access_token';
const USER_KEY = 'proxima_user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly accessTokenSignal = signal<string | null>(this.loadStoredToken());
  private readonly currentUserSignal = signal<AuthUser | null>(this.loadStoredUser());

  readonly currentUser = this.currentUserSignal.asReadonly();
  readonly isAuthenticated = computed(() => Boolean(this.accessTokenSignal()));

  constructor(
    private readonly apiHttp: ApiHttpService,
    private readonly router: Router,
  ) {}

  get accessToken(): string | null {
    return this.accessTokenSignal();
  }

  register(payload: RegisterPayload): Observable<AuthResponse> {
    return this.apiHttp
      .post<AuthResponse, RegisterPayload>('/auth/register', payload)
      .pipe(tap((response) => this.saveSession(response)));
  }

  login(payload: LoginPayload): Observable<AuthResponse> {
    return this.apiHttp
      .post<AuthResponse, LoginPayload>('/auth/login', payload)
      .pipe(tap((response) => this.saveSession(response)));
  }

  logout(): void {
    this.clearSession();
    void this.router.navigate(['/login']);
  }

  private saveSession(response: AuthResponse): void {
    localStorage.setItem(ACCESS_TOKEN_KEY, response.accessToken);
    localStorage.setItem(USER_KEY, JSON.stringify(response.user));

    this.accessTokenSignal.set(response.accessToken);
    this.currentUserSignal.set(response.user);
  }

  private clearSession(): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(USER_KEY);

    this.accessTokenSignal.set(null);
    this.currentUserSignal.set(null);
  }

  private loadStoredToken(): string | null {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  }

  private loadStoredUser(): AuthUser | null {
    const rawUser = localStorage.getItem(USER_KEY);

    if (!rawUser) {
      return null;
    }

    try {
      return JSON.parse(rawUser) as AuthUser;
    } catch {
      localStorage.removeItem(USER_KEY);
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      return null;
    }
  }
}
