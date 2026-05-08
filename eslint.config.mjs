import coreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**", "out/**", "coverage/**"],
  },
  ...coreWebVitals,
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-page-custom-font": "off",
      "@next/next/no-head-import-in-document": "off",
      "@next/next/no-duplicate-head": "off",
    },
  },
];

export default eslintConfig;
