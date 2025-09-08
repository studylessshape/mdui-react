import { LinearProgress as _MduiLinearProgress } from "mdui/components/linear-progress.js";
import React from "react";
import { createComponent } from "@lit/react";

export { LinearProgress as LinearProgressType } from "mdui/components/linear-progress.js";

export const LinearProgress = createComponent({
  tagName: "mdui-linear-progress",
  react: React,
  elementClass: _MduiLinearProgress,
});
