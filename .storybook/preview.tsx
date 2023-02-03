import React from 'react';
import store from '../packages/store/src';
import { Provider } from '../packages/components/src';

export const decorators = [
  (renderStory: Function) => <Provider store={store}>{renderStory()}</Provider>,
];
