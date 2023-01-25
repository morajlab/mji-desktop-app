import { createSlice } from '@reduxjs/toolkit';
import { useSelector as _useSelector } from '@master/store';

import type {
  IWindowManagerState,
  PayloadActionType,
} from './WindowManager.types';

const initialState: IWindowManagerState = {
  value: [],
};

export const windowManagerSlice = createSlice({
  name: 'windowmanager',
  initialState,
  reducers: {
    openWindow: (state, action: PayloadActionType) => {
      state.value.push(action.payload);
    },
  },
});

export const useSelector = () =>
  _useSelector(({ windowmanager }) => windowmanager.value);

export const { openWindow } = windowManagerSlice.actions;
