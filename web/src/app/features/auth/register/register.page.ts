import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-register-page',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.page.html',
  styleUrl: './register.page.scss',
})
export class RegisterPage {
  readonly firstName = signal('');
  readonly lastName = signal('');
  readonly nickname = signal('');
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
      .register({
        firstName: this.firstName(),
        lastName: this.lastName(),
        nickname: this.nickname(),
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
          this.errorMessage.set('Unable to create account. Check the fields and try again.');
        },
      });
  }
}
