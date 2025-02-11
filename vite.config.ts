import { defineConfig } from "vite"
import * as path from "path"
import react from "@vitejs/plugin-react"
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"
import sharp from "sharp"
import mdx from "@mdx-js/rollup"
import type { OutputAsset, Plugin } from "rollup"

// Custom plugin for additional image processing
const imageProcessor = (): Plugin => {
  return {
    name: "image-processor",
    async writeBundle(options, bundle) {
      // Get all image assets from the bundle
      const images = Object.entries(bundle).filter((entry): entry is [string, OutputAsset] => {
        const [name, asset] = entry
        return /\.(jpg|jpeg|png|webp)$/i.test(name) && asset.type === "asset"
      })

      for (const [fileName, asset] of images) {
        if ("source" in asset) {
          const buffer = asset.source
          const outputDir = path.dirname(path.join(options.dir, fileName))
          const baseName = path.basename(fileName, path.extname(fileName))

          // Generate WebP version (if not already WebP)
          if (!fileName.endsWith(".webp")) {
            await sharp(buffer)
              .webp({ quality: 85 })
              .toFile(path.join(outputDir, `${baseName}.webp`))
          }

          // Generate AVIF version (if not already AVIF)
          if (!fileName.endsWith(".avif")) {
            await sharp(buffer)
              .avif({ quality: 85 })
              .toFile(path.join(outputDir, `${baseName}.avif`))
          }
          // Generate blur preview
          await sharp(buffer)
            .resize(20, null, { fit: "inside" })
            .blur(10)
            .webp({ quality: 70 })
            .toFile(path.join(outputDir, `${baseName}-blur.webp`))
        }
      }
    }
  }
}

export default defineConfig({
  plugins: [
    {enforce: "pre", ...mdx({
      jsxImportSource: "@emotion/react",
    })},
    react({
      jsxImportSource: "@emotion/react",
      jsxRuntime: "automatic",
      include: /\.(jsx|js|mdx|md|tsx|ts)$/
    }),
    // Custom plugin to load markdown files
    {
      name: "markdown-loader",
      transform(code, id) {
        if (id.slice(-3) === ".md") {
          return `export default ${JSON.stringify(code)};`
        }
      },
    },
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
    imageProcessor()
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
})