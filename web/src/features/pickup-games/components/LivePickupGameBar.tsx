import { Button, Card, Label, Typography } from '@heroui/react';

import { useLocale } from '../../../shared/i18n/hooks/use-locale';
import type { PickupGameHomeItem } from '../types/pickup-game-home';

interface LivePickupGameBarProps {
  pickupGame: PickupGameHomeItem;
}

export function LivePickupGameBar({ pickupGame }: LivePickupGameBarProps) {
  const { t } = useLocale();
  const gameDay = pickupGame.nextGameDay;

  if (!gameDay?.operationalState) {
    return null;
  }

  return (
    <Card className="live-pickup-game-bar">
      <Card.Content className="grid gap-2">
        <div className="flex min-w-0 items-center justify-between gap-3">
          <Typography.Paragraph className="truncate font-medium" title={pickupGame.name}>
            {pickupGame.name}
          </Typography.Paragraph>
          <Label>{getOperationalLabel(pickupGame, t)}</Label>
        </div>

        <div className="flex min-w-0 items-center justify-between gap-3">
          <div className="min-w-0">
            <Typography.Paragraph className="truncate font-medium">
              {getMainLabel(pickupGame, t)}
            </Typography.Paragraph>
            <Typography.Paragraph size="xs" color="muted">
              {getSecondaryLabel(pickupGame, t)}
            </Typography.Paragraph>
          </div>

          <Button size="sm" variant={gameDay.primaryAction === 'start_match' ? 'primary' : 'secondary'}>
            {getActionLabel(pickupGame, t)}
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

function getOperationalLabel(pickupGame: PickupGameHomeItem, t: ReturnType<typeof useLocale>['t']) {
  const gameDay = pickupGame.nextGameDay;

  if (gameDay?.operationalState === 'playing') return t('pickupGames.live.playing');
  if (gameDay?.operationalState === 'ready_to_start') return t('pickupGames.live.ready');
  return t('pickupGames.live.waiting');
}

function getMainLabel(pickupGame: PickupGameHomeItem, t: ReturnType<typeof useLocale>['t']) {
  const gameDay = pickupGame.nextGameDay;

  if (!gameDay) return pickupGame.startTime;

  if (gameDay.operationalState === 'playing' && gameDay.currentMatch) {
    return `${gameDay.currentMatch.number}ª ${t('pickupGames.live.match')} · ${gameDay.currentMatch.teamAScore} × ${gameDay.currentMatch.teamBScore}`;
  }

  if (gameDay.primaryAction === 'start_match') {
    return t('pickupGames.live.enoughPlayers')
      .replace('{count}', String(gameDay.queueEntriesCount))
      .replace('{teamSize}', String(gameDay.teamSize));
  }

  if (gameDay.viewerState === 'inside_first_match') return t('pickupGames.live.inside');
  if (gameDay.viewerState === 'next_team' && gameDay.viewerTeamQueueNumber) {
    return t('pickupGames.live.nextTeam').replace('{number}', String(gameDay.viewerTeamQueueNumber));
  }
  if (gameDay.viewerState === 'playing') return t('pickupGames.live.viewerPlaying');

  return t('pickupGames.live.presentPlayers').replace('{count}', String(gameDay.queueEntriesCount));
}

function getSecondaryLabel(pickupGame: PickupGameHomeItem, t: ReturnType<typeof useLocale>['t']) {
  const gameDay = pickupGame.nextGameDay;

  if (!gameDay) return '';

  if (gameDay.operationalState === 'playing' && gameDay.currentMatch) {
    return formatElapsedTime(gameDay.currentMatch.startedAt);
  }

  if (gameDay.operationalState === 'waiting_for_players') {
    const missingPlayers = Math.max(0, gameDay.teamSize * 2 - gameDay.queueEntriesCount);
    return t('pickupGames.live.missingPlayers').replace('{count}', String(missingPlayers));
  }

  if (gameDay.operationalState === 'ready_to_start' && gameDay.primaryAction !== 'start_match') {
    return t('pickupGames.live.waitingAdmin');
  }

  return t('pickupGames.live.open');
}

function getActionLabel(pickupGame: PickupGameHomeItem, t: ReturnType<typeof useLocale>['t']) {
  const gameDay = pickupGame.nextGameDay;

  if (!gameDay) return t('pickupGames.action.open');
  if (gameDay.primaryAction === 'start_match') return t('pickupGames.action.start');
  if (gameDay.primaryAction === 'arrive') {
    if (gameDay.operationalState === 'playing' && gameDay.viewerProspectiveTeamQueueNumber) {
      return t('pickupGames.action.pickNext').replace('{number}', String(gameDay.viewerProspectiveTeamQueueNumber));
    }

    return t('pickupGames.action.arrived');
  }

  return t('pickupGames.action.open');
}

function formatElapsedTime(startedAt: string) {
  const elapsedMilliseconds = Math.max(0, Date.now() - new Date(startedAt).getTime());
  const elapsedMinutes = Math.floor(elapsedMilliseconds / 60000);
  const minutes = elapsedMinutes % 60;
  const hours = Math.floor(elapsedMinutes / 60);

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, '0')}`;
  }

  return `${minutes}:00`;
}
