import { Desktop } from './Desktop';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Desktop',
  component: Desktop,
} as ComponentMeta<typeof Desktop>;

export const Primary: ComponentStory<typeof Desktop> = () => (
  <Desktop background="url(http://localhost:8090/picsum/picsum.photos/id/237/900/900)" />
);
