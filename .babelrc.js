const { NODE_ENV } = process.env;

module.exports = {
  presets: [
    [
      "@babel/env",
      {
        targets: { browsers: "ie >= 11" },
        modules: false,
        loose: true,
      },
    ],
    "@babel/typescript"
  ],
  plugins: [
    NODE_ENV === "test" && "@babel/plugin-transform-modules-commonjs",
  ].filter(Boolean),
};
