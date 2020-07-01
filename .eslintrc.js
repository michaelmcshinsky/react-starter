const path = require('path');

module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  plugins: ['react-hooks'],
  rules: {
    'linebreak-style': 0,
    'no-else-return': 0,
    'no-console': ['warn', { allow: ['error'] }],
    'arrow-spacing': 2,
    'react/prop-types': 2,
    'arrow-body-style': 0,
    'react/prefer-stateless-function': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': [2, { props: false }],
    'object-shorthand': [1],
    'max-len': [
      2,
      160,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
      },
    ],
    'arrow-parens': ['error', 'always'],
    'react/jsx-closing-tag-location': [0],
    'no-return-assign': [0],
    'react/jsx-key': 'error',
    'func-names': [0],
    'react/self-closing-comp': [0],
    'react/no-unused-prop-types': [0],
    'react/jsx-filename-extension': [0],
    'react/no-find-dom-node': [1],
    'react/no-string-refs': [1],
    'react/forbid-prop-types': [0],
    'react/require-default-props': [0],
    quotes: [2, 'single', { avoidEscape: true }],
    'class-methods-use-this': [0],
    'newline-per-chained-call': [0],
    'no-underscore-dangle': [0],
    'no-tabs': 1,
    'jsx-a11y/label-has-associated-control': [0],
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['Label'],
        required: {
          every: ['id'],
        },
      },
    ],
    'jsx-a11y/no-static-element-interactions': [0],
    'no-prototype-builtins': 0,
    'react/sort-comp': [
      2,
      {
        order: [
          'propTypes',
          'constructor',
          'lifecycle',
          'componentDidCatch',
          '/^build.+$/',
          '/^on.+$/',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'render',
          '/^render.+$/',
          'everything-else',
        ],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
  },
  globals: {
    window: true,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', path.resolve(__dirname, 'src')]],
      },
    },
  },
};
