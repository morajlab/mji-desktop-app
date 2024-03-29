import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from '../../store';

import type {
  IWindowManagerState,
  PayloadActionType,
} from './WindowManager.types';

const initialState: IWindowManagerState = {
  value: {},
};

export const windowManagerSlice = createSlice({
  name: 'windowmanager',
  initialState,
  reducers: {
    openWindow: (state, action: PayloadActionType) => {
      if (!(action.payload in state.value)) {
        state.value[action.payload] = true;
      }
    },
    closeWindow: (state, action: PayloadActionType) => {
      if (action.payload in state.value) {
        delete state.value[action.payload];
      }
    },
  },
});

export const useWMSelector = () =>
  useSelector(
    ({ windowmanager }: { windowmanager: IWindowManagerState }) =>
      windowmanager.value
  );

export const { openWindow, closeWindow } = windowManagerSlice.actions;
export default windowManagerSlice.reducer;
