import { createElement } from 'react';

import type { IPlugin } from '@master/components';

export default class NoVNC implements IPlugin {
  public readonly name: string;
  public readonly description: string;

  constructor() {
    this.name = 'NoVNC';
    this.description = 'noVNC is a VNC client JavaScript library';
  }

  render = () => {
    return createElement('div', null, 'This is NoVNC plugin');
  };
}
