# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

## 安装依赖到 workspace 中

```bash
pnpm add eslint @antfu/eslint-config -Dw
```

## ESLint 保存不生效问题排查

### 问题现象

VSCode 保存文件时 ESLint 自动修复不生效。

### 排查步骤

1. 检查 `.vscode/settings.json` 配置：
   - `source.fixAll` 需要设为 `"always"`，而非 `"explicit"`
   - 确保 `eslint.useFlatConfig: true`

2. 确认 ESLint 扩展已安装：`dbaeumer.vscode-eslint`

3. 命令行测试 ESLint 是否正常：
   ```bash
   npx eslint <file-path>
   ```

### 常见问题

**TypeScript 版本不兼容**

```
TypeError: Error while loading rule 'ts/no-invalid-this': Cannot read properties of undefined
```

原因：`@typescript-eslint` 版本与 TypeScript 版本不匹配。

| 包 | 支持的 TypeScript 版本 |
|---|---|
| `@typescript-eslint` 6.x | `<5.4.0` |
| `@typescript-eslint` 7.x+ | `>=5.4.0` |

解决方案：
- 降级 TypeScript：`pnpm add -D typescript@~5.3.3`
- 或升级 ESLint 配置包（如换用 `@antfu/eslint-config`）

### VSCode 配置参考

```json
{
  "eslint.useFlatConfig": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always"
  }
}
```
