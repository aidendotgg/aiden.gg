import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

const eslintConfig = defineConfig([
    globalIgnores(["build/**", "node_modules/**", ".react-router/**"]),
    {
        files: ["**/*.{js,mjs,cjs,ts,tsx}"],
        extends: [js.configs.recommended, tseslint.configs.recommended, reactHooks.configs.flat.recommended, prettier],
        plugins: {
            prettier: prettierPlugin,
        },
        rules: {
            "prettier/prettier": "error",
            "react-hooks/exhaustive-deps": "off",
            "react-hooks/set-state-in-effect": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/ban-ts-comment": "off",
            "@typescript-eslint/no-unused-expressions": "off",
        },
    },
]);

export default eslintConfig;
