import { createComponent, type EventName } from "@lit/react";
import { RangeSlider as _MduiRangeSlider } from "mdui/components/range-slider.js";
import React from "react";

export { RangeSlider as RangeSliderType } from "mdui/components/range-slider.js";

export interface RangeSliderEvent extends Event {
  target: _MduiRangeSlider & EventTarget;
}

export interface RangeSliderCustomEvent extends CustomEvent<void> {
  target: _MduiRangeSlider & EventTarget;
}

export interface RangeSliderFocusEvent extends FocusEvent {
  target: _MduiRangeSlider & EventTarget;
}

export const RangeSlider = createComponent({
  react: React,
  tagName: "mdui-range-slider",
  elementClass: _MduiRangeSlider,
  events: {
    onFocus: "focus" as EventName<RangeSliderFocusEvent>,
    onBlur: "blur" as EventName<RangeSliderFocusEvent>,
    onChange: "change" as EventName<RangeSliderFocusEvent>,
    onInput: "input" as EventName<RangeSliderEvent>,
    onInvalid: "invalid" as EventName<RangeSliderCustomEvent>,
  },
});
