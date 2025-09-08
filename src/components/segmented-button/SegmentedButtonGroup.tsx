import { createComponent, type EventName } from "@lit/react";
import { SegmentedButtonGroup as _MduiSegmentedButtonGroup } from "mdui/components/segmented-button-group.js";
import React from "react";

export { SegmentedButtonGroup as SegmentedButtonGroupType } from "mdui/components/segmented-button-group.js";

export interface SegmentedButtonGroupCustomEvent extends CustomEvent<void> {
  target: _MduiSegmentedButtonGroup & EventTarget;
}

export const SegmentedButtonGroup = createComponent({
  react: React,
  tagName: "mdui-segmented-button-group",
  elementClass: _MduiSegmentedButtonGroup,
  events: {
    onChange: "change" as EventName<SegmentedButtonGroupCustomEvent>,
    onInvalid: "invalid" as EventName<SegmentedButtonGroupCustomEvent>,
  },
});
