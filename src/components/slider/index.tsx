import { createComponent, type EventName } from "@lit/react";
import { Slider as _MduiSlider } from "mdui/components/slider.js";
import React from "react";

export { Slider as SliderType } from "mdui/components/slider.js";

export interface SliderEvent extends Event {
  target: _MduiSlider & EventTarget;
}

export interface SliderCustomEvent extends CustomEvent<void> {
  target: _MduiSlider & EventTarget;
}

export interface SliderFocusEvent extends FocusEvent {
  target: _MduiSlider & EventTarget;
}

export const Slider = createComponent({
  react: React,
  tagName: "mdui-slider",
  elementClass: _MduiSlider,
  events: {
    onFocus: "focus" as EventName<SliderFocusEvent>,
    onBlur: "blur" as EventName<SliderFocusEvent>,
    onChange: "change" as EventName<SliderFocusEvent>,
    onInput: "input" as EventName<SliderEvent>,
    onInvalid: "invalid" as EventName<SliderCustomEvent>,
  },
});
