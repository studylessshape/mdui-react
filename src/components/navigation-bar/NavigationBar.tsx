import { createComponent, type EventName } from "@lit/react";
import { NavigationBar as _MduiNavigationBar } from "mdui/components/navigation-bar.js";
import React from "react";

export { NavigationBar as NavigationBarType } from "mdui/components/navigation-bar.js";

export interface NavigationBarCustomEvent extends CustomEvent<void> {
  target: _MduiNavigationBar & EventTarget;
}

export const NavigationBar = createComponent({
  react: React,
  tagName: "mdui-navigation-bar",
  elementClass: _MduiNavigationBar,
  events: {
    onChange: "change" as EventName<NavigationBarCustomEvent>,
    onShow: "show" as EventName<NavigationBarCustomEvent>,
    onShown: "shown" as EventName<NavigationBarCustomEvent>,
    onHide: "hide" as EventName<NavigationBarCustomEvent>,
    onHidden: "hidden" as EventName<NavigationBarCustomEvent>,
  },
});
