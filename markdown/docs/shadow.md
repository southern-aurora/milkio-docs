---
title: Shadow
---

<I18N>

# 影子

# Shadow

假设，你的 Milkio 需要处于不同的环境中，例如，在 Electron 中，Milkio 处于主进程，而你的应用处于渲染进程。你需要在渲染进程中调用 Milkio，就像在主进程中一样。这时，就需要 Shadow 功能派上用场了。

Assume that your Milkio needs to be in different environments, for example, in Electron, Milkio is in the main process, and your application is in the render process. You need to call Milkio in the render process, just like in the main process. At this time, the Shadow function is needed.

Shadow 是一个单独的包，你只需要在你的调用方（例如，Electron 的渲染进程中）中安装它即可。

Shadow is a separate package, you only need to install it in your caller (for example, in the render process of Electron).

</I18N>

::: code-group

```sh [npm]
npm install --save @milkio/shadow
```

```sh [yarn]
yarn add @milkio/shadow
```

```sh [pnpm]
pnpm add @milkio/shadow
```

```sh [bun]
bun i @milkio/shadow
```

```sh [co]
co i @milkio/shadow
```

:::

<I18N>

## 前言

## Preface

你所使用的场景可能已经被封装成了一个包，而不再需要手动编写。你可以先尝试在左侧的导航栏的 Package 章节中，查看是否有你所使用的场景，如果没有的话，你可以继续阅读本章节，来了解如何利用 Shadow 功能。

The scenario you are using may have been encapsulated into a package, and you no longer need to write it manually. You can try to see if the scenario you are using is in the Package section of the left navigation bar. If not, you can continue to read this section to learn how to use the Shadow function.

## 使用

## Use

我们先创建一个普通的 Milkio 实例：

First we create a normal Milkio instance:

</I18N>

```ts
const milkio = defineMilkio({
  states: {
    foo: await defineState(FromMemory(), async () => {
      return {
        yourString: "world",
        yourBoolean: true,
        yourNumber: 520,
      };
    }),
  },
});
```

<I18N>

创建一个 Shadow 实例，只需要调用 `makeShadowMilkio` 方法即可。

To create a Shadow instance, just call the `makeShadowMilkio` method.

如果你向此方法的泛型中传递了 `milkio` 实例的类型，那么，Shadow 实例就会拥有与 `milkio` 实例相同的 TypeScript 类型。

If you pass the type of the `milkio` instance to the generics of this method, then the Shadow instance will have the same TypeScript type as the `milkio` instance.

</I18N>

```ts
import { makeShadowMilkio } from "@milkio/shadow";

const shadowMilkio = makeShadowMilkio<typeof milkio>((path) => {
  return async (...args: Array<unknown>) => {
    // ...
  };
});
```

<I18N>

方法接受一个闭包函数，这个函数的参数是一个字符串，表示你想要调用的状态的路径，是一个数组。例如，`["states", "foo", "yourString"]` 表示使用者调用了 `shadowMilkio.states.foo.yourString`。

The method accepts a closure function, the parameter of this function is a string, which represents the path of the state you want to call, which is an array. For example, `["states", "foo", "yourString"]` means that the user calls `shadowMilkio.states.foo.yourString`.

Milkio 在设计之初，为了让 Shadow 易于编写，所有的调用都必定是异步方法。你可以参考下面的规则，来编写一个较为完善的 Shadow：

When Milkio was designed, in order to make Shadow easy to write, all calls must be asynchronous methods. You can refer to the following rules to write a more complete Shadow:

</I18N>

```ts
const shadowMilkio = makeShadowMilkio<typeof milkio>((path) => {
  return async (...args: Array<unknown>) => {
    // state
    if (path[0] === "states") {
      if (path.at(-1)?.endsWith("$") === true) {
        // state subscribe
        const key = path[2].slice(0, -1);
        // ...
      } else if (args.length === 0) {
        // state get item
        // ...
      } else {
        // states set item
        // ...
      }
    }
    // event
    else if (path[0] === "events") {
      if (path.at(-1)?.endsWith("$") === true) {
        // event subscribe
        const key = path[2].slice(0, -1);
        // ...
      } else {
        // event publish
        // ...
      }
    }
    // service
    else {
      // service call
      // ...
    }
  };
});
```
