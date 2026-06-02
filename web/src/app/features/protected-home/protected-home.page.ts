import { Component, OnInit, inject, signal } from '@angular/core';

import { AuthService } from '../../core/auth/auth.service';
import type { GroupView } from '../../core/groups/groups.models';
import { GroupsService } from '../../core/groups/groups.service';
import { AppShellComponent } from '../../shared/app-shell/app-shell.component';
import { CreateGroupDialogComponent } from './components/create-group-dialog/create-group-dialog.component';
import { GroupsListComponent } from './components/groups-list/groups-list.component';

@Component({
  selector: 'app-protected-home-page',
  imports: [AppShellComponent, CreateGroupDialogComponent, GroupsListComponent],
  templateUrl: './protected-home.page.html',
  styleUrl: './protected-home.page.scss',
})
export class ProtectedHomePage implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly groupsService = inject(GroupsService);

  readonly groups = signal<GroupView[]>([]);
  readonly isLoading = signal(true);
  readonly isCreating = signal(false);
  readonly isCreateDialogOpen = signal(false);
  readonly loadErrorMessage = signal('');
  readonly createErrorMessage = signal('');

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

  openCreateDialog(): void {
    this.createErrorMessage.set('');
    this.isCreateDialogOpen.set(true);
  }

  closeCreateDialog(): void {
    if (this.isCreating()) {
      return;
    }

    this.isCreateDialogOpen.set(false);
    this.createErrorMessage.set('');
  }

  createGroup(name: string): void {
    this.createErrorMessage.set('');
    this.isCreating.set(true);

    this.groupsService.create({ name }).subscribe({
      next: (group) => {
        this.groups.update((groups) => [group, ...groups.filter((current) => current.id !== group.id)]);
        this.isCreating.set(false);
        this.isCreateDialogOpen.set(false);
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
}
