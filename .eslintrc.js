module.exports = {
  "env": {
      "browser": true,
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "project": "./tsconfig.json",
      "sourceType": "module",
  },
  "plugins": ["@typescript-eslint", "react-hooks"],
  "extends": [
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
  ],
  "rules": {
      "@typescript-eslint/restrict-plus-operands": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-member-accessibility": "off",
      "@typescript-eslint/no-parameter-properties": "off",
      "@typescript-eslint/no-unused-vars": [
          "error",
          { "ignoreRestSiblings": true },
      ],
      "@typescript-eslint/no-non-null-assertion": "off",
      "react/jsx-no-target-blank": "off",
      "react-hooks/rules-of-hooks": "error",
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "single"
      ],
  },
  "settings": {
      "react": {
          "version": "detect",
      },
  },
};