import { Styles } from './Desktop.styles';

import type { DesktopComponent } from './Desktop.types';

export const Desktop: DesktopComponent = (props) => {
  const { classes } = Styles(props);

  return <div className={classes.root} />;
};

export default Desktop;
