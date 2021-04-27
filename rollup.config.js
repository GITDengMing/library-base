import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

export default [
  // CommonJS
  {
    input: "src/index.js",
    output: { file: "lib/form-system.js", format: "cjs", indent: false },
    plugins: [
      babel({
        plugins: ["@babel/plugin-transform-runtime"],
        babelHelpers: "runtime",
      }),
    ],
  },

  // ES
  {
    input: "src/index.js",
    output: { file: "es/form-system.js", format: "es", indent: false },
    plugins: [
      babel({
        plugins: ["@babel/plugin-transform-runtime"],
        babelHelpers: "runtime",
      }),
    ],
  },

  // ES for Browsers
  {
    input: "src/index.js",
    output: {
      file: "es/form-system.mjs",
      format: "es",
      indent: false,
      plugins: [terser()],
    },
    plugins: [babel({ babelHelpers: "bundled", exclude: "node_modules/**" })],
  },

  // UMD Development
  {
    input: "src/index.js",
    output: {
      file: "dist/form-system.js",
      format: "umd",
      name: "form-system",
      indent: false,
    },
    plugins: [babel({ babelHelpers: "bundled", exclude: "node_modules/**" })],
  },
  // UMD Production
  {
    input: "src/index.js",
    output: {
      file: "dist/form-system.min.js",
      format: "umd",
      name: "form-system",
      indent: false,
      plugins: [terser()],
    },
    plugins: [babel({ babelHelpers: "bundled", exclude: "node_modules/**" })],
  },
];
