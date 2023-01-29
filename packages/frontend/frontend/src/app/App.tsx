import { Desktop, Launcher, WindowManager, Provider } from '@master/components';
import store from '@master/store';
import { Styles } from './App.styles';

import type { AppComponent } from './App.types';

// TODO: Fetch plugins in server side
import NoVNC from '@master/plugins/novnc';
import VagrantInfo from '@master/plugins/vagrant/Info';
function loadPlugins() {
  return [new NoVNC(), new VagrantInfo()];
}

export const App: AppComponent = () => {
  const { classes } = Styles();

  return (
    <Provider store={store}>
      <Desktop background="url(http://localhost:8090/picsum/picsum.photos/id/237/900/900)" />
      <Launcher className={classes.launcher} plugins={loadPlugins()} />
      <WindowManager />
    </Provider>
  );
};

export default App;
