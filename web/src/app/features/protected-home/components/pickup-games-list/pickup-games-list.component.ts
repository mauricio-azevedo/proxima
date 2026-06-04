import { Component, EventEmitter, Input, Output } from '@angular/core';

import type { PickupGameListItemView } from '../../../../core/pickup-games/pickup-games.models';
import { PickupGameCardComponent } from '../pickup-game-card/pickup-game-card.component';

@Component({
  selector: 'app-pickup-games-list',
  imports: [PickupGameCardComponent],
  templateUrl: './pickup-games-list.component.html',
  styleUrl: './pickup-games-list.component.scss',
})
export class PickupGamesListComponent {
  @Input({ required: true }) pickupGames: PickupGameListItemView[] = [];
  @Input({ required: true }) isLoading = false;
  @Input({ required: true }) errorMessage = '';

  @Output() readonly reloadRequested = new EventEmitter<void>();
  @Output() readonly createPickupGameRequested = new EventEmitter<void>();

  get hasPickupGames(): boolean {
    return this.pickupGames.length > 0;
  }
}
