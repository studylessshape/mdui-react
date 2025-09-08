import { createComponent, type EventName } from "@lit/react";
import { TabPanel as _MduiTabPanel } from "mdui/components/tab-panel.js";
import React from "react";

export { TabPanel as TabPanelType } from "mdui/components/tab-panel.js";

export const TabPanel = createComponent({
  react: React,
  tagName: "mdui-tab-panel",
  elementClass: _MduiTabPanel,
});
