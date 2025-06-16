import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ["**/node_modules/*", ".next/*", "out/*"],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // Enforce consistent React imports
      "react/react-in-jsx-scope": "off",
      // Enforce proper image alt texts for accessibility
      "jsx-a11y/img-redundant-alt": "error",
      // Enforce proper anchor tags
      "jsx-a11y/anchor-is-valid": "error",
      // Prevent unused variables
      "no-unused-vars": ["error", { 
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_" 
      }],
      // Enforce consistent spacing
      "indent": ["error", 2],
      // Enforce consistent quotes
      "quotes": ["error", "double"],
      // Enforce consistent semicolons
      "semi": ["error", "always"],
      // Enforce consistent component naming
      "react/jsx-pascal-case": "error",
      // Enforce consistent import ordering
      "import/order": ["error", {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always",
        "alphabetize": { "order": "asc" }
      }],
    },
  },
];

export default eslintConfig;
