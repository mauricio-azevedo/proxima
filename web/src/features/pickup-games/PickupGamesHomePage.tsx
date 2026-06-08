import { Button, Card, Spinner, Typography } from '@heroui/react';

import { useLocale } from '../../shared/i18n/hooks/use-locale';
import { PickupGameHomeListItem } from './components/PickupGameHomeListItem';
import type { PickupGamesHomeResponse } from './types/pickup-game-home';

interface PickupGamesHomePageProps {
  data: PickupGamesHomeResponse | null;
  errorMessage: string | null;
  status: 'loading' | 'success' | 'error';
  onCreatePickupGameRequested?: () => void;
}

export function PickupGamesHomePage({
  data,
  errorMessage,
  status,
  onCreatePickupGameRequested,
}: PickupGamesHomePageProps) {
  const { t } = useLocale();

  if (status === 'loading') {
    return (
      <div className="app-content-state" aria-busy="true">
        <Spinner aria-label={t('pickupGames.loading')} />
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="app-content-state">
        <Card className="w-full">
          <Card.Content className="grid gap-3 text-center">
            <Typography.Heading level={2}>{t('pickupGames.error.title')}</Typography.Heading>
            <Typography.Paragraph color="muted">{errorMessage ?? t('pickupGames.error.description')}</Typography.Paragraph>
          </Card.Content>
        </Card>
      </div>
    );
  }

  const myPickupGames = data?.myPickupGames ?? [];
  const discoverPickupGames = data?.discoverPickupGames ?? [];
  const empty = myPickupGames.length === 0 && discoverPickupGames.length === 0;

  if (empty) {
    return (
      <div className="pickup-games-home">
        <EmptyPickupGamesState onCreatePickupGameRequested={onCreatePickupGameRequested} />
      </div>
    );
  }

  return (
    <div className="pickup-games-home">
      <div className="pickup-games-primary-action">
        <Button variant="primary" onClick={onCreatePickupGameRequested}>
          {t('pickupGames.action.create')}
        </Button>
      </div>

      <section className="pickup-games-section" aria-labelledby="my-pickup-games-title">
        <div className="pickup-games-section-header">
          <Typography.Heading id="my-pickup-games-title" level={2}>
            {t('pickupGames.section.mine')}
          </Typography.Heading>
          <Typography.Paragraph size="sm" color="muted">
            {myPickupGames.length}
          </Typography.Paragraph>
        </div>

        {myPickupGames.length > 0 ? (
          <div className="pickup-games-list">
            {myPickupGames.map((pickupGame) => (
              <PickupGameHomeListItem key={pickupGame.id} pickupGame={pickupGame} variant="mine" />
            ))}
          </div>
        ) : (
          <SectionEmptyState message={t('pickupGames.empty.mine')} />
        )}
      </section>

      <section className="pickup-games-section" aria-labelledby="discover-pickup-games-title">
        <div className="pickup-games-section-header">
          <Typography.Heading id="discover-pickup-games-title" level={2}>
            {t('pickupGames.section.discover')}
          </Typography.Heading>
          <Typography.Paragraph size="sm" color="muted">
            {t('pickupGames.section.public')}
          </Typography.Paragraph>
        </div>

        {discoverPickupGames.length > 0 ? (
          <div className="pickup-games-list">
            {discoverPickupGames.map((pickupGame) => (
              <PickupGameHomeListItem key={pickupGame.id} pickupGame={pickupGame} variant="discover" />
            ))}
          </div>
        ) : (
          <SectionEmptyState message={t('pickupGames.empty.discover')} />
        )}
      </section>
    </div>
  );
}

function EmptyPickupGamesState({ onCreatePickupGameRequested }: { onCreatePickupGameRequested?: () => void }) {
  const { t } = useLocale();

  return (
    <Card className="w-full">
      <Card.Content className="grid gap-4 text-center">
        <div className="grid gap-1">
          <Typography.Heading level={2}>{t('pickupGames.empty.title')}</Typography.Heading>
          <Typography.Paragraph color="muted">{t('pickupGames.empty.description')}</Typography.Paragraph>
        </div>

        <Button variant="primary" onClick={onCreatePickupGameRequested}>
          {t('pickupGames.action.create')}
        </Button>
      </Card.Content>
    </Card>
  );
}

function SectionEmptyState({ message }: { message: string }) {
  return (
    <Card className="w-full">
      <Card.Content>
        <Typography.Paragraph color="muted">{message}</Typography.Paragraph>
      </Card.Content>
    </Card>
  );
}
