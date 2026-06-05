import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app/App';
import './index.css';
import { ColorThemeProvider } from './shared/theme/provider/ColorThemeProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ColorThemeProvider>
      <App />
    </ColorThemeProvider>
  </StrictMode>,
);
