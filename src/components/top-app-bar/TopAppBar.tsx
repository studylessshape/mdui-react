import { createComponent, type EventName } from "@lit/react";
import { TopAppBar as _MduiTopAppBar } from "mdui/components/top-app-bar.js";
import React from "react";

export { TopAppBar as TopAppBarType } from "mdui/components/top-app-bar.js";

export interface TopAppBarCustomEvent extends CustomEvent<void> {
  target: _MduiTopAppBar & EventTarget;
}

export const TopAppBar = createComponent({
  react: React,
  tagName: "mdui-top-app-bar",
  elementClass: _MduiTopAppBar,
  events: {
    onShow: "show" as EventName<TopAppBarCustomEvent>,
    onShown: "shown" as EventName<TopAppBarCustomEvent>,
    onHide: "hide" as EventName<TopAppBarCustomEvent>,
    onHiden: "hiden" as EventName<TopAppBarCustomEvent>,
  },
});
