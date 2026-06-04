import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { AbstractControl, ValidationErrors } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import type { CreatePickupGameRequest, PickupGameVisibility, Weekday } from '../../../../core/pickup-games/pickup-games.models';

const MIN_PICKUP_GAME_NAME_LENGTH = 2;
const MAX_PICKUP_GAME_NAME_LENGTH = 80;
const MIN_TEAM_SIZE = 2;
const MAX_TEAM_SIZE = 11;

function pickupGameNameValidator(control: AbstractControl): ValidationErrors | null {
  const value = typeof control.value === 'string' ? control.value.trim() : '';

  if (!value) {
    return { required: true };
  }

  if (value.length < MIN_PICKUP_GAME_NAME_LENGTH) {
    return { minlength: true };
  }

  if (value.length > MAX_PICKUP_GAME_NAME_LENGTH) {
    return { maxlength: true };
  }

  return null;
}

function startTimeValidator(control: AbstractControl): ValidationErrors | null {
  const value = typeof control.value === 'string' ? control.value.trim() : '';
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(value) ? null : { time: true };
}

function teamSizeValidator(control: AbstractControl): ValidationErrors | null {
  const value = Number(control.value);

  if (!Number.isInteger(value)) {
    return { integer: true };
  }

  if (value < MIN_TEAM_SIZE || value > MAX_TEAM_SIZE) {
    return { range: true };
  }

  return null;
}

@Component({
  selector: 'app-create-pickup-game-dialog',
  imports: [ReactiveFormsModule],
  templateUrl: './create-pickup-game-dialog.component.html',
  styleUrl: './create-pickup-game-dialog.component.scss',
})
export class CreatePickupGameDialogComponent {
  @Input({ required: true }) isCreating = false;
  @Input({ required: true }) errorMessage = '';

  @Output() readonly closed = new EventEmitter<void>();
  @Output() readonly submitted = new EventEmitter<CreatePickupGameRequest>();

  readonly weekdays: Array<{ value: Weekday; label: string }> = [
    { value: 'MONDAY', label: 'Segunda' },
    { value: 'TUESDAY', label: 'Terça' },
    { value: 'WEDNESDAY', label: 'Quarta' },
    { value: 'THURSDAY', label: 'Quinta' },
    { value: 'FRIDAY', label: 'Sexta' },
    { value: 'SATURDAY', label: 'Sábado' },
    { value: 'SUNDAY', label: 'Domingo' },
  ];

  readonly form = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [pickupGameNameValidator],
    }),
    locationName: new FormControl('', { nonNullable: true }),
    weekday: new FormControl<Weekday>('MONDAY', { nonNullable: true }),
    startTime: new FormControl('19:00', {
      nonNullable: true,
      validators: [startTimeValidator],
    }),
    defaultTeamSize: new FormControl(4, {
      nonNullable: true,
      validators: [teamSizeValidator],
    }),
    visibility: new FormControl<PickupGameVisibility>('PRIVATE', { nonNullable: true }),
  });

  private wasSubmitted = false;

  get name(): FormControl<string> {
    return this.form.controls.name;
  }

  get startTime(): FormControl<string> {
    return this.form.controls.startTime;
  }

  get defaultTeamSize(): FormControl<number> {
    return this.form.controls.defaultTeamSize;
  }

  submit(): void {
    this.wasSubmitted = true;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();

    this.submitted.emit({
      name: value.name.trim(),
      locationName: value.locationName.trim() || null,
      weekday: value.weekday,
      startTime: value.startTime.trim(),
      defaultTeamSize: Number(value.defaultTeamSize),
      visibility: value.visibility,
    });
  }

  shouldShowError(control: AbstractControl): boolean {
    return control.invalid && (control.touched || this.wasSubmitted);
  }
}
