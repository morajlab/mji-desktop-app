import { MantineProvider } from '@mantine/core';
import { Provider as ReduxProvider } from 'react-redux';

import type { ProviderComponent } from './Provider.types';

export const Provider: ProviderComponent = ({ store, children }) => {
  return (
    <ReduxProvider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        {children}
      </MantineProvider>
    </ReduxProvider>
  );
};

export default Provider;
