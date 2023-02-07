import { createStyles } from '@mantine/core';

import type { IDesktopStylesParams } from './Desktop.types';

export const Styles = createStyles(
  (_theme, { background }: IDesktopStylesParams) => ({
    root: {
      background,
      margin: 0,
      width: '100%',
      height: '100%',
      position: 'fixed',
      overflow: 'hidden',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  })
);
