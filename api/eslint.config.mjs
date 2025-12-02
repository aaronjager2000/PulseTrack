import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
  // Base ESLint recommended rules
  js.configs.recommended,

  // TypeScript recommended rules (flat config)
  ...tseslint.configs.recommended,

  // Prettier compatibility
  prettier,

  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      globals: {
        ...globals.node,
      },
    },

    rules: {
      // Custom rules here if needed
    },
  },

  // Ignore same directories as your old .eslintignore
  {
    ignores: ['node_modules/', 'dist/', 'build/'],
  },
];
