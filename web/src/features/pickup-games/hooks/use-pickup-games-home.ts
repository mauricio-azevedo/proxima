import { useCallback, useEffect, useState } from 'react';

import { getPickupGamesHome } from '../api/get-pickup-games-home';
import type { PickupGamesHomeResponse } from '../types/pickup-game-home';

export type PickupGamesHomeStatus = 'loading' | 'success' | 'error';

export interface PickupGamesHomeState {
  data: PickupGamesHomeResponse | null;
  errorMessage: string | null;
  status: PickupGamesHomeStatus;
}

export interface PickupGamesHomeController extends PickupGamesHomeState {
  refresh: () => Promise<void>;
}

export function usePickupGamesHome(): PickupGamesHomeController {
  const [state, setState] = useState<PickupGamesHomeState>({
    data: null,
    errorMessage: null,
    status: 'loading',
  });

  const refresh = useCallback(async () => {
    setState((currentState) => {
      if (currentState.data) {
        return { ...currentState, errorMessage: null };
      }

      return { data: null, errorMessage: null, status: 'loading' };
    });

    try {
      const data = await getPickupGamesHome();
      setState({ data, errorMessage: null, status: 'success' });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Could not load pickup games.';

      setState((currentState) => {
        if (currentState.data) {
          return { ...currentState, errorMessage };
        }

        return { data: null, errorMessage, status: 'error' };
      });
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  return { ...state, refresh };
}
