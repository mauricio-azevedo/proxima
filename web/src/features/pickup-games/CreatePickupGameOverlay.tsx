import { Drawer } from '@heroui/react';
import { useNavigate } from 'react-router';

import { CreatePickupGamePage } from './CreatePickupGamePage';

export function CreatePickupGameOverlay() {
  const navigate = useNavigate();

  function close() {
    navigate('/app');
  }

  return (
    <Drawer isOpen onOpenChange={(open) => !open && close()}>
      <Drawer.Content className="create-pickup-game-fullscreen-overlay">
        <CreatePickupGamePage onCreated={close} />
      </Drawer.Content>
    </Drawer>
  );
}
