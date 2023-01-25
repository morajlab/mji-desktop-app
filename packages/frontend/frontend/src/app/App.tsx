import { Desktop, Launcher, WindowManager } from '@master/components';
import { Styles } from './App.styles';

import type { AppComponent } from './App.types';

export const App: AppComponent = () => {
  const { classes } = Styles();

  return (
    <>
      <Desktop background="url(http://localhost:8090/picsum/picsum.photos/id/237/900/900)" />
      <Launcher className={classes.launcher} />
      <WindowManager />
    </>
  );
};

export default App;
