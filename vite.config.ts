import { execSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    dts({ tsconfigPath: "./tsconfig.app.json", rollupTypes: true }),
    {
      name: "yalc-push-after-build",
      closeBundle() {
        console.log("Build completed. Running yalc push...");
        try {
          execSync("yalc push", { stdio: "inherit" });
        } catch (error) {
          console.error("Failed to run yalc push:", error);
        }
      },
    },
  ],

  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "MyLib",
      // 適切な拡張子が追加されます
      fileName: "my-lib",
    },
    rollupOptions: {
      // ライブラリーにバンドルされるべきではない依存関係を
      // 外部化するようにします
      external: ["vue"],
      output: {
        // 外部化された依存関係のために UMD のビルドで使用する
        // グローバル変数を提供します
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
