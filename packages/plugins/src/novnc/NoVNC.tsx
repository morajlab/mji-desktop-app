import { VncScreen } from 'react-vnc';
import { Styles } from './NoVNC.styles';

import type { NoVNCComponent } from './NoVNC.types';
import type { IPlugin } from '@master/components';

const NoVNCFC: NoVNCComponent = () => {
  const { classes } = Styles();

  //<VncScreen url="ws://localhost:6081" />
  return (
    <div className={classes.root}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, recusandae
      minima veritatis delectus consequuntur, eligendi nesciunt sint facere
      doloremque unde consectetur blanditiis nisi hic in quaerat soluta suscipit
      minus nihil.
    </div>
  );
};

export class NoVNC implements IPlugin {
  public readonly name: string;
  public readonly description: string;

  constructor() {
    this.name = 'NoVNC';
    this.description = 'noVNC is a VNC client JavaScript library';
  }

  render() {
    return NoVNCFC;
  }
}

export default NoVNC;
