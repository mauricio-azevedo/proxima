import { Component, EventEmitter, Input, Output } from '@angular/core';

import type { GroupMemberView } from '../../../../core/groups/groups.models';

@Component({
  selector: 'app-group-members-list',
  templateUrl: './group-members-list.component.html',
  styleUrl: './group-members-list.component.scss',
})
export class GroupMembersListComponent {
  @Input({ required: true }) members: GroupMemberView[] = [];
  @Input({ required: true }) canManageMembers = false;

  @Output() readonly addMemberRequested = new EventEmitter<void>();
}
