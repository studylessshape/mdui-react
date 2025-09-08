import { Button as _MduiButton } from "mdui/components/button.js";
import React from "react";
import { createComponent, type EventName } from "@lit/react";

export { Button as ButtonType } from "mdui/components/button.js";

export interface ButtonEvent extends Event {
  target: _MduiButton & EventTarget;
}

export interface ButtonFocusEvent extends FocusEvent {
  target: _MduiButton & EventTarget;
}

export const Button = createComponent({
  tagName: "mdui-button",
  react: React,
  elementClass: _MduiButton,
  events: {
    onFocus: "focus" as EventName<ButtonFocusEvent>,
    onBlur: "blur" as EventName<ButtonFocusEvent>,
    onInvalid: "invalid" as EventName<ButtonEvent>,
  },
});
