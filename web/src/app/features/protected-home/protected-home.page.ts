import { Component, OnInit, inject, signal } from '@angular/core';

import { AuthService } from '../../core/auth/auth.service';
import type {
  CreatePickupGameRequest,
  PickupGameListItemView,
} from '../../core/pickup-games/pickup-games.models';
import { PickupGamesService } from '../../core/pickup-games/pickup-games.service';
import { AppShellComponent } from '../../shared/app-shell/app-shell.component';
import { CreatePickupGameDialogComponent } from './components/create-pickup-game-dialog/create-pickup-game-dialog.component';
import { PickupGamesListComponent } from './components/pickup-games-list/pickup-games-list.component';

@Component({
  selector: 'app-protected-home-page',
  imports: [AppShellComponent, CreatePickupGameDialogComponent, PickupGamesListComponent],
  templateUrl: './protected-home.page.html',
  styleUrl: './protected-home.page.scss',
})
export class ProtectedHomePage implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly pickupGamesService = inject(PickupGamesService);

  readonly pickupGames = signal<PickupGameListItemView[]>([]);
  readonly isLoading = signal(true);
  readonly isCreating = signal(false);
  readonly isCreateDialogOpen = signal(false);
  readonly loadErrorMessage = signal('');
  readonly createErrorMessage = signal('');

  ngOnInit(): void {
    this.loadPickupGames();
  }

  loadPickupGames(): void {
    this.isLoading.set(true);
    this.loadErrorMessage.set('');

    this.pickupGamesService.findAll().subscribe({
      next: (pickupGames) => {
        this.pickupGames.set(pickupGames);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
        this.loadErrorMessage.set('Não foi possível carregar suas peladas. Tente novamente.');
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

  createPickupGame(payload: CreatePickupGameRequest): void {
    this.createErrorMessage.set('');
    this.isCreating.set(true);

    this.pickupGamesService.create(payload).subscribe({
      next: (pickupGame) => {
        this.pickupGames.update((pickupGames) => [
          pickupGame,
          ...pickupGames.filter((current) => current.id !== pickupGame.id),
        ]);
        this.isCreating.set(false);
        this.isCreateDialogOpen.set(false);
      },
      error: () => {
        this.isCreating.set(false);
        this.createErrorMessage.set('Não foi possível criar a pelada. Tente novamente.');
      },
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
