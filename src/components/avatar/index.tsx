import { Avatar as _MduiAvatar } from "mdui/components/avatar.js";
import React from "react";
import { createComponent } from "@lit/react";

export { Avatar as AvatarType } from "mdui/components/avatar.js";

export const Avatar = createComponent({
  tagName: "mdui-avatar",
  react: React,
  elementClass: _MduiAvatar,
});
