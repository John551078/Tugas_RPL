const globals = require("globals");

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: globals.node,
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
