import type { FunctionComponent } from 'react';
import type { IPluginItem } from '@master/types';
import type { MantineNumberSize, DefaultProps } from '@mantine/core';

export interface ILauncherStylesParams {
  backdropFilter?: boolean;
  backdropFilterValue?: MantineNumberSize;
}

export interface ILauncherProps extends ILauncherStylesParams {
  plugins: IPluginItem[];
}

export type LauncherComponent<T extends string> = FunctionComponent<
  ILauncherProps & DefaultProps<T, ILauncherStylesParams>
>;
