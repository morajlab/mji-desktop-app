import { createStyles } from '@mantine/core';

import type { ILauncherProps } from './Launcher.types';

export const Styles = createStyles(
  (_theme, props: Partial<ILauncherProps>) => ({
    root: {
      backdropFilter: props.backdropFilter
        ? `blur(${props.backdropFilterValue}px)`
        : 'unset',
    },
  })
);
