import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-groups-hero',
  templateUrl: './groups-hero.component.html',
  styleUrl: './groups-hero.component.scss',
})
export class GroupsHeroComponent {
  @Input({ required: true }) hasGroups = false;

  @Output() readonly createGroupRequested = new EventEmitter<void>();
}
