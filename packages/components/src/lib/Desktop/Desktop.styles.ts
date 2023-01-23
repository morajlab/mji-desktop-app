import { createStyles } from '@mantine/core';

import type { IDesktopProps } from './Desktop.types';

export const Styles = createStyles((_theme, props: IDesktopProps) => ({
  root: {
    background: props.background ?? '#ffffff', // TODO: Use better structure for default styles
    margin: 0,
    width: '100%',
    height: '100%',
    position: 'fixed',
    overflow: 'hidden',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
