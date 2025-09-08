import { createComponent, type EventName } from "@lit/react";
import { TextField as _MduiTextField } from "mdui/components/text-field.js";
import React from "react";

export { TextField as TextFieldType } from "mdui/components/text-field.js";

export interface TextFieldCustomEvent extends CustomEvent<void> {
  target: _MduiTextField & EventTarget;
}

export interface TextFieldFocusEvent extends FocusEvent {
  target: _MduiTextField & EventTarget;
}

export const TextField = createComponent({
  react: React,
  tagName: "mdui-text-field",
  elementClass: _MduiTextField,
  events: {
    onFocus: "focus" as EventName<TextFieldFocusEvent>,
    onBlur: "blur" as EventName<TextFieldFocusEvent>,
    onChange: "change" as EventName<TextFieldCustomEvent>,
    onInput: "input" as EventName<TextFieldCustomEvent>,
    onInvalid: "invalid" as EventName<TextFieldCustomEvent>,
    onClear: "clear" as EventName<TextFieldCustomEvent>,
  },
});
