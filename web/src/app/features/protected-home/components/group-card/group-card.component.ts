import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { GroupView } from '../../../../core/groups/groups.models';

@Component({
  selector: 'app-group-card',
  imports: [RouterLink],
  templateUrl: './group-card.component.html',
  styleUrl: './group-card.component.scss',
})
export class GroupCardComponent {
  @Input({ required: true }) group!: GroupView;

  get roleLabel(): string {
    return this.group.members[0]?.role === 'ADMIN' ? 'Admin' : 'Membro';
  }
}
