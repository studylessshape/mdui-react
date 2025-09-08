import { CircularProgress as _MduiCircularProgress } from "mdui/components/circular-progress.js";
import React from "react";
import { createComponent } from "@lit/react";

export { CircularProgress as CircularProgressType } from "mdui/components/circular-progress.js";

export const CircularProgress = createComponent({
  tagName: "mdui-circular-progress",
  react: React,
  elementClass: _MduiCircularProgress,
});
