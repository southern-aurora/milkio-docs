---
title: State
---

<I18N>

# 状态

# State

State 是 Milkio 的核心部分，你可以向 State 中获取或设置数据，以及，订阅他们的更改。如果你在编写一些简单而有趣的小应用，你可能只需要使用 Milkio 的 State 就完全足够了。

State is the core part of Milkio, you can get or set data from State, and subscribe to their changes. If you are writing some simple and interesting small applications, you may only need to use Milkio"s State.

在 [QuickStart](/markdown/docs/quick-start.md) 章节中，我们已经了解了 State 的基础用法，这个章节中，将更深入的了解 State 的更多特性。

In the [QuickStart](/markdown/docs/quick-start.md) section, we have learned the basic usage of State. In this section, we will learn more about the features of State.

## 持久化

## Persistence

在 Milkio 中，State 中的数据是可以持久化的。例如，你可以将数据保存在浏览器的 LocalStorage 中，这样，即便用户刷新了页面，数据也不会丢失。要想了解更多关于持久化的内容，请阅读 [数据源](/markdown/docs/data-source.md) 章节。

In Milkio, the data in State can be persisted. For example, you can save the data in the browser"s LocalStorage, so that even if the user refreshes the page, the data will not be lost. To learn more about persistence, please read the [Data Source](/markdown/docs/data-source.md) section.

## 受支持的类型

## Supported types

并非所有的类型都可以自由的存储在 Milkio 中，因为，并不是所有的类型都可以被无副作用地序列化，例如 `Function`。不过这并非意味着你不可以将一个方法存储在 Milkio 中，请阅读 [Service](/markdown/docs/services.md) 章节。

Not all types can be stored freely in Milkio, because not all types can be serialized without side effects, such as `Function`. However, this does not mean that you cannot store a method in Milkio, please read the [Service](/markdown/docs/services.md) section.

Milkio 支持这些类型：`string` / `number` / `boolean` / `undefined` / `null` / `Array` / `Object (plain)` / `bigint` / `Date` / `RegExp` / `Set` / `Map` / `Error` / `URL`。

The types supported by Milkio are: `string` / `number` / `boolean` / `undefined` / `null` / `Array` / `Object (plain)` / `bigint` / `Date` / `RegExp` / `Set` / `Map` / `Error` / `URL`.

## 不可变性

## Immutability

与其他的状态管理器有所不同的是，在 Milkio 中，State 中的数据被设计为是不可变的。这能够让我们规避一些潜在的 Bug。

Unlike other state management, in Milkio, the data in State is designed to be immutable. This allows us to avoid some potential bugs.

在 JavaScript 中，对于对象而言，它们是通过引用传递的，这意味着，如果你修改了一个对象，那么，所有引用到这个对象的地方，都会被修改。

In JavaScript, for objects, they are passed by reference, which means that if you modify an object, then all places that reference this object will be modified.

```ts
const userInfo = { name: "Alex" };
function getUserInfo() {
  return userInfo;
}
const userInfoCopy = getUserInfo();
userInfoCopy.name = "Steve";

console.log(userInfoCopy.name); // 显示: "Steve", 这是对的
console.log(userInfo.name); // 显示: "Steve", 而非 "Alex", 这是错误的
```

```ts
const userInfo = { name: "Alex" };
function getUserInfo() {
  return userInfo;
}
const userInfoCopy = getUserInfo();
userInfoCopy.name = "Steve";

console.log(userInfoCopy.name); // echo: "Steve", this is right
console.log(userInfo.name); // echo: "Steve", not "Alex", this is wrong
```

我们举一个实际的例子：假设我们编写了一个修改用户信息的页面。 但是，在用户点击保存之前，我们不想将这些数据真的保存在我们的状态管理器中。

Let"s take a real example: Suppose we write a page to modify user information. However, we don"t want to really save this data in our state management until the user clicks save.

```ts
// 一个简单的状态
const userInfo = { name: "Alex" }
export getUserInfo = () => {
    return userInfo;
}
export setUserInfo = (key: string, value: string) => {
    userInfo[key] = value;
}
```

```ts
// a simple state
const userInfo = { name: "Alex" }
export getUserInfo = () => {
    return userInfo;
}
export setUserInfo = (key: string, value: string) => {
    userInfo[key] = value;
}
```

```ts
// 在用户信息视图中
const userInfo = getUserInfo();
// 我们监听用户在输入框中的更改
const usernameElement = document.querySelector("#username");
usernameElement.addEventListener("input", (e) => {
  userInfo.name = e.target.value;
});
// 用户点击保存按钮
const usernameElement = document.querySelector("#save-button");
usernameElement.addEventListener("click", () => {
  if (userInfo.name === "Steve") {
    alert("You are not Steve!");
  }
  setUserInfo(name, userInfo.name);
});
```

```ts
// In the user information view
const userInfo = getUserInfo();
// We listen to changes in the user"s input
const usernameElement = document.querySelector("#username");
usernameElement.addEventListener("input", (e) => {
  userInfo.name = e.target.value;
});
// The user clicks the save button
const usernameElement = document.querySelector("#save-button");
usernameElement.addEventListener("click", () => {
  if (userInfo.name === "Steve") {
    alert("You are not Steve!");
  }
  setUserInfo(name, userInfo.name);
});
```

看起来代码好像没什么问题，是吧？但是实际情况是，由于 JavaScript 中，对象是通过引用传递的，所以，即便我们没有调用 `setUserInfo`，`userInfo` 其实也已经被修改了。

The code looks like there is no problem, right? But the fact is that since objects are passed by reference in JavaScript, even if we don"t call `setUserInfo`, `userInfo` has actually been modified.

在 Milkio 中，所有的数据都是不可变的。当你通过 Milkio 读取了状态中的一个值时，你得到的是一个新的值，而不是原来的那个值，即便原来的值是对象。这意味着，除非你显式地要求 Milkio 保存数据，否则，Milkio 不会修改你的数据。

In Milkio, all data is immutable. When you read a value in the state through Milkio, you get a new value, not the original value, even if the original value is an object. This means that unless you explicitly ask Milkio to save the data, Milkio will not modify your data.

```ts
// 在 Milkio 中
export const milkio = defineMilkio({
  states: {
    user: await defineState(FromMemory(), async () => {
      return {
        info: {
            name: "Alex"
        },
      };
    }),
});
```

```ts
// In Milkio
export const milkio = defineMilkio({
  states: {
    user: await defineState(FromMemory(), async () => {
      return {
        info: {
            name: "Alex"
        },
      };
    }),
});
```

```ts
// 在用户信息视图中
const userInfo = await milkio.states.user.info();
// 我们监听用户在输入框中的更改
const usernameElement = document.querySelector("#username");
usernameElement.addEventListener("input", (e) => {
  userInfo.name(e.target.value);
});
// 用户点击保存按钮
const usernameElement = document.querySelector("#save-button");
usernameElement.addEventListener("click", () => {
  if (userInfo.name === "Steve") {
    alert("You are not Steve!");
  }
  await milkio.states.user.info(userInfo);
});
```

```ts
// In the user information view
const userInfo = await milkio.states.user.info();
// We listen to changes in the user"s input
const usernameElement = document.querySelector("#username");
usernameElement.addEventListener("input", (e) => {
  userInfo.name(e.target.value);
});
// The user clicks the save button
const usernameElement = document.querySelector("#save-button");
usernameElement.addEventListener("click", () => {
  if (userInfo.name === "Steve") {
    alert("You are not Steve!");
  }
  await milkio.states.user.info(userInfo);
});
```

此时，只要我们没有点击保存按钮，Milkio 中的用户信息就不会被修改。

At this time, as long as we don"t click the save button, the user information in Milkio will not be modified.

</I18N>
