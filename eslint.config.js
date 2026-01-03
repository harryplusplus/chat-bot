//@ts-check
import eslint from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import expoConfig from 'eslint-config-expo/flat.js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import { defineConfig, globalIgnores } from 'eslint/config'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import tseslint from 'typescript-eslint'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig([
  globalIgnores([
    '**/dist',
    'eslint.config.js',
    'apps/mobile/scripts/reset-project.js',
  ]),
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        projectService: {
          allowDefaultProject: ['prettier.config.js'],
        },
        tsconfigRootDir: __dirname,
      },
    },
  },
  {
    files: ['apps/mobile/**/*.{js,jsx,ts,tsx}'],
    extends: [expoConfig],
    // languageOptions: {
    //   parser: tsParser,
    //   parserOptions: {
    //     project: ['./apps/mobile/tsconfig.json'],
    //     tsconfigRootDir: __dirname,
    //   },
    // },
    settings: {
      'import/resolver': {
        typescript: {
          project: ['./apps/mobile/tsconfig.json'],
        },
      },
    },
  },
])
