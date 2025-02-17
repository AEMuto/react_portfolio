import { Plugin, OutputAsset } from "rollup";
import * as path from "path";
import sharp from "sharp";

// Configuration constants
const RESPONSIVE_WIDTHS = [320, 640, 960, 1280];
const IMAGE_QUALITY = 85;
const BLUR_PREVIEW = {
  size: 20,
  quality: 70
};

interface ImageProcessingOptions {
  quality?: number;
  formats?: ("webp" | "avif")[];
  sizes?: number[];
}

const imageProcessor = (options: ImageProcessingOptions = {}): Plugin => {
  const {
    quality = IMAGE_QUALITY,
    formats = ["webp", "avif"],
    sizes = RESPONSIVE_WIDTHS
  } = options;

  return {
    name: "image-processor",
    async writeBundle(outputOptions, bundle) {
      // Get all image assets from the bundle
      const images = Object.entries(bundle).filter((entry): entry is [string, OutputAsset] => {
        const [name, asset] = entry;
        return /\.(jpg|jpeg|png|webp)$/i.test(name) && asset.type === "asset";
      });

      for (const [fileName, asset] of images) {
        if (!("source" in asset)) continue;

        const buffer = asset.source;
        const outputDir = path.dirname(path.join(outputOptions.dir!, fileName));
        const baseName = path.basename(fileName, path.extname(fileName));
        const sharpInstance = sharp(buffer);
        const metadata = await sharpInstance.metadata();

        // Generate responsive sizes
        if (metadata.width) {
          // Only generate sizes smaller than the original
          const appropriateSizes = sizes.filter(w => metadata.width && w <= metadata.width);
          
          for (const width of appropriateSizes) {
            const resized = sharpInstance.resize(width, null, { fit: "inside" });
            
            // Generate each format for this size
            for (const format of formats) {
              await resized[format]({ quality })
                .toFile(path.join(outputDir, `${baseName}-${width}w.${format}`));
            }
          }

          // Generate original size in each format (if not already WebP/AVIF)
          for (const format of formats) {
            if (!fileName.endsWith(`.${format}`)) {
              await sharpInstance[format]({ quality })
                .toFile(path.join(outputDir, `${baseName}.${format}`));
            }
          }
        }

        // Generate blur preview
        await sharpInstance
          .resize(BLUR_PREVIEW.size, null, { fit: "inside" })
          .blur(10)
          .webp({ quality: BLUR_PREVIEW.quality })
          .toFile(path.join(outputDir, `${baseName}-blur.webp`));
      }
    }
  };
};

export default imageProcessor;