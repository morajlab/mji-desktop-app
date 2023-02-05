import { useState, useEffect } from 'react';
import { Desktop, Launcher, WindowManager, Provider } from '@master/components';
import store from '@master/store';
import { Styles } from './App.styles';

import type { IPluginItem } from '@master/types';
import type { AppComponent } from './App.types';

export const App: AppComponent = () => {
  const [plugins, loadPlugins] = useState<IPluginItem[]>([]);
  const { classes } = Styles();

  useEffect(() => {
    // TODO: Check for 404 or other request errors
    fetch('http://localhost:4200/api/v1/plugins')
      .then((response) => response.json())
      .then((response) => {
        loadPlugins(response.plugins as IPluginItem[]);
      });
  }, []);

  return (
    <Provider store={store}>
      <Desktop background="url(http://localhost:8090/picsum/picsum.photos/id/237/900/900)" />
      <Launcher className={classes.launcher} plugins={plugins} />
      <WindowManager />
    </Provider>
  );
};

export default App;
