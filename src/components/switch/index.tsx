import { createComponent, type EventName } from "@lit/react";
import { Switch as _MduiSwitch } from "mdui/components/switch.js";
import React from "react";

export { Switch as SwitchType } from "mdui/components/switch.js";

export interface SwitchEvent extends Event {
  target: _MduiSwitch & EventTarget;
}

export interface SwitchCustomEvent extends CustomEvent<void> {
  target: _MduiSwitch & EventTarget;
}

export interface SwitchFocusEvent extends FocusEvent {
  target: _MduiSwitch & EventTarget;
}

export const Switch = createComponent({
  react: React,
  tagName: "mdui-switch",
  elementClass: _MduiSwitch,
  events: {
    onFocus: "focus" as EventName<SwitchFocusEvent>,
    onBlur: "blur" as EventName<SwitchFocusEvent>,
    onChange: "change" as EventName<SwitchCustomEvent>,
    onInput: "input" as EventName<SwitchEvent>,
    onInvalid: "invalid" as EventName<SwitchCustomEvent>,
  },
});
