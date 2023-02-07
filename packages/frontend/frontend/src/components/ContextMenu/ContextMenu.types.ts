import type { MenuTargetProps, MenuProps } from '@mantine/core';

export type ContextMenuTargetProps = MenuTargetProps;
export type ContextMenuProps = Omit<
  MenuProps,
  'trigger' | 'openDelay' | 'closeDelay'
>;
