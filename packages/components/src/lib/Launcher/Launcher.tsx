import { Group, Button } from '@mantine/core';
import { Styles } from './Launcher.styles';

import type { LauncherComponent } from './Launcher.types';

// TODO: Add default props to theme object
export const Launcher: LauncherComponent = ({ className, ...props }) => {
  const { classes, cx } = Styles(props);

  return (
    <div {...props} className={cx(classes.root, className)}>
      <Group position="center">
        <Button variant="outline">1</Button>
        <Button variant="outline">6</Button>
        <Button variant="outline">3</Button>
      </Group>
    </div>
  );
};

export default Launcher;
