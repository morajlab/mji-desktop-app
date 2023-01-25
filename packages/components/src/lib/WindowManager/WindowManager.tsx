import WinBox from 'react-winbox';
import { useSelector } from '@master/store';
import { useSelectorCB } from './WindowManager.slice';

import type {
  WindowManagerComponent,
  IWindowInfo,
} from './WindowManager.types';

import 'winbox/dist/css/winbox.min.css';
import 'winbox/dist/css/themes/modern.min.css';
import 'winbox/dist/css/themes/white.min.css';

const default_info: Partial<IWindowInfo> = {
  width: 500,
  height: 300,
  x: 'center',
  y: 'center',
};

export const WindowManager: WindowManagerComponent = () => {
  const windows = useSelector(useSelectorCB);

  return (
    <>
      {windows.map((info, key) => {
        info = { ...default_info, ...info, ...{ id: `${key}`, key } };

        return <WinBox {...info} />;
      })}
    </>
  );
};

export default WindowManager;
