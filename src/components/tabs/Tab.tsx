import { createComponent, type EventName } from "@lit/react";
import { Tab as _MduiTab } from "mdui/components/tab.js";
import React from "react";

export { Tab as TabType } from "mdui/components/tab.js";

export interface TabFocusEvent extends FocusEvent {
  target: _MduiTab & EventTarget;
}

export const Tab = createComponent({
  react: React,
  tagName: "mdui-tab",
  elementClass: _MduiTab,
  events: {
    onFocus: "focus" as EventName<TabFocusEvent>,
    onBlur: "blur" as EventName<TabFocusEvent>,
  },
});
