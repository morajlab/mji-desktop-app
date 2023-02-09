import type { FC } from 'react';

export type PluginID = string;

export interface IPluginMeta {
  name: string;
  description: string;
  main: string;
}

export interface IPluginItem {
  component: FC;
  path: string;
  meta: IPluginMeta;
  id: PluginID;
}
