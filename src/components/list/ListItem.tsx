import { ListItem as _MduiListItem } from "mdui/components/list-item.js";
import React from "react";
import { createComponent, type EventName } from "@lit/react";

export { ListItem as ListItemType } from "mdui/components/list-item.js";

export interface ListItemFocusEvent extends FocusEvent {
  target: _MduiListItem & EventTarget;
}

export const ListItem = createComponent({
  tagName: "mdui-list-item",
  react: React,
  elementClass: _MduiListItem,
  events: {
    onFocus: "focus" as EventName<ListItemFocusEvent>,
    onBlur: "blur" as EventName<ListItemFocusEvent>,
  },
});
