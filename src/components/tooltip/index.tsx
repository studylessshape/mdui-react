import { createComponent, type EventName } from "@lit/react";
import { Tooltip as _MduiTooltip } from "mdui/components/tooltip.js";
import React from "react";

export { Tooltip as TooltipType } from "mdui/components/tooltip.js";

export interface TooltipCustomEvent extends CustomEvent<void> {
  target: _MduiTooltip & EventTarget;
}

export const Tooltip = createComponent({
  react: React,
  tagName: "mdui-tooltip",
  elementClass: _MduiTooltip,
  events: {
    onOpen: "open" as EventName<TooltipCustomEvent>,
    onOpened: "opened" as EventName<TooltipCustomEvent>,
    onClose: "close" as EventName<TooltipCustomEvent>,
    onClosed: "closed" as EventName<TooltipCustomEvent>,
  },
});
