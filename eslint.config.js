// eslint.config.js
import globals from "globals";

export default [
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node, // Untuk kode Node.js (seperti 'module.exports' atau 'require')
        ...globals.jest, // Untuk kode Jest di file test
      }
    },
    rules: {
      // Tambahkan aturan linter dasar di sini
      "semi": ["error", "always"],
      "indent": ["error", 2],
      "no-unused-vars": "warn"
    }
  }
];