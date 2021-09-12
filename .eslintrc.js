module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    "prettier",
    "prettier/prettier",
    "plugin:prettier/recommended"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: "./tsconfig.json",
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".ts", ".tsx"]
      }
    }
  },

  plugins: [
    'react',
    'prettier',
    '@typescript-eslint',
  ],
  rules: {
    'prettier/prettier': 'error',
    "react/react-in-jsx-scope": "off",
    "no-use-before-define": "off",
    "react/require-default-props": "off" ,
    "@typescript-eslint/no-use-before-define": ["error"],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
    ],
    "react/prop-types": "off",
    "import/named": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "react/jsx-filename-extension": [1, {
      "extensions": [".tsx"]
    }],
    "import/prefer-default-export": "off",
    "react/jsx-props-no-spreading": "off",
  },

};