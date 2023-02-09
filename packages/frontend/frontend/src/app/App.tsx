import { Desktop, Launcher, WindowManager, Provider } from '../components';
import store from '../store';
import { Styles } from './App.styles';
import plugins from '@master/plugins';

import type { AppComponent } from './App.types';

export const App: AppComponent = () => {
  const { classes } = Styles();

  return (
    <Provider store={store}>
      <Desktop background="url(http://localhost:8090/picsum/picsum.photos/id/237/900/900)" />
      <Launcher className={classes.launcher} plugins={plugins} />
      <WindowManager plugins={plugins} />
    </Provider>
  );
};

export default App;
