import type { FunctionComponent, ReactNode } from 'react';
import type { StoreType } from '@master/store';

export interface IProviderProps {
  store: StoreType;
  children: ReactNode;
}

export type ProviderComponent = FunctionComponent<IProviderProps>;
