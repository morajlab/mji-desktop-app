import WinBox, { WinBoxPropType } from 'react-winbox';
import { useDispatch } from '../../store';
import { useWMSelector, closeWindow } from './WindowManager.slice';

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

export const WindowManager: WindowManagerComponent = ({ plugins }) => {
  const dispath = useDispatch();
  const pluginsState = useWMSelector();

  return (
    <>
      {plugins
        .filter(({ id }) => id in pluginsState)
        .map((plugin) => (
          <WinBox
            key={plugin.id}
            onClose={() => {
              dispath(closeWindow(plugin.id));
            }}
            {...default_info}
          >
            <plugin.component />
          </WinBox>
        ))}
    </>
  );
};

export default WindowManager;
