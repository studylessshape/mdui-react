# @less/mdui-react

[English](./README.md) | 中文

[mdui](https://github.com/zdhxiong/mdui) 的 react 组件。

这个包使用 [@lit/react](https://lit.dev/docs/frameworks/react/)([npm](https://www.npmjs.com/package/@lit/react)) 把 [mdui](https://github.com/zdhxiong/mdui) 转为 react 的组件。

## 基础使用

安装后，首先要导入 css 样式：

```css
@import "@less/mdui-react/mdui.css";
```

如果按照了 [mdui](https://github.com/zdhxiong/mdui)，也可以直接导入 [mdui](https://github.com/zdhxiong/mdui) 的样式：

```css
@import "mdui/mdui.css";
```

然后就可以使用组件了：

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
        <TopAppBarTitle>应用标题</TopAppBarTitle>
      </TopAppBar>
      <LayoutMain>页面内容</LayoutMain>
      <NavigationBar
        onChange={(event) => {
          console.log(event.target.value);
        }}
      >
        <NavigationBarItem value="/" icon="home">
          主页
        </NavigationBarItem>
        <NavigationBarItem value="/about" icon="info">
          关于
        </NavigationBarItem>
      </NavigationBar>
    </Layout>
  );
}
```

## Event Target

一些特殊的事件按照下面的方式进行封装：

```ts
import { NavigationBar as _MduiNavigationBar } from "mdui/components/navigation-bar.js";

export interface NavigationBarEvent extends Event {
  target: _MduiNavigationBar & EventTarget;
}
```

然后就可以通过 `event.target` 来获取到组件的值并访问组件的属性了;

其他的组件的事件基本都是按这种形式进行的封装。

## 图标

导入图标可以看 mdui 的文档：[Icon#usage-material-icons](https://www.mdui.org/docs/2/components/icon#usage-material-icons)

也可以使用 [material-icons](https://github.com/marella/material-icons)([npm](https://www.npmjs.com/package/material-icons))。

如果使用 [material-icons](https://github.com/marella/material-icons)，需要在安装后，导入图标的 css。

```css
@import "material-icons/iconfont/material-icons.css";
```

## 贡献代码

### 要求环境

- Node (>=16)
- 包管理器: `pnpm`

### 组件转换

转换组件使用 [@lit/react](https://lit.dev/docs/frameworks/react/) 的 `craeteComponent` 是很简单的：

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

不过我通常会将原本的类型也进行导出，这样方便下面这种 ref：

```tsx
import { LayoutType, Layout } from "@less/mdui-ract";

export function App() {
  const layoutRef = useRef<LayoutType>(null);
  return <Layout ref={layoutRef}></Layout>;
}
```

### 事件

如果组件有一些特殊的事件，需要按照下面的方式进行处理：

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

指定事件的类型可以帮助用户进行事件处理。

## 许可

[MIT](./LICENSE)