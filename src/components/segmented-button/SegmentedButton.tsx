import { createComponent, type EventName } from "@lit/react";
import { SegmentedButton as _MduiSegmentedButton } from "mdui/components/segmented-button.js";
import React from "react";

export { SegmentedButton as SegmentedButtonType } from "mdui/components/segmented-button.js";

export interface SegmentedButtonCustomEvent extends CustomEvent<void> {
  target: _MduiSegmentedButton & EventTarget;
}

export interface SegmentedButtonFocusEvent extends FocusEvent {
  target: _MduiSegmentedButton & EventTarget;
}

export const SegmentedButton = createComponent({
  react: React,
  tagName: "mdui-segmented-button",
  elementClass: _MduiSegmentedButton,
  events: {
    onFocus: "focus" as EventName<SegmentedButtonFocusEvent>,
    onBlur: "blur" as EventName<SegmentedButtonFocusEvent>,
    onInvalid: "invalid" as EventName<SegmentedButtonCustomEvent>,
  },
});
