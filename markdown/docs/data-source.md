---
title: DataSource
---

<I18N>

# 数据源

# DataSource

数据源是 Milkio 中最重要的概念之一。Milkio 通过使用不同的数据源，来将你的状态持久化在不同的位置。

Data source is one of the most important concepts in Milkio. Milkio uses different data sources to persist your state in different locations.

让我们回顾一下在 [快速开始](/markdown/docs/quick-start.md) 章节中，遇到的第一个例子。其中 `defineState` 方法接受的第一个参数，就是要将此 State 使用何种数据源进行持久化。

Let's review the first example encountered in the [QuickStart](/markdown/docs/quick-start.md) section. The first parameter accepted by the `defineState` method is the data source to be used to persist this State.

```ts
import { defineMilkio, defineState, FromMemory } from "@milkio/core";

const milkio = defineMilkio({
  states: {
    // 这里的 FromMemory() 就是一个数据源 // [!code focus:2]
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

```ts
import { defineMilkio, defineState, FromMemory } from "@milkio/core";

const milkio = defineMilkio({
  states: {
    // Here FromMemory() is a data source // [!code focus:2]
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

## 使用

## Use

Milkio 有许多数据源，你可以在左侧目录中找到它们。

Milkio has many data sources, you can find them in the left directory.

如果这些都不可以满足你的需求，你也可以 [自定义数据源](/markdown/data-source/custom.md)。

If none of these can meet your needs, you can also [customize the data source](/markdown/data-source/custom.md).

## 社区数据源

## Community data source

如果你开发了一个数据源（或者准备开发），欢迎向我们发送 Issue 告诉我们！

If you have developed a data source (or are ready to develop), please send us an Issue to tell us!

如果你的数据源很有用，我们会将你其加入到 Milkio Docs 的协作者中，你可以直接将你的数据源文档写在 Milkio Docs 的文档之中。

If your data source is useful, we will add it to the collaborators of Milkio Docs, and you can directly write your data source documentation in the Milkio Docs documentation.

对于源代码方面，我们希望使用你自己的仓库，发布属于你的 NPM 包，并在 Milkio Docs 中提供你仓库的链接。这除了能显著的让别人知道你才是它的创作者之外，也有助于减轻 Milkio 主仓库维护方面的负担。因为，我们可能对某种数据源所处的环境不够擅长。

For the source code, we hope to use your own repository, publish your own NPM package, and provide a link to your repository in Milkio Docs. In addition to making it clear to others that you are its creator, it also helps to reduce the burden of maintaining the Milkio main repository. Because we may not be good at the environment in which a certain data source is located.

</I18N>
