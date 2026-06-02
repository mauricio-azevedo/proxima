import { Component, Input } from '@angular/core';

import type { GroupMemberView } from '../../../../core/groups/groups.models';

@Component({
  selector: 'app-group-members-list',
  templateUrl: './group-members-list.component.html',
  styleUrl: './group-members-list.component.scss',
})
export class GroupMembersListComponent {
  @Input({ required: true }) members: GroupMemberView[] = [];
}
