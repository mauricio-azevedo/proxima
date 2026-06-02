import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { getRuntimeConfig } from '../config/runtime-config';

@Injectable({ providedIn: 'root' })
export class ApiHttpService {
  private readonly apiBaseUrl = getRuntimeConfig().apiBaseUrl;

  constructor(private readonly http: HttpClient) {}

  get<TResponse>(path: string): Observable<TResponse> {
    return this.http.get<TResponse>(this.buildUrl(path));
  }

  post<TResponse, TBody extends object>(path: string, body: TBody): Observable<TResponse> {
    return this.http.post<TResponse>(this.buildUrl(path), body);
  }

  patch<TResponse, TBody extends object>(path: string, body: TBody): Observable<TResponse> {
    return this.http.patch<TResponse>(this.buildUrl(path), body);
  }

  delete<TResponse>(path: string): Observable<TResponse> {
    return this.http.delete<TResponse>(this.buildUrl(path));
  }

  private buildUrl(path: string): string {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;

    return `${this.apiBaseUrl}${normalizedPath}`;
  }
}
