import { Styles } from './Desktop.styles';

import type { DesktopComponent } from './Desktop.types';

export const Desktop: DesktopComponent = (props) => {
  const { classes } = Styles(props);

  return (
    <div className={classes.root}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptate
      laboriosam iure tempora minima quis, voluptatibus magnam expedita impedit?
      Ex ullam eius, laudantium numquam cupiditate cum reiciendis labore
      debitis! Veniam.
    </div>
  );
};

export default Desktop;
