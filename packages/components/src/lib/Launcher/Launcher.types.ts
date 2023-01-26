import type { ReactElement, FunctionComponent, HTMLAttributes } from 'react';

export interface IPlugin {
  readonly name: string;
  readonly description: string;

  render(): ReactElement;
}

export interface ILauncherProps extends HTMLAttributes<HTMLDivElement> {
  plugins: IPlugin[];
  backdropFilter?: boolean;
  backdropFilterValue?: number;
}

export type LauncherComponent = FunctionComponent<ILauncherProps>;
