import { Styles } from './Vagrant.styles';

import type { VagrantComponent } from './Vagrant.types';

const getVagrantInfo = async () => {
  const response = await (
    await fetch('http://localhost:4200/api/v1/vagrant/global-status', {
      method: 'POST',
    })
  ).json();

  console.log(response);
};

export const Vagrant: VagrantComponent = () => {
  const { classes } = Styles();

  getVagrantInfo();

  return <div className={classes.root}>Vagrant info plugin</div>;
};

export default Vagrant;
