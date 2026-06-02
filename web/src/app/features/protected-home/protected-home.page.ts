import { Component, OnInit, computed, inject, signal } from '@angular/core';
import type { AbstractControl, ValidationErrors } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from '../../core/auth/auth.service';
import type { GroupView } from '../../core/groups/groups.models';
import { GroupsService } from '../../core/groups/groups.service';

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
  selector: 'app-protected-home-page',
  imports: [ReactiveFormsModule],
  templateUrl: './protected-home.page.html',
  styleUrl: './protected-home.page.scss',
})
export class ProtectedHomePage implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly groupsService = inject(GroupsService);

  readonly user = this.authService.currentUser;
  readonly groups = signal<GroupView[]>([]);
  readonly isLoading = signal(true);
  readonly isCreating = signal(false);
  readonly wasSubmitted = signal(false);
  readonly loadErrorMessage = signal('');
  readonly createErrorMessage = signal('');

  readonly form = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [groupNameValidator],
    }),
  });

  readonly hasGroups = computed(() => this.groups().length > 0);

  get name(): FormControl<string> {
    return this.form.controls.name;
  }

  ngOnInit(): void {
    this.loadGroups();
  }

  loadGroups(): void {
    this.isLoading.set(true);
    this.loadErrorMessage.set('');

    this.groupsService.findAll().subscribe({
      next: (groups) => {
        this.groups.set(groups);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
        this.loadErrorMessage.set('Não foi possível carregar seus grupos. Tente novamente.');
      },
    });
  }

  createGroup(): void {
    this.wasSubmitted.set(true);
    this.createErrorMessage.set('');

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const name = this.name.value.trim();

    this.isCreating.set(true);

    this.groupsService.create({ name }).subscribe({
      next: (group) => {
        this.groups.update((groups) => [group, ...groups]);
        this.form.reset({ name: '' });
        this.wasSubmitted.set(false);
        this.isCreating.set(false);
      },
      error: () => {
        this.isCreating.set(false);
        this.createErrorMessage.set('Não foi possível criar o grupo. Tente novamente.');
      },
    });
  }

  logout(): void {
    this.authService.logout();
  }

  shouldShowError(control: AbstractControl): boolean {
    return control.invalid && (control.touched || this.wasSubmitted());
  }
}
