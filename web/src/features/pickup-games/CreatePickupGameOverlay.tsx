import { useNavigate } from 'react-router';

import { CreatePickupGamePage } from './CreatePickupGamePage';

export function CreatePickupGameOverlay() {
  const navigate = useNavigate();

  return <CreatePickupGamePage onCreated={() => navigate('/app')} />;
}
