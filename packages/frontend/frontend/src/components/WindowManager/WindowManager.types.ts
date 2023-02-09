import type { FunctionComponent } from 'react';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IPluginItem, PluginID } from '@master/types';

export interface IWindowManagerProps {
  plugins: IPluginItem[];
}

export interface IWindowManagerState {
  value: { [key: PluginID]: boolean };
}

export type WindowManagerComponent = FunctionComponent<IWindowManagerProps>;
export type PayloadActionType = PayloadAction<PluginID>;
