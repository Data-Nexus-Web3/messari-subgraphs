module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // Using the recommended typescript configurations
    "plugin:@typescript-eslint/recommended",

    // Prettier - last to override all other formatting rules
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint"],
  ignorePatterns: ["**/build", "**/generated"],
  rules: {
    // Give the power to the people! We decided to leave this decision up to the dev.
    "@typescript-eslint/no-inferrable-types": "off",

    // We utilize namespaces and this change seems to be a matter of preference. Off for now.
    "@typescript-eslint/no-namespace": "off",

    // We want to make sure to correct for this. It can be difficult to debug when errors arise from this assertion.
    "@typescript-eslint/no-non-null-assertion": "off",

    // Enforce for cleanliness
    "@typescript-eslint/no-unused-vars": "error",

    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          // un-ban BigInt - It must be getting confused with the native bigInt type
          BigInt: false,
        },
        extendDefaults: true,
      },
    ],
  },
};
