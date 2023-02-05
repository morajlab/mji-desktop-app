export interface IPluginMeta {
  name: string;
  description: string;
  main: string;
}

export interface IPluginItem {
  path: string;
  meta: IPluginMeta;
}
