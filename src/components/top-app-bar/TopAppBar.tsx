import { createComponent, type EventName } from "@lit/react";
import { TopAppBar as _MduiTopAppBar } from "mdui/components/top-app-bar.js";
import React from "react";

export { TopAppBar as TopAppBarType } from "mdui/components/top-app-bar.js";

export interface TopAppBarEvent extends Event {
  target: _MduiTopAppBar & EventTarget;
}

export const TopAppBar = createComponent({
  react: React,
  tagName: "mdui-top-app-bar",
  elementClass: _MduiTopAppBar,
  events: {
    onShow: "show" as EventName<TopAppBarEvent>,
    onShown: "shown" as EventName<TopAppBarEvent>,
    onHide: "hide" as EventName<TopAppBarEvent>,
    onHiden: "hiden" as EventName<TopAppBarEvent>,
  },
});
