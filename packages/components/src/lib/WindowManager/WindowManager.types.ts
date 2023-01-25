import type { FunctionComponent } from 'react';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IWindowManagerProps {}

export interface IWindowInfo {
  content: string;
}

export type WindowManagerComponent = FunctionComponent<IWindowManagerProps>;
export type PayloadActionType = PayloadAction<IWindowInfo>;

export interface IWindowManagerState {
  value: IWindowInfo[];
}
