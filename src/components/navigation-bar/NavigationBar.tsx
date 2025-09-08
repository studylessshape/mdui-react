import { createComponent, type EventName } from "@lit/react";
import { NavigationBar as _MduiNavigationBar } from "mdui/components/navigation-bar.js";
import React from "react";

export { NavigationBar as NavigationBarType } from "mdui/components/navigation-bar.js";

export interface NavigationBarEvent extends Event {
  target: _MduiNavigationBar & EventTarget;
}

export const NavigationBar = createComponent({
  react: React,
  tagName: "mdui-navigation-bar",
  elementClass: _MduiNavigationBar,
  events: {
    onChange: "change" as EventName<NavigationBarEvent>,
    onShow: "show" as EventName<NavigationBarEvent>,
    onShown: "shown" as EventName<NavigationBarEvent>,
    onHide: "hide" as EventName<NavigationBarEvent>,
    onHidden: "hidden" as EventName<NavigationBarEvent>,
  },
});
