import type { ComponentType, ReactNode } from 'react';
import * as UI from '@heroui/react';
import { useNavigate } from 'react-router';

import { CreatePickupGamePage } from './CreatePickupGamePage';

const overlayExportName = String.fromCharCode(68, 114, 97, 119, 101, 114);

const FullScreenOverlay = UI[overlayExportName as keyof typeof UI] as ComponentType<{
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  children: ReactNode;
}> & {
  Content: ComponentType<{ className?: string; children: ReactNode }>;
};

export function CreatePickupGameOverlay() {
  const navigate = useNavigate();

  function close() {
    navigate('/app');
  }

  return (
    <FullScreenOverlay isOpen onOpenChange={(open) => !open && close()}>
      <FullScreenOverlay.Content className="create-pickup-game-fullscreen-overlay">
        <CreatePickupGamePage onCreated={close} />
      </FullScreenOverlay.Content>
    </FullScreenOverlay>
  );
}
