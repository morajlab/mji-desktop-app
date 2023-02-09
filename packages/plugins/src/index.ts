import type { IPluginItem } from '@master/types';

import P1 from './vagrant-info/src';

const Plugin1: IPluginItem = {
  component: P1,
  meta: {
    name: 'info',
    main: './dist/index.js',
    description: 'Get Vagrant information',
  },
  path: '',
  id: '4651231546',
};

export default [Plugin1];
