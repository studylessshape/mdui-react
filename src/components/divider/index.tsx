import { Divider as _MduiDivider } from "mdui/components/divider.js";
import React from "react";
import { createComponent, type EventName } from "@lit/react";

export { Divider as DividerType } from "mdui/components/divider.js";

export const Divider = createComponent({
  tagName: "mdui-divider",
  react: React,
  elementClass: _MduiDivider,
});
