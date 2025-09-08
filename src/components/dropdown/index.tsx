import { Dropdown as _MduiDropdown } from "mdui/components/dropdown.js";
import React from "react";
import { createComponent, type EventName } from "@lit/react";

export { Dropdown as DropdownType } from "mdui/components/dropdown.js";

export interface DropdownCustomEvent extends CustomEvent<void> {
  target: _MduiDropdown & EventTarget;
}

export const Dropdown = createComponent({
  tagName: "mdui-dropdown",
  react: React,
  elementClass: _MduiDropdown,
  events: {
    onOpen: "open" as EventName<DropdownCustomEvent>,
    onOpened: "opened" as EventName<DropdownCustomEvent>,
    onClose: "close" as EventName<DropdownCustomEvent>,
    onClosed: "closed" as EventName<DropdownCustomEvent>,
  },
});
