import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss',
})
export class LoginPage {
  readonly email = signal('');
  readonly password = signal('');
  readonly isSubmitting = signal(false);
  readonly errorMessage = signal('');

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  submit(): void {
    this.errorMessage.set('');
    this.isSubmitting.set(true);

    this.authService
      .login({
        email: this.email(),
        password: this.password(),
      })
      .subscribe({
        next: () => {
          this.isSubmitting.set(false);
          void this.router.navigate(['/app']);
        },
        error: () => {
          this.isSubmitting.set(false);
          this.errorMessage.set('Email ou senha inválidos.');
        },
      });
  }
}
