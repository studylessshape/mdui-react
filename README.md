# @studylessshape/mdui-react

English | [中文](./README_zh.md)

[mdui](https://github.com/zdhxiong/mdui) for react.

This package use [@lit/react](https://lit.dev/docs/frameworks/react/)([npm](https://www.npmjs.com/package/@lit/react)) to convert the web components of [mdui](https://github.com/zdhxiong/mdui) to react component.

## Basic Usage

First is to import css styles after install.

```css
@import "@studylessshape/mdui-react/mdui.css";
```

If the [mdui](https://github.com/zdhxiong/mdui) had been installed, can also import by:

```css
@import "mdui/mdui.css";
```

Then use components:

```tsx
import {
  Layout,
  LayoutMain,
  NavigationBar,
  NavigationBarItem,
  TopAppBar,
  TopAppBarTitle,
  Slot,
} from "@studylessshape/mdui-react";

export function App() {
  return (
    <Layout>
      <TopAppBar variant="center-aligned">
        <TopAppBarTitle>App Title</TopAppBarTitle>
      </TopAppBar>
      <LayoutMain>App Content</LayoutMain>
      <NavigationBar
        onChange={(event) => {
          console.log(event.target.value);
        }}
      >
        <NavigationBarItem value="/" icon="home">
          Home
        </NavigationBarItem>
        <NavigationBarItem value="/about" icon="info">
          About
        </NavigationBarItem>
      </NavigationBar>
    </Layout>
  );
}
```

## Event Target

Some events are encapsulated in the following form:

```ts
import { NavigationBar as _MduiNavigationBar } from "mdui/components/navigation-bar.js";

export interface NavigationBarEvent extends Event {
  target: _MduiNavigationBar & EventTarget;
}
```

Then you can access the value by `event.target.value` in event handler;

The events of other components are also consistent.

## Icons

Import icons can read the doc [Icon#usage-material-icons](https://www.mdui.org/docs/2/components/icon#usage-material-icons)

Also can use the [material-icons](https://github.com/marella/material-icons)([npm](https://www.npmjs.com/package/material-icons)).

If use [material-icons](https://github.com/marella/material-icons), need import css after install:

```css
@import "material-icons/iconfont/material-icons.css";
```

## Todo

- [ ] locales
- [ ] functions

## Contributing

### Environment

- Node (>=16)
- Package manager: `pnpm`

### Component Create

Create a react component from web component is simple used [@lit/react](https://lit.dev/docs/frameworks/react/)

````tsx
import { createComponent } from "@lit/react";
import React from "react";
import { Layout as _MduiLayout } from "mdui/components/layout.js";

export { Layout as LayoutType } from "mdui/components/layout.js";

export const Layout = createComponent({
  react: React,
  tagName: "mdui-layout",
  elementClas
```s: _MduiLayout,
});
````

I offen export the raw type because I thought it can help to ref.

```tsx
import { LayoutType, Layout } from "@studylessshape/mdui-ract";

export function App() {
  const layoutRef = useRef<LayoutType>(null);
  return <Layout ref={layoutRef}></Layout>;
}
```

### Event

If there are some special events in the component, can deil with this way:

```tsx
import { createComponent, type EventName } from "@lit/react";
import { NavigationBar as _MduiNavigationBar } from "mdui/components/navigation-bar.js";
import React from "react";

export interface NavigationBarEvent extends Event {
  target: _MduiNavigationBar & EventTarget;
}

export const NavigationBar = createComponent({
  react: React,
  tagName: "mdui-navigation-bar",
  elementClass: _MduiNavigationBar,
  events: {
    onChange: "change" as EventName<NavigationBarEvent>,
    onShow: "show" as EventName<NavigationBarEvent>,
    onShown: "shown" as EventName<NavigationBarEvent>,
    onHide: "hide" as EventName<NavigationBarEvent>,
    onHidden: "hidden" as EventName<NavigationBarEvent>,
  },
});
```

Specified the target type can help users to handle the event.

## License

[MIT](./LICENSE)