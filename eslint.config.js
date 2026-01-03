//@ts-check
import eslint from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import expoConfig from 'eslint-config-expo/flat.js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import reactCompiler from 'eslint-plugin-react-compiler'
import { defineConfig, globalIgnores } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig([
  globalIgnores([
    '**/dist',
    'eslint.config.js',
    'apps/mobile/scripts/reset-project.js',
    'apps/mobile/expo-env.d.ts',
    'apps/mobile/tailwind.config.js',
    'apps/mobile/babel.config.js',
    'apps/mobile/metro.config.js',
  ]),
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  reactCompiler.configs.recommended,
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        projectService: {
          allowDefaultProject: ['prettier.config.js'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['apps/mobile/**/*.{js,jsx,ts,tsx}'],
    extends: [expoConfig],
    settings: {
      'import/resolver': {
        typescript: {
          project: ['./apps/mobile/tsconfig.json'],
        },
      },
    },
  },
])
