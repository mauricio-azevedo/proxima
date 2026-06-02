import { Component, OnInit, inject, signal } from '@angular/core';
import type { AbstractControl, ValidationErrors } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../../../core/auth/auth.service';

function requiredText(control: AbstractControl): ValidationErrors | null {
  const value = typeof control.value === 'string' ? control.value.trim() : '';

  return value ? null : { required: true };
}

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss',
})
export class LoginPage implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly form = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [requiredText, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [requiredText],
    }),
  });

  readonly isSubmitting = signal(false);
  readonly wasSubmitted = signal(false);
  readonly errorMessage = signal('');

  get email(): FormControl<string> {
    return this.form.controls.email;
  }

  get password(): FormControl<string> {
    return this.form.controls.password;
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      void this.router.navigate(['/app']);
    }
  }

  submit(): void {
    this.wasSubmitted.set(true);
    this.errorMessage.set('');

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { email, password } = this.form.getRawValue();

    this.isSubmitting.set(true);

    this.authService
      .login({
        email: email.trim(),
        password,
      })
      .subscribe({
        next: () => {
          this.isSubmitting.set(false);
          void this.router.navigate(['/app']);
        },
        error: () => {
          this.isSubmitting.set(false);
          this.errorMessage.set('Não foi possível entrar. Confira o email e a senha.');
        },
      });
  }

  shouldShowError(control: AbstractControl): boolean {
    return control.invalid && (control.touched || this.wasSubmitted());
  }
}
