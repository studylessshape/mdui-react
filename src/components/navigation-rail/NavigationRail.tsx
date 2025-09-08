import { createComponent, type EventName } from "@lit/react";
import { NavigationRail as _MduiNavigationRail } from "mdui/components/navigation-rail.js";
import React from "react";

export { NavigationRail as NavigationRailType } from "mdui/components/navigation-rail.js";

export interface NavigationRailCustomEvent extends CustomEvent<void> {
  target: _MduiNavigationRail & EventTarget;
}

export const NavigationRail = createComponent({
  react: React,
  tagName: "mdui-navigation-rail",
  elementClass: _MduiNavigationRail,
  events: {
    onChange: "change" as EventName<NavigationRailCustomEvent>,
  },
});
