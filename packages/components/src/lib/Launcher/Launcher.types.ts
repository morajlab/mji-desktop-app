import type { FunctionComponent, HTMLAttributes } from 'react';

export interface ILauncherProps extends HTMLAttributes<HTMLDivElement> {
  backdropFilter?: boolean;
}

export type LauncherComponent = FunctionComponent<ILauncherProps>;
