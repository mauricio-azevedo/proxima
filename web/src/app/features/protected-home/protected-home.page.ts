import { Component } from '@angular/core';

import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-protected-home-page',
  templateUrl: './protected-home.page.html',
  styleUrl: './protected-home.page.scss',
})
export class ProtectedHomePage {
  readonly user = this.authService.currentUser;

  constructor(private readonly authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}
