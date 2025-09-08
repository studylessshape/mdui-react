import { createComponent, type EventName } from "@lit/react";
import { NavigationRailItem as _MduiNavigationRailItem } from "mdui/components/navigation-rail-item.js";
import React from "react";

export { NavigationRailItem as NavigationRailItemType } from "mdui/components/navigation-rail-item.js";

export interface NavigationRailItemFocusEvent extends FocusEvent {
  target: _MduiNavigationRailItem & EventTarget;
}

export const NavigationRailItem = createComponent({
  react: React,
  tagName: "mdui-navigation-rail-item",
  elementClass: _MduiNavigationRailItem,
  events: {
    onFocus: "focus" as EventName<NavigationRailItemFocusEvent>,
    onBlur: "blur" as EventName<NavigationRailItemFocusEvent>,
  },
});
