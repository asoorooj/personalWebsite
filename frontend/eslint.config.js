import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
  // Modern global ignores helper
  globalIgnores(["dist"]),

  // 1. Pass your shared extensions cleanly at the array level
  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactHooks.configs.flat.recommended, // Spreading the array is standard for modern flat config
  reactRefresh.configs.vite,

  // 2. Custom configuration overrides for your project files
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "@stylistic": stylistic
    },
    rules: {
      // warn on unused variables
      "@typescript-eslint/no-unused-vars": "warn",

      // warn if no semicolon
      "semi": ["warn", "always"],

      // warn if not double quotes
      "quotes": "off",
      "@stylistic/quotes": ["warn", "double",
        {
          avoidEscape: true,           // allow single quotes to avoid escaping double quotes
          allowTemplateLiterals: false // only allow backticks when needed (interpolation)
        }
      ],
      "@stylistic/jsx-quotes": ["warn", "prefer-double"],
      "no-empty": "off",
      "prefer-const": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/preserve-manual-memoization": "warn",
    },
  },
]);
