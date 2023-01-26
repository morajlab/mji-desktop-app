import { VncScreen } from 'react-vnc';

import type { IPlugin } from '@master/components';

export default class NoVNC implements IPlugin {
  public readonly name: string;
  public readonly description: string;

  constructor() {
    this.name = 'NoVNC';
    this.description = 'noVNC is a VNC client JavaScript library';
  }

  render = () => {
    return (
      <VncScreen
        url="ws://your-vnc-url.com"
        scaleViewport
        background="#000000"
        style={{
          width: '75vw',
          height: '75vh',
        }}
      />
    );
  };
}
