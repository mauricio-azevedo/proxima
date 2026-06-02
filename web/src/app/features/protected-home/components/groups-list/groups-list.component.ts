import { Component, EventEmitter, Input, Output } from '@angular/core';

import type { GroupView } from '../../../../core/groups/groups.models';
import { GroupCardComponent } from '../group-card/group-card.component';

@Component({
  selector: 'app-groups-list',
  imports: [GroupCardComponent],
  templateUrl: './groups-list.component.html',
  styleUrl: './groups-list.component.scss',
})
export class GroupsListComponent {
  @Input({ required: true }) groups: GroupView[] = [];
  @Input({ required: true }) isLoading = false;
  @Input({ required: true }) errorMessage = '';

  @Output() readonly reloadRequested = new EventEmitter<void>();
  @Output() readonly createGroupRequested = new EventEmitter<void>();

  get hasGroups(): boolean {
    return this.groups.length > 0;
  }
}
