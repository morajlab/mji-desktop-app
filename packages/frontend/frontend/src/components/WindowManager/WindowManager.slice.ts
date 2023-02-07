import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from '../../store';

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

export const useWMSelector = () =>
  useSelector(
    ({ windowmanager }: { windowmanager: IWindowManagerState }) =>
      windowmanager.value
  );

export const { openWindow } = windowManagerSlice.actions;
export default windowManagerSlice.reducer;
