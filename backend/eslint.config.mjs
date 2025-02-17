export default [
    {
      ignores: ["dist"],
    },
    {
      files: ["src/**/*.ts"],
      languageOptions: {
        parserOptions: {
          project: true,
        },
      },
      rules: {
        "no-unused-vars": "warn",
        "no-console": "off",
      },
    },
  ];