---
title: Service
---

<I18N>

# 服务

# Service

服务是一系列异步方法的集合，在工程化中很有用。对于庞大的项目，我们通常会将业务逻辑编写成一个个服务，同时约定只在服务中修改 [State](/markdown/docs/states.md) 中的数据。对于视图 (Vue 或 React 中)，只能订阅 State 中的数据，而想要修改 State 的话，只通过编写服务代码来完成更改。

Service is a collection of asynchronous methods, which is very useful in engineering. For large projects, we usually write business logic into services, and at the same time, we agree to modify the data in [State](/markdown/docs/states.md) only in services. For the view (Vue or React), you can only subscribe to the data in State, and if you want to modify State, you can only do it by writing service code.

## 使用

## Use

通过 `defineService` 来创建一个服务，一个服务中，能且只能拥有异步方法。

Create a service through `defineService`, in a service, you can only have asynchronous methods.

```ts
let milkio = defineMilkio({
  // ...
});

// 通过 defineService 来创建一个服务
const foo = defineService({
  async say() {
    return "hello world";
  },
});
```

```ts
let milkio = defineMilkio({
  // ...
});

// Create a service through defineService
const foo = defineService({
  async say() {
    return "hello world";
  },
});
```

创建好一个服务后，可以通过 `use` 来将它挂载到 Milkio 实例中。

After creating a service, you can use `use` to mount it to the Milkio instance.

```ts
milkio = milkio.use({ foo });
```

```ts
milkio = milkio.use({ foo });
```

接下来，我们就可以直接通过 Milkio 实例来调用服务中的方法了。

```ts
console.log(await milkio.foo.say()); // echo: "hello world"
```

```ts
console.log(await milkio.foo.say()); // echo: "hello world"
```

</I18N>
