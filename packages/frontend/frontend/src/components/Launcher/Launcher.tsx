import {
  Menu,
  Group,
  Button,
  Selectors,
  useComponentDefaultProps,
} from '@mantine/core';
import { useDispatch } from '../../store';
import { openWindow } from '../WindowManager'; // NOTE: This line should be after store
import { Styles } from './Launcher.styles';

import type { LauncherComponent, ILauncherProps } from './Launcher.types';

const defaultProps: Partial<ILauncherProps> = {
  backdropFilter: true,
  backdropFilterValue: 20,
};

export const Launcher: LauncherComponent<Selectors<typeof Styles>> = (
  props
) => {
  const name: string = 'Launcher';
  const {
    classNames,
    styles,
    unstyled,
    className,
    backdropFilter,
    backdropFilterValue,
    plugins,
    ...others
  } = useComponentDefaultProps(name, defaultProps, props);
  const { classes, cx } = Styles(
    { backdropFilter, backdropFilterValue },
    { name, classNames, styles, unstyled }
  );

  const dispath = useDispatch();

  return (
    <div className={cx(classes.root, className)} {...others}>
      <Group position="center">
        {plugins.map((plugin, key) => (
          <Menu shadow="md" trigger="hover" width={200} key={key}>
            <Menu.Target>
              <Button onClick={() => dispath(openWindow(plugin.id))}>
                {plugin.meta.name}
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Application</Menu.Label>
              <Menu.Item>Settings</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        ))}
      </Group>
    </div>
  );
};

export default Launcher;
