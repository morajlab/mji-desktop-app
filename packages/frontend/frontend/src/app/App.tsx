import { Desktop, Launcher, WindowManager, Provider } from '@master/components';
import { store } from '@master/store';
import { Styles } from './App.styles';

import type { AppComponent } from './App.types';

export const App: AppComponent = () => {
  const { classes } = Styles();

  return (
    <Provider store={store}>
      <Desktop background="url(http://localhost:8090/picsum/picsum.photos/id/237/900/900)" />
      <Launcher className={classes.launcher} />
      <WindowManager />
    </Provider>
  );
};

export default App;
