---
title: Event
---

<I18N>

# 事件

# Event

Milkio 拥有事件功能，这可能是其他状态管理器中不常见的。事件功能可以用来解决订阅单个值过于原子化的问题。

Milkio has event functions, which may be uncommon in other state managers. The event function can be used to solve the problem that subscribing to a single value is too atomic.

一个实际的例子，我们希望用户在登出后，使用户回到首页。但是，如果我们的系统非常庞大，登出时可能会执行一系列操作：比如删除用户的 Token，清空用户的购物车，清空用户的配置信息等等。我们没有办法根据订阅单一的值来判断用户是否完成了登出操作。而且，通过判断一个值是否为空来判断用户是否登出，这种方式也是不够直观的。

A practical example, we want the user to return to the home page after logging out. However, if our system is very large, a series of operations may be performed when logging out: for example, deleting the user's Token, emptying the user's shopping cart, emptying the user's configuration information, etc. We have no way to determine whether the user has completed the logout operation based on subscribing to a single value. Moreover, it is not intuitive enough to judge whether the user has logged out by judging whether a value is empty.

在 Milkio 中，事件就是一个更好的方式。你可以在用户登出时，直接发出一个用户登出的事件，而在视图中，订阅这个事件，当事件发生时，就可以执行重定向用户到首页的代码。

In Milkio, events are a better way. You can directly send a user logout event when the user logs out, and subscribe to this event in the view. When the event occurs, you can execute the code to redirect the user to the home page.

## 使用

## Use

</I18N>

```ts
import { defineMilkio, defineEvent } from "@milkio/core";

const milkio = defineMilkio({
  events: {
    foo: defineEvent<{
      bar: string;
    }>(),
  },
});
```

<I18N>

发送事件与订阅事件的方式，与订阅状态的方式一致。

The way to send and subscribe to events is the same as the way to subscribe to states.

发送一个事件：

Send an event:

</I18N>

```ts
await milkio.events.foo.bar("hello world");
```

<I18N>

订阅一个事件：

Subscribe to an event:

</I18N>

```ts
milkio.events.foo.bar$((data) => {
  console.log(data); // echo: { value: "hello world", key: "bar" }
});
```
