import { Checkbox as _MduiCheckbox } from "mdui/components/checkbox.js";
import React from "react";
import { createComponent, type EventName } from "@lit/react";

export { Checkbox as CheckboxType } from "mdui/components/checkbox.js";

export interface CheckboxFocusEvent extends FocusEvent {
  target: _MduiCheckbox & EventTarget;
}

export interface CheckboxCustomEvent extends CustomEvent<void> {
  target: _MduiCheckbox & EventTarget;
}

export interface CheckboxEvent extends Event {
  target: _MduiCheckbox & EventTarget;
}

export const Checkbox = createComponent({
  tagName: "mdui-checkbox",
  react: React,
  elementClass: _MduiCheckbox,
  events: {
    onFocus: "focus" as EventName<CheckboxFocusEvent>,
    onBlur: "blur" as EventName<CheckboxFocusEvent>,
    onChange: "change" as EventName<CheckboxCustomEvent>,
    onInput: "input" as EventName<CheckboxEvent>,
    onInvalid: "invalid" as EventName<CheckboxCustomEvent>,
  },
});
