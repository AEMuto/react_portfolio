import { defineConfig } from "vite";
import * as path from "path";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import imageProcessor from "./plugins/imageProcessor";

export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        jsxImportSource: "@emotion/react",
        remarkPlugins: [
          [
            remarkGfm,
            {
              singleTilde: false, // Disable single ~ for strikethrough
              tablePipeAlign: true, // Enable table pipe alignment
              tableCellPadding: true, // Enable table cell padding
              strikethrough: true, // Enable strikethrough
              autolink: true, // Enable autolinking
              tagfilter: true, // Enable tagfilter
              tasklist: true, // Enable task lists
            },
          ],
        ],
      }),
    },
    react({
      jsxImportSource: "@emotion/react",
      jsxRuntime: "automatic",
      include: /\.(jsx|js|mdx|md|tsx|ts)$/,
    }),
    // Base image optimization
    ViteImageOptimizer({
      jpg: {
        quality: 85,
      },
      jpeg: {
        quality: 85,
      },
      png: {
        quality: 85,
        compressionLevel: 9,
      },
      webp: {
        quality: 85,
        lossless: false,
      },
    }),
    // Additional image processing for WebP/AVIF conversion and blur previews
    imageProcessor(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@views": path.resolve(__dirname, "./src/views"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@projects": path.resolve(__dirname, "./src/projects"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
    },
  },
});
