module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "next/core-web-vitals", "next"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],

            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        tsx: true,
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
    },
    plugins: ["react"],

    rules: {},
}
