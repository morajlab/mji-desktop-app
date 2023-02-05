import { getContextItemIndex } from '@mantine/utils';
import { useUncontrolled } from '@mantine/hooks';
import { useComponentDefaultProps } from '@mantine/styles';
import { Popover } from '@mantine/core';
import { MenuDivider } from '@mantine/core/lib/Menu/MenuDivider/MenuDivider';
import { MenuDropdown } from '@mantine/core/lib/Menu/MenuDropdown/MenuDropdown';
import { MenuItem } from '@mantine/core/lib/Menu/MenuItem/MenuItem';
import { MenuLabel } from '@mantine/core/lib/Menu/MenuLabel/MenuLabel';
import { ContextMenuTarget } from './ContextMenuTarget';
import { MenuContextProvider } from '@mantine/core/lib/Menu/Menu.context';
import useStyles from '@mantine/core/lib/Menu/Menu.styles';

import type { ContextMenuProps } from './ContextMenu.types';

const defaultProps: Partial<ContextMenuProps> = {
  closeOnItemClick: true,
  loop: true,
};

export function ContextMenu(props: ContextMenuProps) {
  const {
    children,
    onOpen,
    onClose,
    opened,
    defaultOpened,
    onChange,
    closeOnItemClick,
    loop,
    closeOnEscape,
    classNames,
    styles,
    unstyled,
    radius,
    ...others
  } = useComponentDefaultProps(
    'ContextMenu',
    defaultProps,
    props
  ) as Required<ContextMenuProps>;
  const { classes, cx } = useStyles();

  const [_opened, setOpened] = useUncontrolled({
    value: opened,
    defaultValue: defaultOpened,
    finalValue: false,
    onChange,
  });

  const close = () => {
    setOpened(false);
    _opened && onClose?.();
  };

  const open = () => {
    setOpened(true);
    !_opened && onOpen?.();
  };

  const toggleDropdown = () => (_opened ? close() : open());

  const getItemIndex = (node: HTMLButtonElement) =>
    getContextItemIndex('[data-menu-item]', '[data-menu-dropdown]', node);

  return (
    <MenuContextProvider
      value={
        {
          opened: _opened,
          toggleDropdown,
          getItemIndex,
          closeOnItemClick,
          closeDropdown: close,
          openDropdown: open,
          closeDropdownImmediately: close,
          loop,
          radius,
          classNames,
          styles,
          unstyled,
        } as any
      } // TODO: Fix types
    >
      <Popover
        {...others}
        radius={radius}
        opened={_opened}
        onChange={setOpened}
        defaultOpened={defaultOpened}
        trapFocus={true} //trigger === 'click'
        closeOnEscape={closeOnEscape && true} //closeOnEscape && trigger === 'click'
        __staticSelector="Menu"
        classNames={{
          ...classNames,
          dropdown: cx(classes.dropdown, classNames?.dropdown),
        }}
        styles={styles as any} // TODO: Fix types
        unstyled={unstyled}
        onClose={close}
        onOpen={open}
      >
        {children}
      </Popover>
    </MenuContextProvider>
  );
}

ContextMenu.Item = MenuItem;
ContextMenu.Label = MenuLabel;
ContextMenu.Dropdown = MenuDropdown;
ContextMenu.Target = ContextMenuTarget;
ContextMenu.Divider = MenuDivider;
