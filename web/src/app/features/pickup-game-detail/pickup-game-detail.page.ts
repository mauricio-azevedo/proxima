import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';
import type { PickupGameDetailView } from '../../core/pickup-games/pickup-games.models';
import { PickupGamesService } from '../../core/pickup-games/pickup-games.service';
import { AppShellComponent } from '../../shared/app-shell/app-shell.component';

@Component({
  selector: 'app-pickup-game-detail-page',
  imports: [AppShellComponent],
  templateUrl: './pickup-game-detail.page.html',
  styleUrl: './pickup-game-detail.page.scss',
})
export class PickupGameDetailPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly authService = inject(AuthService);
  private readonly pickupGamesService = inject(PickupGamesService);

  readonly pickupGame = signal<PickupGameDetailView | null>(null);
  readonly isLoading = signal(true);
  readonly errorMessage = signal('');

  ngOnInit(): void {
    this.loadPickupGame();
  }

  loadPickupGame(): void {
    const pickupGameId = this.route.snapshot.paramMap.get('pickupGameId');

    if (!pickupGameId) {
      this.isLoading.set(false);
      this.errorMessage.set('Pelada não encontrada.');
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set('');

    this.pickupGamesService.findOne(pickupGameId).subscribe({
      next: (pickupGame) => {
        this.pickupGame.set(pickupGame);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
        this.errorMessage.set('Não foi possível carregar esta pelada.');
      },
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
