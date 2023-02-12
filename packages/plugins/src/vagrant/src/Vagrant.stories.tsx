import Vagrant from './Vagrant';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Plugins/Vagrant',
  component: Vagrant,
} as ComponentMeta<typeof Vagrant>;

export const Primary: ComponentStory<typeof Vagrant> = () => <Vagrant />;
