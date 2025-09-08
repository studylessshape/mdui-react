import { Dialog as _MduiDialog } from "mdui/components/dialog.js";
import React from "react";
import { createComponent, type EventName } from "@lit/react";

export { Dialog as DialogType } from "mdui/components/dialog.js";

export interface DialogCustomEvent extends CustomEvent<void> {
  target: _MduiDialog & EventTarget;
}

export const Dialog = createComponent({
  tagName: "mdui-dialog",
  react: React,
  elementClass: _MduiDialog,
  events: {
    onOpen: "open" as EventName<DialogCustomEvent>,
    onOpened: "opened" as EventName<DialogCustomEvent>,
    onClose: "close" as EventName<DialogCustomEvent>,
    onClosed: "closed" as EventName<DialogCustomEvent>,
    onOverlayClick: "overlay-click" as EventName<DialogCustomEvent>,
  },
});
