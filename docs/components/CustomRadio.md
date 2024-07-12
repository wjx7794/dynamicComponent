---
# 顶部导航栏
nav:
  title: 组件
  order: 2
# 侧边栏组名
group:
  title: 基础组件
  # order 越小越靠前，默认为 0
  order: 1
# 文档排序: order 越小越靠前，默认为 0
order: 1
title: 'CustomRadio'
---

# CustomRadio

动态单选组件。

## 代码演示

```jsx
import { CustomRadio } from '@components';
import React, { useState } from 'react';

export default () => {
  // state
  const [value, setValue] = useState('Apple');

  // callback
  const onChange = (newVal) => {
    setValue(newVal);
  };

  // 单选项枚举
  const enums = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true },
  ];

  return (
    <CustomRadio
      value={value}
      onChange={onChange}
      enums={enums}
      direction="vertical"
    />
  );
};
```

## API

| 参数      | 说明                 | 类型                       | 默认值       |
| --------- | -------------------- | -------------------------- | ------------ |
| value     | 用于设置当前选中的值 | `any`                      | \-           |
| onChange  | 选项变化时的回调函数 | `function`                 | \-           |
| enums     | 单选项枚举           | `optionType[]`             | []           |
| direction | 单选项排列方式       | `vertical` 或 `horizontal` | `horizontal` |
| disabled  | 是否禁用整个单选列表 | `boolean`                  | `false`      |
