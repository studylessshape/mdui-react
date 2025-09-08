import { MenuItem as _MduiMenuItem } from "mdui/components/menu-item.js";
import React from "react";
import { createComponent, type EventName } from "@lit/react";

export { MenuItem as MenuItemType } from "mdui/components/menu-item.js";

export interface MenuItemCustomEvent extends CustomEvent<void> {
  target: _MduiMenuItem & EventTarget;
}

export interface MenuItemFocusEvent extends FocusEvent {
  target: _MduiMenuItem & EventTarget;
}

export const MenuItem = createComponent({
  tagName: "mdui-menu-item",
  react: React,
  elementClass: _MduiMenuItem,
  events: {
    onFocus: "focus" as EventName<MenuItemFocusEvent>,
    onBlur: "blur" as EventName<MenuItemFocusEvent>,
    onSubmenuOpen: "submenu-open" as EventName<MenuItemCustomEvent>,
    onSubmenuOpened: "submenu-opened" as EventName<MenuItemCustomEvent>,
    onSubmenuClose: "submenu-close" as EventName<MenuItemCustomEvent>,
    onSubmenuClosed: "submenu-closed" as EventName<MenuItemCustomEvent>,
  },
});
