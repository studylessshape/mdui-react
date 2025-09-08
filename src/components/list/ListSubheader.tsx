import { ListSubheader as _MduiListSubheader } from "mdui/components/list-subheader.js";
import React from "react";
import { createComponent, type EventName } from "@lit/react";

export { ListSubheader as ListSubheaderType } from "mdui/components/list-subheader.js";

export const ListSubheader = createComponent({
  tagName: "mdui-list-subheader",
  react: React,
  elementClass: _MduiListSubheader,
});
