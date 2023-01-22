import * as ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';

import App from './app/app';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <App />
  </MantineProvider>
);
