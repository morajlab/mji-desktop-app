import type { FunctionComponent } from 'react';
import type { MantineNumberSize, DefaultProps } from '@mantine/core';

export interface IPlugin {
  render(): FunctionComponent;
}

export interface ILauncherStylesParams {
  backdropFilter?: boolean;
  backdropFilterValue?: MantineNumberSize;
}

export interface ILauncherProps extends ILauncherStylesParams {
  plugins: IPlugin[];
}

export type LauncherComponent<T extends string> = FunctionComponent<
  ILauncherProps & DefaultProps<T, ILauncherStylesParams>
>;
