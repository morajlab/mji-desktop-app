import WinBox from 'react-winbox';
import { useSelector } from '@master/store';
import { useSelectorCB } from './WindowManager.slice';

import type { WindowManagerComponent } from './WindowManager.types';

import 'winbox/dist/css/winbox.min.css';
import 'winbox/dist/css/themes/modern.min.css';
import 'winbox/dist/css/themes/white.min.css';

export const WindowManager: WindowManagerComponent = () => {
  const windows = useSelector(useSelectorCB);

  return (
    <>
      {windows.map(({ content }, key) => (
        <WinBox
          width={500}
          height={300}
          x="center"
          y={30}
          id={`${key}`}
          key={key}
        >
          <div>
            <h1>{content}</h1>
          </div>
        </WinBox>
      ))}
    </>
  );
};

export default WindowManager;
