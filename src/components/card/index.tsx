import { Card as _MduiCard } from "mdui/components/card.js";
import React from "react";
import { createComponent, type EventName } from "@lit/react";

export { Card as CardType } from "mdui/components/card.js";

export interface CardFocusEvent extends FocusEvent {
  target: _MduiCard & EventTarget;
}

export const Card = createComponent({
  tagName: "mdui-card",
  react: React,
  elementClass: _MduiCard,
  events: {
    onFocus: "focus" as EventName<CardFocusEvent>,
    onBlur: "blur" as EventName<CardFocusEvent>,
  },
});
