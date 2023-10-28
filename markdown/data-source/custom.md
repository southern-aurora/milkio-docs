---
title: Custom
---

<I18N>

# 自定义

# Custom

自定义一个数据源很简单，只要实现 `From` 类接口即可。

It's easy to customize a data source, just implement the `From` class interface.

## 示例

## Example

```ts
import { From } from "@milkio/core";

export type FromExampleOptions = {
  //
};

export const FromExample = (options: FromExampleOptions = {}) => {
  return new (class implements From {
    readonly name = "FromExample";
    readonly enableSerialize = false;

    constructor(options: FromMemoryOptions) {
      // 构造函数
      // 使用者可以向你的数据源传入一些参数，来定制一些功能
    }

    async bootstrap(options: { namespace: string; seeds?: Record<string, string> }) {
      // 初始化时，此方法会被调用
      // options.seeds 是数据源中应该存储的初始数据
      // 你可以在此方法中，判断数据源中是否已经存在数据
      // 如果不存在，则将 options.seeds 中的数据写入数据源
    }

    async set(key: string, value: string) {
      // 设置数据
      // 序列化操作由 Milkio 完成，value 的值永远是一个字符串
    }
    async get(key: string) {
      // 获取数据
    }
    async exists(key: string) {
      // 判断数据是否存在
    }
  })(options);
};
```

```ts
import { From } from "@milkio/core";

export type FromExampleOptions = {
  //
};

export const FromExample = (options: FromExampleOptions = {}) => {
  return new (class implements From {
    readonly name = "FromExample";
    readonly enableSerialize = false;

    constructor(options: FromMemoryOptions) {
      // Constructor
      // Users can pass in some parameters to your data source to customize some functions
    }

    async bootstrap(options: { namespace: string; seeds?: Record<string, string> }) {
      // This method will be called when initialized
      // options.seeds is the initial data that should be stored in the data source
      // You can determine whether there is data in the data source in this method
      // If not, write the data in options.seeds to the data source
    }

    async set(key: string, value: string) {
      // Set data
      // The serialization operation is completed by Milkio, and the value is always a string
    }
    async get(key: string) {
      // Get data
    }
    async exists(key: string) {
      // Determine whether the data exists
    }
  })(options);
};
```

</I18N>
