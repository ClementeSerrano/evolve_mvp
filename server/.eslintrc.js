module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: "eslint:recommended",
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  rules: {
    indent: ["error", "tab"],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"]
  }
};
