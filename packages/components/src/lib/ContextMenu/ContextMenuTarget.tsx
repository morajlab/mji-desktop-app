import { cloneElement, forwardRef } from 'react';
import { Popover } from '@mantine/core';
import { isElement, createEventHandler } from '@mantine/utils';
import { useComponentDefaultProps } from '@mantine/styles';
import { useMenuContext } from '@mantine/core/lib/Menu/Menu.context';
import { MENU_ERRORS } from '@mantine/core/lib/Menu/Menu.errors';

import type { ContextMenuTargetProps } from './ContextMenu.types';

const defaultProps: Partial<ContextMenuTargetProps> = {
  refProp: 'ref',
};

export const ContextMenuTarget = forwardRef<
  HTMLElement,
  ContextMenuTargetProps
>((props, ref) => {
  const { children, refProp, ...others } = useComponentDefaultProps(
    'ContextMenuTarget',
    defaultProps,
    props
  );

  if (!isElement(children)) {
    throw new Error(MENU_ERRORS.children);
  }

  const ctx = useMenuContext();

  const onContextMenu = createEventHandler(children.props.onContextMenu, () =>
    ctx.toggleDropdown()
  );

  return (
    <Popover.Target refProp={refProp} popupType="menu" ref={ref} {...others}>
      {cloneElement(children, {
        onContextMenu,
        'data-expanded': ctx.opened ? true : undefined,
      })}
    </Popover.Target>
  );
});
