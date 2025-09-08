import { createComponent, type EventName } from "@lit/react";
import { TopAppBarTitle as _MduiTopAppBarTitle } from "mdui/components/top-app-bar-title.js";
import React from "react";

export { TopAppBarTitle as TopAppBarTitleType } from "mdui/components/top-app-bar-title.js";

export interface TopAppBarTitleEvent extends Event {
  target: _MduiTopAppBarTitle & EventTarget;
}

export const TopAppBarTitle = createComponent({
  react: React,
  tagName: "mdui-top-app-bar-title",
  elementClass: _MduiTopAppBarTitle,
  events: {
    onShow: "show" as EventName<TopAppBarTitleEvent>,
    onShown: "shown" as EventName<TopAppBarTitleEvent>,
    onHide: "hide" as EventName<TopAppBarTitleEvent>,
    onHiden: "hiden" as EventName<TopAppBarTitleEvent>,
  },
});
