import { Badge as _MduiBadge } from "mdui/components/badge.js";
import React from "react";
import { createComponent } from "@lit/react";

export { Badge as BadgeType } from "mdui/components/badge.js";

export const Badge = createComponent({
  tagName: "mdui-badge",
  react: React,
  elementClass: _MduiBadge,
});
