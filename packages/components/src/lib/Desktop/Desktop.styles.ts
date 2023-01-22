import { createStyles } from '@mantine/core';

import type { IDesktopProps } from './Desktop.types';

export const Styles = createStyles((_theme, props: IDesktopProps) => ({
  root: {
    background: props.background ?? 'black',
  },
}));
