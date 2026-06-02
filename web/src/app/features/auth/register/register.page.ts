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
  selector: 'app-register-page',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.page.html',
  styleUrl: './register.page.scss',
})
export class RegisterPage implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly form = new FormGroup({
    firstName: new FormControl('', {
      nonNullable: true,
      validators: [requiredText, Validators.maxLength(80)],
    }),
    lastName: new FormControl('', {
      nonNullable: true,
      validators: [requiredText, Validators.maxLength(80)],
    }),
    nickname: new FormControl('', {
      nonNullable: true,
      validators: [requiredText, Validators.maxLength(40)],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [requiredText, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [requiredText, Validators.minLength(6)],
    }),
  });

  readonly isSubmitting = signal(false);
  readonly wasSubmitted = signal(false);
  readonly errorMessage = signal('');

  get firstName(): FormControl<string> {
    return this.form.controls.firstName;
  }

  get lastName(): FormControl<string> {
    return this.form.controls.lastName;
  }

  get nickname(): FormControl<string> {
    return this.form.controls.nickname;
  }

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

    const value = this.form.getRawValue();

    this.isSubmitting.set(true);

    this.authService
      .register({
        firstName: value.firstName.trim(),
        lastName: value.lastName.trim(),
        nickname: value.nickname.trim(),
        email: value.email.trim(),
        password: value.password,
      })
      .subscribe({
        next: () => {
          this.isSubmitting.set(false);
          void this.router.navigate(['/app']);
        },
        error: () => {
          this.isSubmitting.set(false);
          this.errorMessage.set('Não foi possível criar sua conta. Confira os dados e tente novamente.');
        },
      });
  }

  shouldShowError(control: AbstractControl): boolean {
    return control.invalid && (control.touched || this.wasSubmitted());
  }
}
