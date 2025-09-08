import { createComponent, type EventName } from "@lit/react";
import { NavigationDrawer as _MduiNavigationDrawer } from "mdui/components/navigation-drawer.js";
import React from "react";

export { NavigationDrawer as NavigationDrawerType } from "mdui/components/navigation-drawer.js";

export interface NavigationDrawerCustomEvent extends CustomEvent<void> {
  target: _MduiNavigationDrawer & EventTarget;
}

export const NavigationDrawer = createComponent({
  react: React,
  tagName: "mdui-navigation-drawer",
  elementClass: _MduiNavigationDrawer,
  events: {
    onOpen: "open" as EventName<NavigationDrawerCustomEvent>,
    onOpened: "opened" as EventName<NavigationDrawerCustomEvent>,
    onClose: "close" as EventName<NavigationDrawerCustomEvent>,
    onClosed: "closed" as EventName<NavigationDrawerCustomEvent>,
    onOverlayClick: "overlay-click" as EventName<NavigationDrawerCustomEvent>,
  },
});
