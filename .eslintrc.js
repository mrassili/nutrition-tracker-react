module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:promise/recommended",
    "prettier",
    "prettier/react",
  ],
  plugins: ["react", "jsx-a11y", "import", "promise"],
  rules: {
    "no-console": "warn",

    // react plugin - options
    "react/prop-types": 0,
    "react/jsx-uses-vars": "error",
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8, // optional, recommended 6+
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
}
