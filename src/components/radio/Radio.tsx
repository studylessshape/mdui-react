import { createComponent, type EventName } from "@lit/react";
import { Radio as _MduiRadio } from "mdui/components/radio.js";
import React from "react";

export { Radio as RadioType } from "mdui/components/radio.js";

export interface RadioCustomEvent extends CustomEvent<void> {
  target: _MduiRadio & EventTarget;
}

export interface RadioFocusEvent extends FocusEvent {
  target: _MduiRadio & EventTarget;
}

export const Radio = createComponent({
  react: React,
  tagName: "mdui-radio",
  elementClass: _MduiRadio,
  events: {
    onFocus: "focus" as EventName<RadioFocusEvent>,
    onBlur: "blur" as EventName<RadioFocusEvent>,
    onChange: "change" as EventName<RadioCustomEvent>,
  },
});
