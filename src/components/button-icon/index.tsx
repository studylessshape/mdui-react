import { ButtonIcon as _MduiButtonIcon } from "mdui/components/button-icon.js";
import React from "react";
import { createComponent, type EventName } from "@lit/react";

export { ButtonIcon as ButtonIconType } from "mdui/components/button-icon.js";

export interface ButtonIconCustomEvent extends CustomEvent<void> {
  target: _MduiButtonIcon & EventTarget;
}

export interface ButtonIconFocusEvent extends FocusEvent {
  target: _MduiButtonIcon & EventTarget;
}

export const ButtonIcon = createComponent({
  tagName: "mdui-button-icon",
  react: React,
  elementClass: _MduiButtonIcon,
  events: {
    onFocus: "focus" as EventName<ButtonIconFocusEvent>,
    onBlur: "blur" as EventName<ButtonIconFocusEvent>,
    onChange: "change" as EventName<ButtonIconCustomEvent>,
    onInvalid: "invalid" as EventName<ButtonIconCustomEvent>,
  },
});
