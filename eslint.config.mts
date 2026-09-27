import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import playwright from "eslint-plugin-playwright";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
  globals: { ...globals.browser, ...globals.node },
  parserOptions: {
    projectService: true,
    allowDefaultProject: ["eslint.config.mts"],
  },
},
  },
  tseslint.configs.recommendedTypeChecked,
  {
  ...playwright.configs["flat/recommended"],
  files: ["tests/**/*.ts"],
},
  {
  rules: {
    "@typescript-eslint/no-floating-promises": "error",
  },
},
]);