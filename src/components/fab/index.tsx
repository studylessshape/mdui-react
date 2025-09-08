import { Fab as _MduiFab } from "mdui/components/fab.js";
import React from "react";
import { createComponent, type EventName } from "@lit/react";

export { Fab as FabType } from "mdui/components/fab.js";

export interface FabCustomEvent extends CustomEvent<void> {
  target: _MduiFab & EventTarget;
}

export interface FabFocusEvent extends FocusEvent {
  target: _MduiFab & EventTarget;
}

export const Fab = createComponent({
  tagName: "mdui-fab",
  react: React,
  elementClass: _MduiFab,
  events: {
    onFocus: "focus" as EventName<FabFocusEvent>,
    onBlur: "blur" as EventName<FabFocusEvent>,
    onInvalid: "invalid" as EventName<FabCustomEvent>,
  },
});
