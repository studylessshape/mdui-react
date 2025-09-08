import { createComponent, type EventName } from "@lit/react";
import { Tabs as _MduiTabs } from "mdui/components/tabs.js";
import React from "react";

export { Tabs as TabsType } from "mdui/components/tabs.js";

export interface TabsCustomEvent extends CustomEvent<void> {
  target: _MduiTabs & EventTarget;
}

export const Tabs = createComponent({
  react: React,
  tagName: "mdui-tabs",
  elementClass: _MduiTabs,
  events: {
    onChange: "change" as EventName<TabsCustomEvent>,
  },
});
