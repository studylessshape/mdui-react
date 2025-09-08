import { createComponent, type EventName } from "@lit/react";
import { Snackbar as _MduiSnackbar } from "mdui/components/snackbar.js";
import React from "react";

export { Snackbar as SnackbarType } from "mdui/components/snackbar.js";

export interface SnackbarCustomEvent extends CustomEvent<void> {
  target: _MduiSnackbar & EventTarget;
}

export const Snackbar = createComponent({
  react: React,
  tagName: "mdui-snackbar",
  elementClass: _MduiSnackbar,
  events: {
    onOpen: "open" as EventName<SnackbarCustomEvent>,
    onOpened: "opened" as EventName<SnackbarCustomEvent>,
    onClose: "close" as EventName<SnackbarCustomEvent>,
    onClosed: "closed" as EventName<SnackbarCustomEvent>,
    onActionClick: "action-click" as EventName<SnackbarCustomEvent>,
  },
});
