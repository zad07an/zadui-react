import { defineConfig } from "tsup";
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import fs from "fs/promises";

export default defineConfig({
  entry: ["ui/index.ts"],
  sourcemap: false,
  minify: true,
  dts: true,
  clean: true,
  external: ["react"],
  format: ["esm", "cjs"],
  splitting: false,
  bundle: true,
  outExtension({ format }) {
    return { js: format === "esm" ? ".mjs" : ".cjs" };
  },
  async onSuccess() {
    // Process TailwindCSS
    const css = await fs.readFile("ui/index.css", "utf-8");
    const result = await postcss([tailwindcss, autoprefixer]).process(css, {
      from: "ui/index.css",
      to: "dist/index.css",
    });
    await fs.writeFile("dist/index.css", result.css);
  },
});
