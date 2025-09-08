import { List as _MduiList } from "mdui/components/list.js";
import React from "react";
import { createComponent, type EventName } from "@lit/react";

export { List as ListType } from "mdui/components/list.js";

export const List = createComponent({
  tagName: "mdui-list",
  react: React,
  elementClass: _MduiList,
});
