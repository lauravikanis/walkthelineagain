const path = require("path");

module.exports = {
  ignorePatterns: [".eslintrc.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "react", "import"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/strict",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": ["off"],
    "@typescript-eslint/no-inferrable-types": ["off"],
    "@typescript-eslint/no-explicit-any": ["warn"],
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "import/no-default-export": "error",
    "jsx-a11y/click-events-have-key-events": "warn",
    "jsx-a11y/no-static-element-interactions": "warn",
    "jsx-a11y/no-noninteractive-element-interactions": "warn",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/no-onchange": "off",
    "jsx-a11y/media-has-caption": "off",
    "no-console": [
      "warn",
      {
        allow: ["warn", "error"],
      },
    ],
    "no-mixed-spaces-and-tabs": "off",
    "react/prefer-stateless-function": "warn",
    "react/self-closing-comp": [
      "warn",
      {
        component: true,
        html: true,
      },
    ],
    "react-hooks/exhaustive-deps": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "@typescript-eslint/no-empty-function": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
