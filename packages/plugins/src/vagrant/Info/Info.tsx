import { Styles } from './Info.styles';

import type { VagrantInfoComponent } from './Info.types';
import type { IPlugin } from '@master/components';

const VagrantInfoFC: VagrantInfoComponent = () => {
  const { classes } = Styles();

  return <div className={classes.root}>Vagrant info plugin</div>;
};

export class VagrantInfo implements IPlugin {
  public readonly name: string;
  public readonly description: string;

  constructor() {
    this.name = 'Vagrant Info';
    this.description = 'Get Vagrant information';
  }

  render() {
    return VagrantInfoFC;
  }
}

export default VagrantInfo;
