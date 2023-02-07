import React from 'react';
import store from '../packages/frontend/frontend/src/store';
import { Provider } from '../packages/frontend/frontend/src/components';

export const decorators = [
  (renderStory: Function) => <Provider store={store}>{renderStory()}</Provider>,
];
