import type { FunctionComponent } from 'react';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IPluginItem } from '@master/types';

export interface IWindowManagerProps {}

export interface IWindowManagerState {
  value: IPluginItem[];
}

export type WindowManagerComponent = FunctionComponent<IWindowManagerProps>;
export type PayloadActionType = PayloadAction<IPluginItem>;
