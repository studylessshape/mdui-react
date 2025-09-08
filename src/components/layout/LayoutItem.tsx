import { createComponent } from "@lit/react";
import { LayoutItem as _MduiLayoutItem } from "mdui/components/layout-item.js";
import React from "react";
export { LayoutItem as LayoutItemType } from "mdui/components/layout-item.js";

export const LayoutItem = createComponent({
  react: React,
  tagName: "mdui-layout-item",
  elementClass: _MduiLayoutItem,
});
