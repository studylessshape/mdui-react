import { BottomAppBar as _MduiBottomAppBar } from "mdui/components/bottom-app-bar.js";
import React from "react";
import { createComponent, type EventName } from "@lit/react";

export { BottomAppBar as BottomAppBarType } from "mdui/components/bottom-app-bar.js";

export interface BottomAppBarCustomEvent extends CustomEvent<void> {
  target: _MduiBottomAppBar & EventTarget;
}

export const BottomAppBar = createComponent({
  tagName: "mdui-bottom-app-bar",
  react: React,
  elementClass: _MduiBottomAppBar,
  events: {
    onShow: "show" as EventName<BottomAppBarCustomEvent>,
    onShown: "shown" as EventName<BottomAppBarCustomEvent>,
    onHide: "hide" as EventName<BottomAppBarCustomEvent>,
    onHiden: "hiden" as EventName<BottomAppBarCustomEvent>,
  },
});
