import type { FunctionComponent, HTMLAttributes } from 'react';

export interface IPlugin {
  readonly name: string;
  readonly description: string;

  render(): FunctionComponent;
}

export interface ILauncherProps extends HTMLAttributes<HTMLDivElement> {
  plugins: IPlugin[];
  backdropFilter?: boolean;
  backdropFilterValue?: number;
}

export type LauncherComponent = FunctionComponent<ILauncherProps>;
