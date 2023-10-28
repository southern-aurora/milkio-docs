---
title: QuickStart
---

<I18N>

# 快速开始

# Quick Start

在文档中，我们使用 [TypeScript](https://www.typescriptlang.org/) 来编写示例代码，Milkio 也同样支持 JavaScript。

In the documentation, we use [TypeScript](https://www.typescriptlang.org/) to write sample code, Milkio also supports JavaScript.

TypeScript 是 JavaScript 的超集，如果你正在使用 JavaScript，你只需要将那些不属于 JavaScript 的部分删除掉就可以了。

TypeScript is a superset of JavaScript. If you are using JavaScript, you just need to remove those parts that are not part of JavaScript.

不久之后，我们会提供一个包含 JavaScript 版本示例代码的文档。

Soon, we will provide a documentation with sample code for the JavaScript version.

## 安装

## Install

你可以选择你正在使用的包管理器安装 Milkio 的核心包：

You can choose the package manager you are using to install Milkio:

</I18N>

::: code-group

```sh [npm]
npm install --save @milkio/core
```

```sh [yarn]
yarn add @milkio/core
```

```sh [pnpm]
pnpm add @milkio/core
```

```sh [bun]
bun i @milkio/core
```

```sh [co]
co i @milkio/core
```

:::

<I18N>

Milkio 有许多包组成，这有助于减少你的应用的体积。除了核心包之外，其它的包都是可选的。

Milkio consists of many packages, which helps to reduce the size of your application. In addition to the core package, the other packages are optional.

## 开始旅程

## Start the journey

使用 Milkio 是一件非常简单的事：

Using Milkio is a very simple thing:

</I18N>

```ts
import { defineMilkio, defineState, FromMemory } from "@milkio/core";

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

我们定义了一个 Milkio 实例，并且在里面的 `states` 中定义了许多数据。你可能注意到了 `FromMemory()` 这个方法，是的，这是 [数据源](/markdown/docs/data-source.md)，它决定了数据以何种方式持久化。现在，这些数据都保存在内存中，当我们刷新网页或重新运行应用，这些数据就会被恢复到初始的状态。

We defined a Milkio instance and defined a lot of data in `states` inside. You may have noticed the `FromMemory()` method, yes, this is the [data source](/markdown/docs/data-source.md), which determines how the data is persisted. Now, these data are all saved in memory. When we refresh the webpage or restart the application, these data will be restored to the initial state.

我们想要读取这些数据，可以这样做：

We want to read these data, we can do this:

</I18N>

```ts
const data = await milkio.states.foo.yourString();
console.log(data); // echo: "world"
```

```ts
const data = await milkio.states.foo.yourNumber();
console.log(data); // echo: 520
```

<I18N>

Milkio 被设计为异步的，因为，像在 Electron 中通信，或将状态持久化到 IndexedDB 中，这些都是异步的操作。

Milkio is designed to be asynchronous, because, like communication in Electron, or persisting state to IndexedDB, these are asynchronous operations.

你还可以修改这些数据，只需要在参数中传入一个新的值即可：

You can also modify these data, just pass in a new value in the parameter:

</I18N>

```ts
await milkio.states.foo.yourString("hello");
```

```ts
await milkio.states.foo.yourNumber(1314);
```

<I18N>

订阅数据的变化也是很简单的事，只需要在原本的代码末尾添加 `$` 符号，就可以从取值变为订阅：

It is also very simple to subscribe to changes in data, just add the `$` symbol at the end of the original code, you can change from getting the value to subscribing:

</I18N>

```ts
milkio.states.foo.yourString$((data) => {
  console.log(data.value, data.key, data.namespace);
});
```

<I18N>

订阅方法的返回值将是一个退订方法，你可以在不再需要订阅的时候调用它：

The return value of the subscription method will be an unsubscribe method, you can call it when you no longer need to subscribe:

```ts
const unsubscribe = milkio.states.foo.yourString$((data) => {
  console.log(data.value, data.key, data.namespace);
  unsubscribe(); // 只订阅一次
});
```

```ts
const unsubscribe = milkio.states.foo.yourString$((data) => {
  console.log(data.value, data.key, data.namespace);
  unsubscribe(); // subscribe only once
});
```

</I18N>
