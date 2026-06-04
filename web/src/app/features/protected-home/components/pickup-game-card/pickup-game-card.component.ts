import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import type {
  GameDayStatus,
  PickupGameListItemView,
  Weekday,
} from '../../../../core/pickup-games/pickup-games.models';

const WEEKDAY_LABELS: Record<Weekday, string> = {
  MONDAY: 'Segunda',
  TUESDAY: 'Terça',
  WEDNESDAY: 'Quarta',
  THURSDAY: 'Quinta',
  FRIDAY: 'Sexta',
  SATURDAY: 'Sábado',
  SUNDAY: 'Domingo',
};

const STATUS_LABELS: Record<GameDayStatus, string> = {
  SCHEDULED: 'Marcada',
  WAITING_FOR_PLAYERS: 'Esperando jogadores',
  PLAYING: 'Rolando',
  FINISHED: 'Finalizada',
  CANCELLED: 'Cancelada',
};

@Component({
  selector: 'app-pickup-game-card',
  imports: [RouterLink],
  templateUrl: './pickup-game-card.component.html',
  styleUrl: './pickup-game-card.component.scss',
})
export class PickupGameCardComponent {
  @Input({ required: true }) pickupGame!: PickupGameListItemView;

  get primaryDay() {
    return this.pickupGame.days[0] ?? null;
  }

  get isAdmin(): boolean {
    return this.pickupGame.admins.length > 0;
  }

  get isSaved(): boolean {
    return this.pickupGame.users.length > 0;
  }

  get weekdayLabel(): string {
    return WEEKDAY_LABELS[this.pickupGame.weekday];
  }

  get statusLabel(): string {
    return this.primaryDay ? STATUS_LABELS[this.primaryDay.status] : 'Sem próximo dia';
  }

  get statusClass(): string {
    return this.primaryDay?.status.toLowerCase().replaceAll('_', '-') ?? 'none';
  }

  get playerCountLabel(): string {
    const count = this.pickupGame._count.users;
    return `${count} pessoa${count === 1 ? '' : 's'}`;
  }

  get listCountLabel(): string {
    const count = this.primaryDay?._count.listEntries ?? 0;
    return `${count} nome${count === 1 ? '' : 's'}`;
  }

  get arrivalCountLabel(): string {
    const count = this.primaryDay?._count.queueEntries ?? 0;
    return `${count} chegou${count === 1 ? '' : 'aram'}`;
  }

  formatDate(value: string | undefined): string {
    if (!value) {
      return 'Sem data';
    }

    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'short',
    }).format(new Date(value));
  }
}
