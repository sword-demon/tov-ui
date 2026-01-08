import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { gold, green, purple, red } from '@ant-design/colors'

let colors = ''
purple.forEach((color, index) => {
  // css variable 变量
  // --前缀-颜色-主色: 色彩
  // --tov-color-primary: #722ed1;
  colors += `--tov-color-primary-${index + 1}: ${color};\n`
})
colors += '\n'
green.forEach((color, index) => {
  // css variable 变量
  // --前缀-颜色-主色: 色彩
  // --tov-color-primary: #722ed1;
  colors += `--tov-color-success-${index + 1}: ${color};\n`
})
colors += '\n'
gold.forEach((color, index) => {
  // css variable 变量
  // --前缀-颜色-主色: 色彩
  // --tov-color-primary: #722ed1;
  colors += `--tov-color-warning-${index + 1}: ${color};\n`
})

colors += '\n'
red.forEach((color, index) => {
  // css variable 变量
  // --前缀-颜色-主色: 色彩
  // --tov-color-primary: #722ed1;
  colors += `--tov-color-error-${index + 1}: ${color};\n`
})

const baseUrl = fileURLToPath(new URL('../', import.meta.url))
const cssFile = path.resolve(baseUrl, 'packages/tov-ui/src/style/theme/colors.css')
fs.writeFileSync(cssFile, `:root{\n${colors}\n}`)
