import { Plugin, OutputAsset } from "rollup";
import * as path from "path";
import sharp from "sharp";

// Configuration constants
const RESPONSIVE_WIDTHS = [320, 640, 960, 1280];
const IMAGE_QUALITY = 85;
const BLUR_PREVIEW = {
  size: 20,
  quality: 70,
  blur: 10
};

interface ImageProcessingOptions {
  quality?: number;
  formats?: ("webp" | "avif" | "jpg" | "png")[];
  sizes?: number[];
}

const imageProcessor = (options: ImageProcessingOptions = {}): Plugin => {
  const {
    quality = IMAGE_QUALITY,
    formats = ["webp", "avif", "jpg"],
    sizes = RESPONSIVE_WIDTHS
  } = options;

  return {
    name: "image-processor",
    async writeBundle(outputOptions, bundle) {
      // Get all image assets from the bundle
      const images = Object.entries(bundle).filter((entry): entry is [string, OutputAsset] => {
        const [name, asset] = entry;
        return /\.(jpg|jpeg|png|webp|avif)$/i.test(name) && asset.type === "asset";
      });

      for (const [fileName, asset] of images) {
        if (!("source" in asset)) continue;

        const buffer = asset.source;
        const outputDir = path.dirname(path.join(outputOptions.dir!, fileName));
        const baseName = path.basename(fileName, path.extname(fileName));
        
        // Get source format, normalizing jpeg to jpg
        const sourceFormat = path.extname(fileName).toLowerCase().slice(1);
        const normalizedSourceFormat = sourceFormat === "jpeg" ? "jpg" : sourceFormat;
        
        const sharpInstance = sharp(buffer);
        const metadata = await sharpInstance.metadata();

        if (!metadata.width) continue; // Skip if no width

        // Process each format
        for (const format of formats) {
          const outputFormat = format === "jpg" ? "jpeg" : format;
          
          // Generate base format (skip if matches source format)
          if (format !== normalizedSourceFormat) {
            await sharpInstance[outputFormat]({ quality })
              .toFile(path.join(outputDir, `${baseName}.${format}`));
          }

          // Always generate blur preview and responsive sizes in all formats
          const blurInstance = sharpInstance
            .clone()
            .resize(BLUR_PREVIEW.size, null, { fit: "inside" })
            .blur(BLUR_PREVIEW.blur);
          
          await blurInstance[outputFormat]({ quality: BLUR_PREVIEW.quality })
            .toFile(path.join(outputDir, `${baseName}-blur.${format}`));

          // Generate responsive sizes
          for (const width of sizes.filter(w => w < metadata.width)) {
            const resizedInstance = sharpInstance
              .clone()
              .resize(width, null, { fit: "inside" });
              
            await resizedInstance[outputFormat]({ quality })
              .toFile(path.join(outputDir, `${baseName}-${width}w.${format}`));
          }
        }
      }
    }
  };
};

export default imageProcessor;