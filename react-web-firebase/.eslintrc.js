module.exports = {
  'parser': 'babel-eslint',
  'extends': ['plugin:react/recommended', 'airbnb'],
  'env': {
    'browser': true,
    'jest': true,
  },
  'plugins': [
    'react',
    'jsx-a11y',
    'import'
  ],
  'globals': {
    'document': true,
    'window': true,
    'FileReader': true,
    'Blob': true,
    'atob': true,
  },
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'rules': {
    'no-console': 0,
    'func-names': [2, 'as-needed'],
    'react/prop-types': 0,
    'no-restricted-syntax': 0,
    'react/prefer-stateless-function': 0,
    'space-before-function-paren': 0,
    'class-methods-use-this': 0,
    'jsx-a11y/href-no-hash': 0,
    'comma-dangle': 0,
    'quotes': [2, 'single', { 'avoidEscape': true }],
    'jsx-quotes': [2, 'prefer-single'],
  }
};

