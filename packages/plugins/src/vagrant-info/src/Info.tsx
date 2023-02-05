import { Styles } from './Info.styles';

import type { VagrantInfoComponent } from './Info.types';

const getVagrantInfo = async () => {
  const response = await (
    await fetch('http://localhost:4200/api/v1/vagrant/global-status', {
      method: 'POST',
    })
  ).json();

  console.log(response);
};

export const VagrantInfo: VagrantInfoComponent = () => {
  const { classes } = Styles();

  getVagrantInfo();

  return <div className={classes.root}>Vagrant info plugin</div>;
};

export default VagrantInfo;
