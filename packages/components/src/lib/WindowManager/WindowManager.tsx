import WinBox from 'react-winbox';

import type { WindowManagerComponent } from './WindowManager.types';

import 'winbox/dist/css/winbox.min.css';
import 'winbox/dist/css/themes/modern.min.css';
import 'winbox/dist/css/themes/white.min.css';

export const WindowManager: WindowManagerComponent = () => {
  return (
    <WinBox width={500} height={300} x="center" y={30}>
      <div>
        <h1>Hello, WinBox!</h1>
      </div>
    </WinBox>
  );
};

export default WindowManager;
