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

export const Launcher: LauncherComponent = ({
  className,
  plugins,
  ...props
}) => {
  props = { ...defaultProps, ...props };
  const { classes, cx } = Styles(props);
  const dispatch = useDispatch();

  return (
    <div {...props} className={cx(classes.root, className)}>
      <Group position="center">
        {plugins.map((plugin, key) => (
          <Button
            variant="outline"
            onClick={() => dispatch(openWindow({ children: plugin.render() }))}
            key={key}
          >
            {plugin.name}
          </Button>
        ))}
      </Group>
    </div>
  );
};

export default Launcher;
