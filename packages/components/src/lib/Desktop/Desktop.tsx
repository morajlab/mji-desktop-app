import { Selectors, useComponentDefaultProps } from '@mantine/core';
import { Styles } from './Desktop.styles';

import type { DesktopComponent, IDesktopProps } from './Desktop.types';

const defaultProps: Partial<IDesktopProps> = {
  background: '#ffffff',
};

export const Desktop: DesktopComponent<Selectors<typeof Styles>> = (props) => {
  const name: string = 'Desktop';
  const { classNames, styles, unstyled, className, background, ...others } =
    useComponentDefaultProps(name, defaultProps, props);
  const { classes, cx } = Styles(
    { background },
    { name, classNames, styles, unstyled }
  );

  return <div className={cx(classes.root, className)} {...others} />;
};

export default Desktop;
