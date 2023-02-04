import { VagrantInfo } from './Info';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

const VagrantInfoFC = new VagrantInfo().render();

export default {
  title: 'VagrantInfo',
  component: VagrantInfoFC,
} as ComponentMeta<typeof VagrantInfoFC>;

export const Primary: ComponentStory<typeof VagrantInfoFC> = () => (
  <VagrantInfoFC />
);
