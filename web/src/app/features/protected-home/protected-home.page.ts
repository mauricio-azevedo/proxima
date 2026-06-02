import { Component, inject } from '@angular/core';

import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-protected-home-page',
  templateUrl: './protected-home.page.html',
  styleUrl: './protected-home.page.scss',
})
export class ProtectedHomePage {
  private readonly authService = inject(AuthService);

  readonly user = this.authService.currentUser;

  logout(): void {
    this.authService.logout();
  }
}
