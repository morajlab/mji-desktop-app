import {
  TypedUseSelectorHook,
  useDispatch as _useDispatch,
  useSelector as _useSelector,
} from 'react-redux';
import windowManagerReducer from '@master/components/WindowManager/WindowManager.slice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    windowmanager: windowManagerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type StoreType = typeof store;

export const useDispatch: () => AppDispatch = _useDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;

export default store;
