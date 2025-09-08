import { CollapseItem as _MduiCollapseItem } from "mdui/components/collapse-item.js";
import React from "react";
import { createComponent, type EventName } from "@lit/react";

export { CollapseItem as CollapseItemType } from "mdui/components/collapse-item.js";

export interface CollapseItemCustomEvent extends CustomEvent<void> {
  target: _MduiCollapseItem & EventTarget;
}

export const CollapseItem = createComponent({
  tagName: "mdui-collapse-item",
  react: React,
  elementClass: _MduiCollapseItem,
  events: {
    onOpen: "open" as EventName<CollapseItemCustomEvent>,
    onOpened: "opened" as EventName<CollapseItemCustomEvent>,
    onClose: "close" as EventName<CollapseItemCustomEvent>,
    onClosed: "closed" as EventName<CollapseItemCustomEvent>,
  },
});
