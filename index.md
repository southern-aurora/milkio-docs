---
title: Introduction
---

<I18N>

# 介绍

# Introduction

下一代状态管理：可以持久化数据，适用于一切由 JavaScript 编写的应用，包括 Electron！

Next generation state management: can persist data, suitable for all applications written in JavaScript, including Electron!

```ts
const message = await milkio.states.youWantTo.say();
console.log(message); // echo: "hello world!"
```

```ts
const message = await milkio.states.youWantTo.say();
console.log(message); // echo: "hello world!"
```

## 为什么要使用 Milkio？

## Why use Milkio?

Atwood 定律：任何可以被 JavaScript 编写的应用，最终都将被 JavaScript 来写。

Atwood's Law: Any application that can be written in JavaScript, will eventually be written in JavaScript.

但是以往的状态管理器，都是为浏览器，甚至是只为某一种视图库设计的，它们无法在其他环境中使用。如果我们想开发一款 [Electron](https://www.electronjs.org/) 应用呢？我们需要状态管理器运行在主进程中，而在其它的渲染进程中都可以使用它，无论是读取其中的数据还是调用其中的方法。

But the previous state management were designed for browsers, or even just for a certain view library, and they can't be used in other environments. What if we want to develop an [Electron](https://www.electronjs.org/) application? We need the state management to run in the main process, and it can be used in other render processes, whether it is to read the data or call the method.

我们还需要状态可以持久化保存，比如用户的配置信息，主题，Token，这些内容都可以保存在状态管理器中，且可以订阅到数据的变化而改变我们的视图。

We also need the state to be persisted, such as user configuration information, theme, Token, these contents can be saved in the state management, and can be subscribed to the change of data to change our view.

除了这些新特性之外，Milkio 还带来了更好的工程化支持。一个前端项目很容易随着业务推移变得庞大复杂难以维护，很重要的一个原因，就是许多逻辑被编写在了视图中（就是你的 `.tsx` 文件或者 `.vue` 文件）。Milkio 能够帮你将逻辑从视图中分离出来。

In addition to these new features, Milkio also brings better engineering support. A front-end project is easy to become large, complex and difficult to maintain as the business progresses. One of the important reasons is that many logics are written in the view (your `.tsx` or `.vue` file). Milkio can help you separate logic from the view.

不用担心，Milkio 是渐进式的，你不必一开始就学习和使用 Milkio 的全部，Milkio 也被设计为与其他状态管理器兼容。

Don't worry, Milkio is progressive, you don't have to learn and use all of Milkio at the beginning, Milkio is also designed to be compatible with other state management.

## 做更富有想象力的事

## Do more imaginative things

既然 Electron 的跨进程通信都能轻松做到，那么，我们为什么不能做一些更有想象力的事情呢？

Since Electron's cross-process communication can be easily done, why can't we do something more imaginative?

比如，我们可以轻松实现，多标签页共享一个状态：用户同时在所有标签页中登录或退出，在一个页面中的操作在其他标签页中同步。

For example, we can easily implement that multiple tabs share a state: the user logs in or logs out in all tabs at the same time, and the operation on one page is synchronized in other tabs.

我们只需要将我们应用的 Milkio，放在 [SharedWorker](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker) 中，这样你在一个标签页中，对状态的修改，都会触发其它标签页中的订阅。

We just need to put our application's Milkio in the [SharedWorker](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker), so that when you modify the state in one tab, it will trigger the subscription in other tabs.

又或者，我们想要开发一个可以由 Extensions 自由扩展的应用，就像 VSCode 那样。那么，想要拥有一个安全且非阻塞的方式，为 Extensions 的 JavaScript 们提供的运行环境，显然 [Worker](https://developer.mozilla.org/en-US/docs/Web/API/Worker) 成为了我们的首选。我们可以在页面中创建一个为 Extensions 提供各种功能的 Milkio，然后在 Worker 中，允许 Extensions 调用它。

Or, we want to develop an application that can be freely extended by Extensions, just like VSCode. Then, in order to have a safe and non-blocking way to provide a runtime environment for the JavaScript of Extensions, [Worker](https://developer.mozilla.org/en-US/docs/Web/API/Worker) is obviously our first choice. We can create a Milkio in the page that provides various capabilities for Extensions, and then allow Extensions to call it in the Worker.

</I18N>
