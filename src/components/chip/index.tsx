import { Chip as _MduiChip } from "mdui/components/chip.js";
import React from "react";
import { createComponent, type EventName } from "@lit/react";

export { Chip as ChipType } from "mdui/components/chip.js";

export interface ChipFocusEvent extends FocusEvent {
  target: _MduiChip & EventTarget;
}

export interface ChipCustomEvent extends CustomEvent<void> {
  target: _MduiChip & EventTarget;
}

export const Chip = createComponent({
  tagName: "mdui-chip",
  react: React,
  elementClass: _MduiChip,
  events: {
    onFocus: "focus" as EventName<ChipFocusEvent>,
    onBlur: "blur" as EventName<ChipFocusEvent>,
    onChange: "change" as EventName<ChipCustomEvent>,
    onInvalid: "invalid" as EventName<ChipCustomEvent>,
    onDelete: "delete" as EventName<ChipCustomEvent>,
  },
});
