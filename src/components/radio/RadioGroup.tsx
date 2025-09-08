import { createComponent, type EventName } from "@lit/react";
import { RadioGroup as _MduiRadioGroup } from "mdui/components/radio-group.js";
import React from "react";

export { RadioGroup as RadioGroupType } from "mdui/components/radio-group.js";

export interface RadioGroupCustomEvent extends CustomEvent<void> {
  target: _MduiRadioGroup & EventTarget;
}

export const RadioGroup = createComponent({
  react: React,
  tagName: "mdui-radio-group",
  elementClass: _MduiRadioGroup,
  events: {
    onChange: "change" as EventName<RadioGroupCustomEvent>,
    onInput: "input" as EventName<RadioGroupCustomEvent>,
    onInvalid: "invalid" as EventName<RadioGroupCustomEvent>,
  },
});
