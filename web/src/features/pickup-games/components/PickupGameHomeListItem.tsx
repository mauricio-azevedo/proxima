import { Card, Label, Typography } from '@heroui/react';

import { useLocale } from '../../../shared/i18n/hooks/use-locale';
import type { PickupGameHomeItem } from '../types/pickup-game-home';

interface PickupGameHomeListItemProps {
  pickupGame: PickupGameHomeItem;
  variant: 'mine' | 'discover';
}

export function PickupGameHomeListItem({ pickupGame, variant }: PickupGameHomeListItemProps) {
  const { locale, t } = useLocale();
  const nextGameDay = pickupGame.nextGameDay;

  return (
    <Card className="w-full">
      <Card.Content className="grid gap-1.5">
        <div className="flex min-w-0 items-start justify-between gap-3">
          <div className="min-w-0">
            <Typography.Paragraph className="truncate font-medium" title={pickupGame.name}>
              {pickupGame.name}
            </Typography.Paragraph>
            <Typography.Paragraph size="sm" color="muted" className="truncate" title={getSubtitle(pickupGame, locale)}>
              {getSubtitle(pickupGame, locale)}
            </Typography.Paragraph>
          </div>

          <div className="shrink-0 text-right">
            <Typography.Paragraph size="sm" color="muted">
              {nextGameDay ? nextGameDay.listEntriesCount : pickupGame.memberCount}
            </Typography.Paragraph>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <Label>{getBadgeLabel(pickupGame, variant, t)}</Label>
          <Typography.Paragraph size="xs" color="muted">
            {getMetaLabel(pickupGame, t)}
          </Typography.Paragraph>
        </div>
      </Card.Content>
    </Card>
  );
}

function getSubtitle(pickupGame: PickupGameHomeItem, locale: string) {
  const nextGameDay = pickupGame.nextGameDay;
  const location = pickupGame.locationName ?? 'Local a definir';

  if (!nextGameDay) {
    return location;
  }

  return `${formatDate(nextGameDay.date, locale)}, ${pickupGame.startTime} · ${location}`;
}

function getBadgeLabel(
  pickupGame: PickupGameHomeItem,
  variant: PickupGameHomeListItemProps['variant'],
  t: ReturnType<typeof useLocale>['t'],
) {
  if (variant === 'discover') {
    return t('pickupGames.badge.open');
  }

  if (pickupGame.nextGameDay?.viewerHasJoinedList) {
    return t('pickupGames.badge.confirmed');
  }

  return t('pickupGames.badge.pending');
}

function getMetaLabel(pickupGame: PickupGameHomeItem, t: ReturnType<typeof useLocale>['t']) {
  const nextGameDay = pickupGame.nextGameDay;

  if (!nextGameDay) {
    return t('pickupGames.meta.noNextDay');
  }

  if (nextGameDay.queueEntriesCount > 0) {
    return t('pickupGames.meta.queue').replace('{count}', String(nextGameDay.queueEntriesCount));
  }

  return t('pickupGames.meta.list').replace('{count}', String(nextGameDay.listEntriesCount));
}

function formatDate(value: string, locale: string) {
  return new Intl.DateTimeFormat(locale, { weekday: 'short', day: '2-digit', month: 'short' }).format(new Date(value));
}
