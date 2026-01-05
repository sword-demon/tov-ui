# 开发指南

## Husky + lint-staged 配置

### 安装依赖

```bash
pnpm add -D husky lint-staged
```

### 初始化 husky

```bash
npx husky init
```

### 配置 pre-commit hook

创建 `.husky/pre-commit` 文件:

```bash
npx lint-staged
```

### 配置 lint-staged

在 `package.json` 中添加:

```json
{
  "lint-staged": {
    "./**/*.{js,ts,vue,tsx,jsx,css,less,json}": ["eslint --fix"]
  }
}
```

### 配置 prepare 脚本

在 `package.json` 的 scripts 中添加:

```json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

这样在 `pnpm install` 后会自动安装 husky hooks。
