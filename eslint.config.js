import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),

  {
    files: ['**/*.{js,jsx}'],

    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module'
      }
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier
    },

    settings: {
      react: {
        version: 'detect'
      }
    },

    extends: [
      js.configs.recommended,
      react.configs.recommended,
      react.configs['jsx-runtime'],
      reactHooks.configs.recommended,
      reactRefresh.configs.vite
    ],

    rules: {
      'react/prop-types': 'off',
      'no-unused-vars': 'off',
      'jsx-quotes': ['error', 'prefer-double'],
      'prettier/prettier': [
        'error',
        {
          printWidth: 100,
          trailingComma: 'none',
          singleQuote: true,
          endOfLine: 'auto',
          semi: true
        }
      ]
    }
  }
]);
