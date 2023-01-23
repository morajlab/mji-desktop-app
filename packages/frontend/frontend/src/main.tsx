import * as ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';

import './styles.css';

import App from './app/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <App />
  </MantineProvider>
);
