import { Group, Button } from '@mantine/core';
import { useDispatch } from '@master/store';
import { openWindow } from '../WindowManager';
import { Styles } from './Launcher.styles';

import type { LauncherComponent, ILauncherProps } from './Launcher.types';

// TODO: Add default props to theme object
const defaultProps: Partial<ILauncherProps> = {
  backdropFilter: true,
  backdropFilterValue: 20,
};

export const Launcher: LauncherComponent = ({ className, ...props }) => {
  props = { ...defaultProps, ...props };
  const { classes, cx } = Styles(props);
  const dispatch = useDispatch();

  return (
    <div {...props} className={cx(classes.root, className)}>
      <Group position="center">
        <Button
          variant="outline"
          onClick={() => dispatch(openWindow({ content: 'This is window 1' }))}
        >
          1
        </Button>
        <Button
          variant="outline"
          onClick={() => dispatch(openWindow({ content: 'This is window 2' }))}
        >
          2
        </Button>
        <Button
          variant="outline"
          onClick={() => dispatch(openWindow({ content: 'This is window 3' }))}
        >
          3
        </Button>
      </Group>
    </div>
  );
};

export default Launcher;
