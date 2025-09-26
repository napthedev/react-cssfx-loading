import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  format: ["esm"],
  dts: true,
  clean: true,
  sourcemap: true,
  minify: true,
  external: ["react", "react-dom"],
  treeshake: true,
  splitting: false,
  bundle: true,
});
