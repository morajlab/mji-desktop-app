import { Desktop, Launcher } from '@master/components';
import { Styles } from './App.styles';

import type { AppComponent } from './App.types';

export const App: AppComponent = () => {
  const { classes } = Styles();

  return (
    <>
      <Desktop background="url(https://picsum.photos/900/900)" />
      <Launcher className={classes.launcher} />
    </>
  );
};

export default App;
