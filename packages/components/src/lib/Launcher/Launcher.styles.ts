import { createStyles } from '@mantine/core';

import type { ILauncherStylesParams } from './Launcher.types';

export const Styles = createStyles(
  (_theme, { backdropFilter, backdropFilterValue }: ILauncherStylesParams) => ({
    root: {
      backdropFilter: backdropFilter
        ? `blur(${backdropFilterValue}px)`
        : 'unset',
    },
  })
);
