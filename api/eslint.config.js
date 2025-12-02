import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default [
  // Base ESLint recommended rules
  js.configs.recommended,

  // TypeScript recommended rules
  ...tseslint.configs.recommended,

  // Prettier compatibility
  prettier,

  {
    // Your original environment settings
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      globals: {
        // Node + ES2021 environment support
        ...tseslint.environments.node.globals,
      },
    },

    rules: {
      // Your rules object (empty for now)
    },
  },

  // Ignore same directories as your old .eslintignore
  {
    ignores: ['node_modules/', 'dist/', 'build/'],
  },
];
