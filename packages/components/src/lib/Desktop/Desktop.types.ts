import type { FunctionComponent } from 'react';
import type { DefaultProps } from '@mantine/core';

export interface IDesktopStylesParams {
  background?: string;
}

export interface IDesktopProps extends IDesktopStylesParams {}

export type DesktopComponent<T extends string> = FunctionComponent<
  IDesktopProps & DefaultProps<T, IDesktopStylesParams>
>;
