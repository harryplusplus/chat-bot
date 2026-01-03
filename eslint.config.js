//@ts-check

import tsParser from '@typescript-eslint/parser'
import expoConfig from 'eslint-config-expo/flat.js'
import { defineConfig } from 'eslint/config'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig([
  {
    files: ['apps/mobile/**/*.{js,jsx,ts,tsx}'],
    extends: [expoConfig],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./apps/mobile/tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: ['./apps/mobile/tsconfig.json'],
        },
      },
    },
  },
  {
    ignores: ['dist/*'],
  },
])
