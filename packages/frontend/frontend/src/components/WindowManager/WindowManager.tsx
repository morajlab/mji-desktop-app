import { lazy } from 'react';
import WinBox, { WinBoxPropType } from 'react-winbox';
import { useWMSelector } from './WindowManager.slice';

import type { WindowManagerComponent } from './WindowManager.types';

import 'winbox/dist/css/winbox.min.css';
import 'winbox/dist/css/themes/modern.min.css';
import 'winbox/dist/css/themes/white.min.css';

const default_info: Partial<WinBoxPropType> = {
  width: 500,
  height: 300,
  x: 'center',
  y: 'center',
};

export const WindowManager: WindowManagerComponent = () => {
  const plugins = useWMSelector();

  return (
    <>
      {plugins.map((plugin, key) => {
        const PluginComponent = lazy(() =>
          import(plugin.path.replace(/\\/g, '/')).then((module) => ({
            default: module.default as any,
          }))
        );

        return (
          <WinBox key={key} {...default_info}>
            <PluginComponent />
          </WinBox>
        );
      })}
    </>
  );
};

export default WindowManager;
