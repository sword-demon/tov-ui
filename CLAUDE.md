# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

tov-ui 是一个基于 Vue 3 + TypeScript 的组件库项目, 使用 pnpm workspace 管理 monorepo 结构, VitePress 作为文档站点.

## Commands

```bash
# 安装依赖
pnpm install

# 启动文档开发服务器
pnpm docs:dev

# 构建文档站点
pnpm docs:build

# 预览构建后的文档
pnpm docs:preview

# 手动运行 ESLint 修复
npx eslint . --fix
```

## Architecture

### 目录结构

- `packages/tov-ui/src/` - 组件库源码, 每个组件一个目录
- `docs/` - 文档页面 (markdown)
- `.vitepress/` - VitePress 配置和自定义主题

### 组件开发

组件放在 `packages/tov-ui/src/<component-name>/` 目录下:
- `index.ts` - 组件入口
- `index.md` - 组件文档 (会被 VitePress rewrite 到 `/components/<name>/`)

组件库入口: `packages/tov-ui/src/index.ts`

### VitePress Path Rewrites

```
docs/(.*)                        -> (.*)
packages/tov-ui/src/:comp/(.*) -> components/:comp/(.*)
```

## Code Style

- ESLint 配置: @antfu/eslint-config
- 提交时自动运行 lint-staged (Husky pre-commit hook)
- TypeScript 严格模式

## Tech Stack

- Vue 3.5
- TypeScript 5.9
- Vite (rolldown-vite)
- VitePress 1.6
- pnpm workspace

## Git

- 提交信息不添加 claude code 相关标注信息
