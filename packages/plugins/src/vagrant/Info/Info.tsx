import { Styles } from './Info.styles';

import type { VagrantInfoComponent } from './Info.types';
import type { IPlugin } from '@master/components';

const getVagrantInfo = async () => {
  const response = await (
    await fetch('http://localhost:4200/api/v1/vagrant/global-status', {
      method: 'POST',
    })
  ).json();

  console.log(response);
};

const VagrantInfoFC: VagrantInfoComponent = () => {
  const { classes } = Styles();

  getVagrantInfo();

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
