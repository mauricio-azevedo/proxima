import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import { App } from './app/App';
import './index.css';
import { applyLocale } from './shared/i18n/helpers/apply-locale';
import { readStoredLocale } from './shared/i18n/helpers/read-stored-locale';
import { LocaleProvider } from './shared/i18n/provider/LocaleProvider';
import { applyColorTheme } from './shared/theme/helpers/apply-color-theme';
import { getStoredColorTheme } from './shared/theme/helpers/get-stored-color-theme';
import { ColorThemeProvider } from './shared/theme/provider/ColorThemeProvider';

applyColorTheme(getStoredColorTheme());
applyLocale(readStoredLocale());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LocaleProvider>
        <ColorThemeProvider>
          <App />
        </ColorThemeProvider>
      </LocaleProvider>
    </BrowserRouter>
  </StrictMode>,
);
