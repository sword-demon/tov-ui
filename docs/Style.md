# 为什么要有一个完整的样式体系?

一个可落地的样式体系让团队在速度、质量和一致性之间取得平衡。它不仅解决“好不好看”，更解决“能不能持续维护、扩展、协作”。对前端工程师而言，完整的样式体系能够：

- 统一语义与命名，降低沟通成本
- 固化设计决策，减少重复实现
- 提升可维护性与可扩展性
- 降低页面回归与样式冲突风险
- 为组件化与多主题提供稳定基础

---

# 样式体系的目标

1. **一致性**：相同语义呈现相同样式，不出现“同名不同样”或“同样不同名”。
2. **可维护性**：可读、可控、可追溯，避免无序堆叠与魔法值。
3. **可扩展性**：新增组件和主题时，不修改已存在的大量样式。
4. **可协作性**：新人可快速上手，团队可统一执行标准。
5. **可落地性**：规则可被 lint 或 review 验证，不依赖口头约束。

---

# 体系分层

从低到高分层，保证职责单一、依赖清晰：

1. **基础层（Reset / Normalize）**
   - 消除浏览器默认差异。
   - 统一 box-sizing、默认字体、行高、列表样式等。

2. **设计变量层（Design Tokens）**
   - 使用 CSS Variables 定义颜色、字号、间距、圆角、阴影等。
   - 保证主题切换与统一调整的可控性。

3. **基础样式层（Base）**
   - 针对语义标签的基础表现，例如 `body`、`a`、`button`、`input`。

4. **布局层（Layout）**
   - 栅格、容器、对齐、间距策略。
   - 提供最少的布局工具类或布局组件。

5. **组件层（Component）**
   - 组件内部样式，以语义命名为主，避免跨组件影响。

6. **工具层（Utilities）**
   - 常用的单一职责工具类，避免重复样式。
   - 必须数量可控、语义清晰。

7. **主题层（Theme）**
   - 在不改变结构的情况下切换色彩、阴影、背景等风格。

---

# 设计变量规范（CSS Variables）

## 命名规范

- 统一使用 `--color-*`、`--font-*`、`--space-*`、`--radius-*`、`--shadow-*` 等前缀。
- 保持语义命名，避免 `--color-blue-1` 这类与业务无关的定义。
- 颜色建议同时定义语义与基色，仅暴露语义给业务使用。

示例：

```css
:root {
  --color-text-primary: #1f2329;
  --color-text-secondary: #4e5969;
  --color-bg-default: #ffffff;
  --color-bg-muted: #f7f8fa;
  --color-border-default: #e5e6eb;

  --font-size-1: 12px;
  --font-size-2: 14px;
  --font-size-3: 16px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;

  --radius-1: 2px;
  --radius-2: 4px;

  --shadow-1: 0 1px 2px rgba(0, 0, 0, 0.08);
}
```

## 使用规范

- 禁止在业务样式中使用硬编码颜色或间距。
- 组件内部优先使用语义变量，再映射到基础变量。
- 变量新增必须通过评审，避免无序增长。

---

# 命名与组织规范

## 组件命名

- 组件类名使用 `c-` 前缀：`c-button`、`c-card`
- 子元素使用双下划线：`c-button__icon`
- 状态使用双中划线：`c-button--loading`

示例：

```css
.c-button {
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-2);
}

.c-button__icon {
  margin-right: var(--space-2);
}

.c-button--loading {
  opacity: 0.7;
}
```

## 工具类命名

- 以 `u-` 前缀定义单一职责工具类
- 只能做一件事，例如 `u-mt-2`、`u-text-center`

示例：

```css
.u-text-center { text-align: center; }
.u-mt-2 { margin-top: var(--space-2); }
```

## 布局类命名

- 布局类使用 `l-` 前缀，例如 `l-container`、`l-grid`
- 布局类不应包含颜色、字体等表现层内容

---

# CSS 组织方式

推荐按层级组织，减少耦合：

```
styles/
  tokens.css
  reset.css
  base.css
  layout.css
  components/
    button.css
    card.css
  utilities.css
  themes/
    light.css
    dark.css
```

每个组件样式独立文件，避免跨组件引用；如有复用需求，优先抽象为变量或工具类。

---

# 响应式与断点规范

## 断点建议

- `sm`: 576px
- `md`: 768px
- `lg`: 992px
- `xl`: 1200px

示例：

```css
@media (min-width: 768px) {
  .l-container {
    padding: 0 var(--space-4);
  }
}
```

## 响应式原则

- 以内容优先，避免单纯跟随设备尺寸。
- 小屏优先，从最小布局逐步增强。

---

# 排版规范

## 字体

- 使用统一字体栈并集中定义。
- 字号范围控制在有限级别，避免无限扩展。

示例：

```css
:root {
  --font-family-base: "PingFang SC", "Microsoft YaHei", Arial, sans-serif;
}

body {
  font-family: var(--font-family-base);
  font-size: var(--font-size-2);
  line-height: 1.6;
}
```

## 行高与间距

- 行高使用相对单位，避免硬编码。
- 段落间距统一使用 `--space-*`。

---

# 颜色规范

## 原则

- 禁止出现非变量颜色。
- 文本、背景、边框、提示色分别有独立语义。
- 颜色对比度需满足可访问性要求（WCAG AA）。

## 示例语义

```css
:root {
  --color-success: #00b42a;
  --color-warning: #ff7d00;
  --color-danger: #f53f3f;
}
```

---

# 间距与尺寸规范

## 间距

- 只使用 `--space-*`。
- 遵循 4 或 8 的间距阶梯，避免随意值。

## 尺寸

- 组件尺寸采用 `sm` / `md` / `lg` 等语义尺寸，不出现 `42px` 这类魔法值。

---

# 状态与交互规范

每个可交互组件必须覆盖以下状态：

- default
- hover
- active
- disabled
- focus-visible

示例：

```css
.c-button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

禁止删除 `focus-visible`，确保键盘可访问性。

---

# 动效规范

## 原则

- 动效只用于反馈和层次，不可过度。
- 统一时长与缓动函数，避免各自为战。

示例：

```css
:root {
  --motion-duration-1: 120ms;
  --motion-ease-1: ease-out;
}

.c-card {
  transition: box-shadow var(--motion-duration-1) var(--motion-ease-1);
}
```

---

# 可访问性（A11y）

必须满足：

- 文本与背景对比度 >= 4.5:1
- 可交互元素具备 `:focus-visible`
- 按钮、链接等元素在禁用状态仍可识别
- 不使用仅颜色传达状态（例如错误提示必须包含文字或图标）

---

# 性能与维护

## 避免

- 深层嵌套超过 3 层
- 大量使用 `!important`
- 业务样式覆盖基础样式

## 优先

- 低权重选择器（类名优于标签、层叠优于嵌套）
- 减少重排与重绘

---

# Lint 与落地执行

## 强制规则建议

- 禁止使用非变量颜色与间距
- 禁止 `!important`，除非提供注释说明
- 限制嵌套层级
- 统一属性排序

## 代码评审检查清单

1. 是否使用变量，而非硬编码值
2. 命名是否符合 `c-` / `l-` / `u-` 规范
3. 是否覆盖所有交互状态
4. 是否破坏现有样式层级
5. 是否可复用或应抽象

---

# 最小示例结构

```css
/* tokens.css */
:root {
  --color-primary: #165dff;
  --space-2: 8px;
  --radius-2: 4px;
}

/* components/button.css */
.c-button {
  background: var(--color-primary);
  color: #fff;
  padding: var(--space-2);
  border-radius: var(--radius-2);
}
```

---

# 常见问题

## 为什么要限制硬编码?

为了确保主题可切换、统一调整成本低、样式可预测。

## 为什么要分层?

分层保证职责单一，降低样式耦合，避免“动一处，崩一片”。

## 工具类会不会变成乱用?

只保留高频、单一职责工具类，并强制 review 即可控制规模。

---

# 执行建议

1. 建立样式规范文档与示例代码
2. 配套 Stylelint 规则并在 CI 强制执行
3. 组件库内优先落地规范，逐步覆盖业务层
4. 每次新增样式都经过 code review 对照本规范
