import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import type { GroupMemberView, GroupView } from '../../core/groups/groups.models';
import { GroupsService } from '../../core/groups/groups.service';
import { AddGroupMemberDialogComponent } from './components/add-group-member-dialog/add-group-member-dialog.component';
import { GroupMembersListComponent } from './components/group-members-list/group-members-list.component';

@Component({
  selector: 'app-group-detail-page',
  imports: [AddGroupMemberDialogComponent, GroupMembersListComponent, RouterLink],
  templateUrl: './group-detail.page.html',
  styleUrl: './group-detail.page.scss',
})
export class GroupDetailPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly groupsService = inject(GroupsService);

  readonly group = signal<GroupView | null>(null);
  readonly members = signal<GroupMemberView[]>([]);
  readonly isLoading = signal(true);
  readonly isAddingMember = signal(false);
  readonly isAddMemberDialogOpen = signal(false);
  readonly loadErrorMessage = signal('');
  readonly addMemberErrorMessage = signal('');
  readonly groupId = this.route.snapshot.paramMap.get('groupId') ?? '';

  readonly canManageMembers = computed(() => this.group()?.members[0]?.role === 'ADMIN');

  ngOnInit(): void {
    this.loadPage();
  }

  loadPage(): void {
    this.isLoading.set(true);
    this.loadErrorMessage.set('');

    this.groupsService.findOne(this.groupId).subscribe({
      next: (group) => {
        this.group.set(group);
        this.loadMembers();
      },
      error: () => {
        this.isLoading.set(false);
        this.loadErrorMessage.set('Não foi possível carregar este grupo.');
      },
    });
  }

  openAddMemberDialog(): void {
    this.addMemberErrorMessage.set('');
    this.isAddMemberDialogOpen.set(true);
  }

  closeAddMemberDialog(): void {
    if (this.isAddingMember()) {
      return;
    }

    this.addMemberErrorMessage.set('');
    this.isAddMemberDialogOpen.set(false);
  }

  addMember(nickname: string): void {
    this.addMemberErrorMessage.set('');
    this.isAddingMember.set(true);

    this.groupsService.createMember(this.groupId, { nickname }).subscribe({
      next: (member) => {
        this.members.update((members) => [...members, member]);
        this.group.update((group) =>
          group
            ? {
                ...group,
                _count: {
                  ...group._count,
                  members: group._count.members + 1,
                },
              }
            : group,
        );
        this.isAddingMember.set(false);
        this.isAddMemberDialogOpen.set(false);
      },
      error: () => {
        this.isAddingMember.set(false);
        this.addMemberErrorMessage.set('Não foi possível adicionar o membro. Tente novamente.');
      },
    });
  }

  private loadMembers(): void {
    this.groupsService.findMembers(this.groupId).subscribe({
      next: (members) => {
        this.members.set(members);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
        this.loadErrorMessage.set('Não foi possível carregar os membros deste grupo.');
      },
    });
  }
}
