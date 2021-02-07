const rules = {
  // import/exports
  'import/exports-last': 'error',
  'import/prefer-default-export': 'off',
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'index', 'internal'],
      pathGroups: [
        {
          pattern: 'react',
          group: 'external',
          position: 'before',
        },
        {
          pattern: 'components',
          group: 'internal',
        },
        {
          pattern: 'pages/**',
          group: 'internal',
        },
        {
          pattern: 'helpers/**',
          group: 'internal',
        },
        {
          pattern: 'styles/**',
          group: 'internal',
        },
      ],
      pathGroupsExcludedImportTypes: ['react'],
      'newlines-between': 'never',
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    },
  ],
  'no-async-promise-executor': 'off',
  'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
  'no-loop-func': 'off',
  'no-restricted-syntax': 'off',
  'no-shadow': 'off',
  'no-unused-expressions': ['error', { allowShortCircuit: true }],
  'no-unused-vars': 'error',
  'no-use-before-define': 'error',
  'prefer-destructuring': ['error', { object: true, array: false }],
  'react/destructuring-assignment': 'error',
  'react/display-name': 'off',
  'react/forbid-prop-types': 'off',
  'react/jsx-closing-bracket-location': 1,
  'react/jsx-first-prop-new-line': [1, 'multiline'],
  'react/jsx-filename-extension': 'off',
  'react/jsx-wrap-multilines': 'off',
  'react/jsx-curly-newline': 'off',
  'react/jsx-one-expression-per-line': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/jsx-indent-props': [2, 2],
  'react/no-unescaped-entities': 'off',
  'react/require-default-props': 'off',
  'react/react-in-jsx-scope': 'off',
  'comma-dangle': ['error', 'always-multiline'],
  semi: ['error', 'never'],
  quotes: ['error', 'single'],
  strict: ['error', 'global'],
  'unicorn/filename-case': [
    'error',
    {
      cases: {
        camelCase: true,
        pascalCase: true,
      },
    },
  ],
  requireConfigFile: 0,
}

const otherConfigs = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier'],
  parserOptions: {
    ecmaVersion: 2021,
    requireConfigFile: false,
  },
  plugins: ['import', 'unicorn', 'react'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['node_modules', 'src/'],
      },
    },
  },
}

module.exports = {
  rules,
  ...otherConfigs,
}
