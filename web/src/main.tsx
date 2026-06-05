import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import { App } from './app/App';
import './index.css';
import { applyColorTheme } from './shared/theme/helpers/apply-color-theme';
import { getStoredColorTheme } from './shared/theme/helpers/get-stored-color-theme';
import { ColorThemeProvider } from './shared/theme/provider/ColorThemeProvider';

applyColorTheme(getStoredColorTheme());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ColorThemeProvider>
        <App />
      </ColorThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
