# tov-ui

基于 Vue 3 + TypeScript 的组件库，使用 pnpm workspace 管理 monorepo 结构。

## 特性

- Vue 3.5 + TypeScript 5.9
- pnpm workspace monorepo
- VitePress 文档站点 + 组件 Demo 展示
- @antfu/eslint-config 代码规范
- Husky + lint-staged 提交校验

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动文档开发服务器
pnpm docs:dev

# 构建文档
pnpm docs:build
```

## 目录结构

```
tov-ui/
├── packages/tov-ui/src/   # 组件库源码
│   └── <component>/
│       ├── index.ts       # 组件入口
│       ├── index.md       # 组件文档
│       └── demos/         # 组件示例
├── docs/                  # 文档页面
└── .vitepress/            # VitePress 配置
```

## 开发指南

### 添加新组件

1. 在 `packages/tov-ui/src/` 下创建组件目录
2. 编写 `index.ts` 组件入口
3. 编写 `index.md` 组件文档
4. 在 `demos/` 下添加示例

### 文档路径映射

VitePress 配置了路径重写：

| 源路径 | 访问路径 |
|--------|----------|
| `docs/(.*)` | `/(.*)` |
| `packages/tov-ui/src/:comp/(.*)` | `/components/:comp/(.*)` |

### 代码规范

```bash
# 手动运行 ESLint 修复
npx eslint . --fix
```

提交时自动运行 lint-staged。

---

## ESLint 配置参考

### VSCode 配置

```json
{
  "eslint.useFlatConfig": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always"
  }
}
```

### 常见问题

**保存时 ESLint 自动修复不生效**

1. 确认 `.vscode/settings.json` 中 `source.fixAll` 设为 `"always"`
2. 确认 `eslint.useFlatConfig: true`
3. 确认已安装 ESLint 扩展 `dbaeumer.vscode-eslint`

**TypeScript 版本不兼容错误**

```
TypeError: Error while loading rule 'ts/no-invalid-this'
```

原因：`@typescript-eslint` 版本与 TypeScript 版本不匹配。

| @typescript-eslint | TypeScript |
|--------------------|------------|
| 6.x | < 5.4.0 |
| 7.x+ | >= 5.4.0 |

解决方案：
- 降级 TypeScript: `pnpm add -D typescript@~5.3.3`
- 或升级 ESLint 配置包

---

## 安装依赖到 workspace

```bash
pnpm add <package> -Dw
```

## License

MIT
