import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { AbstractControl, ValidationErrors } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

const MIN_NICKNAME_LENGTH = 2;
const MAX_NICKNAME_LENGTH = 40;

function nicknameValidator(control: AbstractControl): ValidationErrors | null {
  const value = typeof control.value === 'string' ? control.value.trim() : '';

  if (!value) {
    return { required: true };
  }

  if (value.length < MIN_NICKNAME_LENGTH) {
    return { minlength: true };
  }

  if (value.length > MAX_NICKNAME_LENGTH) {
    return { maxlength: true };
  }

  return null;
}

@Component({
  selector: 'app-add-group-member-dialog',
  imports: [ReactiveFormsModule],
  templateUrl: './add-group-member-dialog.component.html',
  styleUrl: './add-group-member-dialog.component.scss',
})
export class AddGroupMemberDialogComponent {
  @Input({ required: true }) isSubmitting = false;
  @Input({ required: true }) errorMessage = '';

  @Output() readonly closed = new EventEmitter<void>();
  @Output() readonly submitted = new EventEmitter<string>();

  readonly form = new FormGroup({
    nickname: new FormControl('', {
      nonNullable: true,
      validators: [nicknameValidator],
    }),
  });

  private wasSubmitted = false;

  get nickname(): FormControl<string> {
    return this.form.controls.nickname;
  }

  submit(): void {
    this.wasSubmitted = true;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitted.emit(this.nickname.value.trim());
  }

  shouldShowError(control: AbstractControl): boolean {
    return control.invalid && (control.touched || this.wasSubmitted);
  }
}
