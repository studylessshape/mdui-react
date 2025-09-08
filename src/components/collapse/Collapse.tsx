import { Collapse as _MduiCollapse } from "mdui/components/collapse.js";
import React from "react";
import { createComponent, type EventName } from "@lit/react";

export { Collapse as CollapseType } from "mdui/components/collapse.js";

export interface CollapseCustomEvent extends CustomEvent<void> {
  target: _MduiCollapse & EventTarget;
}

export const Collapse = createComponent({
  tagName: "mdui-collapse",
  react: React,
  elementClass: _MduiCollapse,
  events: {
    onChange: "change" as EventName<CollapseCustomEvent>,
  },
});
