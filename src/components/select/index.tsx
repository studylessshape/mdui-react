import { createComponent, type EventName } from "@lit/react";
import { Select as _MduiSelect } from "mdui/components/select.js";
import React from "react";

export { Select as SelectType } from "mdui/components/select.js";

export interface SelectCustomEvent extends CustomEvent<void> {
  target: _MduiSelect & EventTarget;
}

export interface SelectFocusEvent extends FocusEvent {
  target: _MduiSelect & EventTarget;
}

export const Select = createComponent({
  react: React,
  tagName: "mdui-select",
  elementClass: _MduiSelect,
  events: {
    onFocus: "focus" as EventName<SelectFocusEvent>,
    onBlur: "blur" as EventName<SelectFocusEvent>,
    onChange: "change" as EventName<SelectFocusEvent>,
    onInvalid: "invalid" as EventName<SelectCustomEvent>,
    onClear: "clear" as EventName<SelectCustomEvent>,
  },
});
