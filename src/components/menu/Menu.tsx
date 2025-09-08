import { Menu as _MduiMenu } from "mdui/components/menu.js";
import React from "react";
import { createComponent, type EventName } from "@lit/react";

export { Menu as MenuType } from "mdui/components/menu.js";

export interface MenuCustomEvent extends CustomEvent<void> {
  target: _MduiMenu & EventTarget;
}

export const Menu = createComponent({
  tagName: "mdui-menu",
  react: React,
  elementClass: _MduiMenu,
  events: {
    onChange: "change" as EventName<MenuCustomEvent>,
  },
});
