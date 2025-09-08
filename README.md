# mdui-react

[mdui](https://github.com/zdhxiong/mdui) for react.

This package use [@lit/react](https://lit.dev/docs/frameworks/react/)([npm](https://www.npmjs.com/package/@lit/react)) convert the web components of [mdui](https://github.com/zdhxiong/mdui) to react component.

## Basic Usage

```tsx
import {
  Layout,
  LayoutMain,
  NavigationBar,
  NavigationBarItem,
  TopAppBar,
  TopAppBarTitle,
  Slot,
} from "@less/mdui-react";

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

Some event wrap like below:

```ts
import { NavigationBar as _MduiNavigationBar } from "mdui/components/navigation-bar.js";

export interface NavigationBarEvent extends Event {
  target: _MduiNavigationBar & EventTarget;
}
```

Then you can access the value by `event.target.value` in event handler;

Other components' event also like that.

## Icons

Import icons can read the doc [Icon#usage-material-icons](https://www.mdui.org/docs/2/components/icon#usage-material-icons)

Also can use the [material-icons](https://github.com/marella/material-icons)([npm](https://www.npmjs.com/package/material-icons)).

If use [material-icons](https://github.com/marella/material-icons), need import css after install:

```css
@import "material-icons/iconfont/material-icons.css";
```

## Contributing

### Environment

- Node (>=16)
- Package manager: `pnpm`
