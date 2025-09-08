import { createComponent, type EventName } from "@lit/react";
import { NavigationBarItem as _MduiNavigationBarItem } from "mdui/components/navigation-bar-item.js";
import React from "react";

export { NavigationBarItem as NavigationBarItemType } from "mdui/components/navigation-bar-item.js";

export interface NavigationBarItemEvent extends Event {
  target: _MduiNavigationBarItem & EventTarget;
}

export const NavigationBarItem = createComponent({
  react: React,
  tagName: "mdui-navigation-bar-item",
  elementClass: _MduiNavigationBarItem,
  events: {
    onFocus: "focus" as EventName<NavigationBarItemEvent>,
    onBlur: "blur" as EventName<NavigationBarItemEvent>,
  },
});
