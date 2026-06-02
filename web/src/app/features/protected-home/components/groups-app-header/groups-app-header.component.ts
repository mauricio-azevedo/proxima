import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-groups-app-header',
  templateUrl: './groups-app-header.component.html',
  styleUrl: './groups-app-header.component.scss',
})
export class GroupsAppHeaderComponent {
  @Input({ required: true }) nickname: string | null | undefined;

  @Output() readonly logoutRequested = new EventEmitter<void>();
}
