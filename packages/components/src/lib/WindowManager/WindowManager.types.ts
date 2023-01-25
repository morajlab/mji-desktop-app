import type { WinBoxPropType } from 'react-winbox';
import type { FunctionComponent } from 'react';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IWindowManagerProps {}

export interface IWindowInfo extends WinBoxPropType {}

export type WindowManagerComponent = FunctionComponent<IWindowManagerProps>;
export type PayloadActionType = PayloadAction<IWindowInfo>;

export interface IWindowManagerState {
  value: IWindowInfo[];
}
