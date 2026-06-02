import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { AbstractControl, ValidationErrors } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

const MIN_GROUP_NAME_LENGTH = 2;
const MAX_GROUP_NAME_LENGTH = 80;

function groupNameValidator(control: AbstractControl): ValidationErrors | null {
  const value = typeof control.value === 'string' ? control.value.trim() : '';

  if (!value) {
    return { required: true };
  }

  if (value.length < MIN_GROUP_NAME_LENGTH) {
    return { minlength: true };
  }

  if (value.length > MAX_GROUP_NAME_LENGTH) {
    return { maxlength: true };
  }

  return null;
}

@Component({
  selector: 'app-create-group-dialog',
  imports: [ReactiveFormsModule],
  templateUrl: './create-group-dialog.component.html',
  styleUrl: './create-group-dialog.component.scss',
})
export class CreateGroupDialogComponent {
  @Input({ required: true }) isCreating = false;
  @Input({ required: true }) errorMessage = '';

  @Output() readonly closed = new EventEmitter<void>();
  @Output() readonly submitted = new EventEmitter<string>();

  readonly form = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [groupNameValidator],
    }),
  });

  private wasSubmitted = false;

  get name(): FormControl<string> {
    return this.form.controls.name;
  }

  submit(): void {
    this.wasSubmitted = true;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitted.emit(this.name.value.trim());
  }

  shouldShowError(control: AbstractControl): boolean {
    return control.invalid && (control.touched || this.wasSubmitted);
  }
}
