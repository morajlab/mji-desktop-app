import { VagrantInfo } from './Info';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'VagrantInfo',
  component: VagrantInfo,
} as ComponentMeta<typeof VagrantInfo>;

export const Primary: ComponentStory<typeof VagrantInfo> = () => (
  <VagrantInfo />
);
