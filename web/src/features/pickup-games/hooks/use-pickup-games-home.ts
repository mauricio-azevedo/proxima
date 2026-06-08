import { useEffect, useState } from 'react';

import { getPickupGamesHome } from '../api/get-pickup-games-home';
import type { PickupGamesHomeResponse } from '../types/pickup-game-home';

type PickupGamesHomeStatus = 'loading' | 'success' | 'error';

interface PickupGamesHomeState {
  data: PickupGamesHomeResponse | null;
  errorMessage: string | null;
  status: PickupGamesHomeStatus;
}

export function usePickupGamesHome() {
  const [state, setState] = useState<PickupGamesHomeState>({
    data: null,
    errorMessage: null,
    status: 'loading',
  });

  useEffect(() => {
    let isMounted = true;

    async function loadPickupGamesHome() {
      try {
        const data = await getPickupGamesHome();

        if (!isMounted) return;

        setState({ data, errorMessage: null, status: 'success' });
      } catch (error) {
        if (!isMounted) return;

        setState({
          data: null,
          errorMessage: error instanceof Error ? error.message : 'Could not load pickup games.',
          status: 'error',
        });
      }
    }

    void loadPickupGamesHome();

    return () => {
      isMounted = false;
    };
  }, []);

  return state;
}
