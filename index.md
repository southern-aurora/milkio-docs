<I18N>

# 介绍

# Introduction

高性能的 Bun 框架，以人为本，你代码中的人体工学椅。

High performance Bun framework, human-centered, ergonomic chair in your code.

> Bao 的 1.0 版本尚未发布，有 Api 变更的可能性。不推荐在生产环境中使用。

> The 1.0 version of Bao has not been released yet, and there is a possibility of Api changes. Not recommended for use in production.

## Bao 是如何诞生的？

## How was Bao born?

在创造 Bao (中国语中["包子"](https://en.wikipedia.org/wiki/Baozi)的意思) 之前，我曾经尝试过很多框架，只是，我没有找到一个框架，它能够让我在开发的时候，感觉到足够的舒适。

Before creating Bao (meaning ["Baozi"](https://en.wikipedia.org/wiki/Baozi) in Chinese), I tried many frameworks, but I didn't find a framework that would make me feel comfortable enough when I was developing.

最终，我决定自己创造一个框架，她通过许多巧妙的设计，让你在编码过程中降低心智负担、解放大脑，同时兼顾性能。

Finally, I decided to create a framework myself. She reduces the mental burden and frees the brain through many clever designs, while also taking into account performance.

此时，恰好 Bun 的 `1.0` 版本发布，我决定使用她来编写这个新框架，就是 Bao。

At this time, Bun's `1.0` version was released. I decided to use her to write this new framework, which is Bao.

## 设计哲学

## Design philosophy

我崇尚 Go 语言之父 Rob Pike 的["大道至简"](https://go.dev/talks/2015/simplicity-is-complicated.slide#1)。

I admire Rob Pike, the father of Go, ["Simplicity is Complicated"](https://go.dev/talks/2015/simplicity-is-complicated.slide#1).

学习曲线，是我在设计 Bao 之初最关注的地方。我希望 Bao 能够尽可能的简单，即便是没有后端经验的前端开发者，也可以在 1 天之内学会 Bao 并开始编写你的后端代码。

The learning curve was the most important aspect I focused on when designing Bao. I hope that Bao can be as simple as possible, so that even front-end developers without backend experience can learn it within a day and start writing their backend code.

因此，我不打算使用 `Decorator` 或 `Annotation` 等糖，而是让开发者使用最简单最直观的方式来编写后端代码。

Therefore, I don't intend to use sugars such as `Decorator` or `Annotation`, but let developers use the simplest and most intuitive way to write backend code.

我也希望尽可能地简化概念，Bao 摒弃了诸如 `DDD`、`DI`、`Router`、`Controller`、`Service`、`Entity`、`DAO` 等复杂的概念，而是以一种巧妙的方式，简化开发者的学习曲线。

I also hope to simplify the concept as much as possible. Bao abandons complex concepts such as `DDD`, `DI`, `Router`, `Controller`, `Service`, `Entity`, `DAO`, etc., but in a clever way, simplifies the developer's learning curve.

Bao 也并非是那种，虽然轻量，一旦多人协作，代码就会变得一团乱麻的框架。Bao 有着良好的工程化支持，多人协作的场景在 Bao 设计时也是关注的重点。

Bao is not the kind of framework that, although lightweight, once multiple people collaborate, the code will become a mess. Bao has good engineering support, and scenarios where multiple people collaborate are also the focus of Bao's design.

## 为什么要使用 Bao？

## Why use Bao?

Bao 旨在保证高性能的同时，解决在传统后端开发过程中的痛点，让你在编码过程中，感受到的是舒适而非痛苦。解放你的大脑，降低心智负担，使你可以专注于你的业务。下面，我们来看举例一些实际的场景，如果你觉得这些点让你感受到了痛苦，不妨来试试 Bao。

Bao aims to ensure high performance while solving the pain points in the traditional backend development process, so that you can feel comfortable enough during the coding process. Free your brain, reduce mental burden, and allow you to focus on your business. Next, let's take a look at some actual scenarios. If you feel pain in these points, try Bao.

### 对接 API

### Connect to API

传统的后端工程中，最让人痛苦的地方，我觉得，莫过于是对接 API 阶段。

In traditional backend engineering, the most painful place, I think, is the API docking phase.

假设，我们要编写一个简单的新增数据接口，来看看会遇到哪些麻烦：

Suppose we want to write a simple interface for adding data to see what problems we will encounter:

#### 第一个麻烦：序列化

#### The first problem: Serialization

在前端，我们先将收集到的用户填入的新增数据，序列化为 `JSON` 并发送给后端的新增接口中。

In the front end, we first serialize the newly added data filled in by the user into `JSON` and send it to the newly added interface of the back end.

此时我们遇到了第一个麻烦：`JSON` 所支持的类型有限。

At this point we encountered the first problem: the types supported by `JSON` are limited.

如果用户填入的数据包含 `Date`，那么我们需要手动将时间转换为字符串或时间戳，然后再在后端手动还原它们。

If the data filled in by the user contains `Date`, then we need to manually convert the time to a string or timestamp, and then manually restore them on the back end.

或许你还会用到 `bigint`、`Set`、`Map`、`URL`，而这些类型都需要你手动转换。

Perhaps you will also use `bigint`, `Set`, `Map`, `URL`, and these types all need to be converted manually.

在 Bao 中，你不需要手动处理任何类型，甚至不需要编写 `JSON.stringify`，Bao 会自动帮你处理。

In Bao, you don't need to manually process any types, or even write `JSON.stringify`, Bao will automatically help you.

#### 第二个麻烦：参数校验与类型安全

#### The second problem: parameter verification and type safety

当我们花精力处理了这些问题之后，我们遇到了第二个麻烦：我们不知道用户填入的数据是否符合我们的预期。

After we spent energy dealing with these problems, we encountered the second problem: we don't know if the data filled in by the user meets our expectations.

用户的输入都是不可信的，有些参数是可选的、有些是必选的，有些数字的取值范围是有限的，有些字符串又有最大长度的限制。

User input is untrustworthy. Some parameters are optional, some are required, some numbers have limited ranges, and some strings have maximum lengths.

我们需要继续花费精力，来校验用户的输入，以确保最终处理的数据是可靠的。

We need to continue to spend energy to verify the user's input to ensure that the data finally processed is reliable.

在 Bao 中，所有的参数都是类型安全的。同时，你还可以通过泛型来限制参数是否可选，甚至是限制数字的取值范围、一个字符串是否是邮箱。

In Bao, all parameters are type-safe. At the same time, you can also use generics to restrict whether parameters are optional, or even restrict the range of numbers, and whether a string is an email.

#### 第三个麻烦：TypeScript 类型

#### The third problem: TypeScript type

当我们处理完这一切后，我们发现了第三个麻烦：

When we have dealt with all this, we have found the third problem:

后端给我们的大概只是一份 API 文档，作为前端开发者，需要将这份文档手工转换为 TypeScript 类型。即便这些后端可能是由 TypeScript 编写的。

The backend gives us only a document, as a front-end developer, we need to manually convert this document into TypeScript types. Even if these backends may be written in TypeScript.

而如果未来后端接口发生了变更，我们还需要手动同步修改 TypeScript 类型。后端人工通知前端开发者，然后再由不情愿的前端开发者去手动修改。

And if the backend interface changes in the future, we also need to manually synchronize and modify the TypeScript type. The backend notifies the front-end developer manually, and then the reluctant front-end developer manually modifies it.

在 Bao 中，你可以为前端构建出一个 npm 包，让前端开发者直接使用你的包，来与你通信，就像：

In Bao, you can build an npm package for the front end, so that the front end developer can directly use your package to communicate with you, just like:

```ts
const result = await client.execute("hello/world", { name: "alice" });
```

```ts
const result = await client.execute("hello/world", { name: "alice" });
```

包是可以自由定制的，这意味着你可以在 Bun 或 NodeJs、浏览器、甚至是 React Native 或各种小程序中使用。你甚至可以将你的业务逻辑写在包中，譬如，当 Token 失效后自动刷新 Token。

The package can be customized freely, which means that you can use it in Bun or NodeJs, browser, or even React Native or various Small Programs. You can even write your business logic in the package, for example, automatically refresh the token when the token expires.

#### 第四个麻烦：自动化测试

#### The fourth problem: automated testing

完成这一切后，运行我们的代码，哈！报错了！

After all this is done, run our code, ha! Error!

是的，通常后端没有自动化测试，我们需要手动调试接口，来验证我们的代码是否正确。

Yes, usually there is no automated testing on the back end, we need to manually debug the interface to verify that our code is correct.

而没有自动化测试的原因除了开发者不愿意编写测试之外，还有就是，除非在框架设计之初就重视测试，否则，这些操作很难被自动化。

And the reason for not having automated testing is that developers are unwilling to write tests, and also, unless testing is valued at the beginning of the framework design, otherwise, these operations are difficult to automate.

因为，你需要执行启动 Web Server、连接数据库、初始化数据、执行测试、清理数据、关闭 Web Server 这一系列操作。

Because you need to perform a series of operations such as starting the Web Server, connecting to the database, initializing the data, executing the test, cleaning up the data, and closing the Web Server.

Bao 在设计之初就考虑到了自动化测试，尽管不是必须的，但是，你可以很方便的为每个接口都编写一个测试文件。

Bao considered automated testing at the beginning of the design. Although it is not necessary, you can easily write a test file for each interface.

同时，我们建议不使用诸如 Postman 等工具来调试你的 API 接口，而是通过运行你编写的测试文件来调试。

At the same time, we recommend not using tools such as Postman to debug your API interface, but to debug by running the test file you wrote.

### HTTP 的复杂性与路由

### The complexity of HTTP and routing

HTTP 功能很强大，同时又很复杂。

HTTP is powerful and complex.

例如，我们要考虑一个接口要采用 `GET` 还是 `POST`，抑或是 `PUT`、`PATCH`、`DELETE`。

For example, we need to consider whether an interface should use `GET` or `POST`, or `PUT`, `PATCH`, `DELETE`.

如果接口是 `GET`，那么我们的参数不能直接序列化为 `JSON` 放在请求体中，而是需要转换成 URL Parameters，即 `foo?bar=baz&qux=fred` 的形式拼接在 URL 中，这会比 `JSON` 更糟：URL Parameters 无法区分数字与字符串以及其他类型，更不支持数组、对象深层嵌套，还有最大长度限制。

If the interface is `GET`, then our parameters cannot be directly serialized into `JSON` and placed in the request body, but need to be converted into URL Parameters, that is, the form of `foo?bar=baz&qux=fred` is spliced ​​in the URL, which is worse than `JSON`: URL Parameters cannot distinguish between numbers and strings and other types, and do not support arrays, object deep nesting, and maximum length restrictions.

鉴于 HTTP 的复杂性，传统许多框架都会提供路由的功能，通过编写路由来决定，一串用户输入的 URL 如何映射到某个实际的控制器。

Given the complexity of HTTP, many traditional frameworks provide routing functions, and write routes to determine how a string of user-entered URLs is mapped to an actual controller.

但 HTTP 的许多设计来源于上一个时代：那个时代还没有前端与后端的分工，HTML 页面是由后端拼接而成的。所以拥有像动态路由、路由参数、重定向等功能，以及各种方法和状态码。对于如今已经前后端分离、只需要提供 API 供前端调用的我们来说，是没有必要的。

But many of HTTP's designs come from the previous era: there was no division of labor between the front end and the back end at that time, and the HTML page was spliced ​​by the back end. So it has functions such as dynamic routing, routing parameters, redirection, various methods and status codes. For us who have already separated the front and back ends and only need to provide APIs for the front end to call, it is not necessary.

而且，路由的存在有时也会令我们痛苦：我经常写好了接口但因为忘记添加路由，而导致刷新了半天都找不到页面，最后才回忆起添加路由。

Moreover, the existence of routing sometimes makes us painful: I often write the interface well, but because I forgot to add the route, I can't find the page after refreshing for a long time, and finally remember to add the route.

Bao 遵循约定大于配置，很好的隐藏了 HTTP 的复杂性。你可以在 `/src/app` 中自由组织目录，其中所有的名为 `api.ts` 的文件，其中的每个函数都会被自动映射为一个接口。当然，这并非意味着你失去了对 HTTP 的控制，你依然可以自由定义接口的 HTTP 方法、状态码、返回值。

Bao follows the principle of convention over configuration, and hides the complexity of HTTP very well. You can freely organize directories in `/src/app`, and all files named `api.ts` will automatically map each function in it to an interface. Of course, this does not mean that you lose control of HTTP, you can still freely define the HTTP method, status code, and return value of the interface.

### 更多内容？

### More?

我相信你已经感受到了 Bao 的与众不同，除了上面的泛泛而谈，Bao 还在许多其他细节之处。继续阅读文档，你会发现更多的惊喜。

I believe you have already felt the difference of Bao. In addition to the above, Bao is also in many other details. Continue reading the documentation, you will find more surprises.

</I18N>
