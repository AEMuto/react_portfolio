import { mkdir, writeFile, readdir, stat } from "fs/promises";
import { join } from "path";
import { program } from "commander";

// Helper function to check if a path is a directory
async function isDirectory(path: string): Promise<boolean> {
  try {
    const stats = await stat(path);
    return stats.isDirectory();
  } catch (error) {
    // If stat fails (e.g., file doesn't exist), it's not a directory
    return false;
  }
}

program
  .name("create-project")
  .description("Create new project directory structure with metadata and MDX files for en/fr")
  .argument("<name>", "project name (use PascalCase, e.g., MyNewProject)")
  .action(async (name: string) => {
    try {
      const rootDir = process.cwd();
      const projectsBaseDir = join(rootDir, "src/projects");
      const projectDir = join(projectsBaseDir, name);

      // --- Calculate Project ID ---
      const projectDirs = await readdir(projectsBaseDir);
      let projectCount = 0;
      for (const dirName of projectDirs) {
        if (await isDirectory(join(projectsBaseDir, dirName))) {
          projectCount++;
        }
      }
      const projectId = projectCount; // Assign the next available ID

      // --- Create Directories ---
      await mkdir(join(projectDir, "assets", "images", "gallery"), { recursive: true });
      // Removed video directory creation as it doesn't seem used based on current projects
      // await mkdir(join(projectDir, "assets", "videos"), { recursive: true });

      // --- Create metadata.ts ---
      const metadataTemplate = `import { loadProjectImages, loadProjectThumbnail } from "@projects/utils";
import type { ProjectMetadata } from "@projects/utils";

export const metadata: ProjectMetadata = {
  id: ${projectId},
  title: "${name}",
  thumbnail: loadProjectThumbnail("${name}"),
  gallery: loadProjectImages("${name}"),
  shortDesc: {
    en: "English short description here.",
    fr: "Description courte en français ici."
  },
  tags: ["Tag1", "Tag2"],
  urls: {
    live: null, // Add live URL or keep null
    github: null // Add GitHub URL or keep null
  },
};
`;
      await writeFile(join(projectDir, "metadata.ts"), metadataTemplate);

      // --- Create index.en.mdx ---
      const mdxEnTemplate = `import HorizontalGallery from "@/components/HorizontalGallery";
import ProjectExternalLinks from "@/components/ProjectExternalLinks";
import { metadata } from './metadata'
export { metadata }

# {metadata.title}

<HorizontalGallery images={metadata.gallery} title={metadata.title} />

<ProjectExternalLinks urls={metadata.urls} />

Write the English project description here. Explain the project's purpose, key features, and challenges.

## Technologies Used

- List technologies used (e.g., React, TypeScript)

## What Was the Goal?

Describe the project's objectives and what you learned.
`;
      await writeFile(join(projectDir, "index.en.mdx"), mdxEnTemplate);

      // --- Create index.fr.mdx ---
      const mdxFrTemplate = `import HorizontalGallery from "@/components/HorizontalGallery";
import ProjectExternalLinks from "@/components/ProjectExternalLinks";
import { metadata } from './metadata'
export { metadata }

# {metadata.title}

<HorizontalGallery images={metadata.gallery} title={metadata.title} />

<ProjectExternalLinks urls={metadata.urls} />

Écrire ici la description du projet en français. Expliquer le but du projet, ses fonctionnalités clés et les défis rencontrés.

## Technologies Utilisées

- Lister les technologies utilisées (ex: React, TypeScript)

## Quel était le but&nbsp;?

Décrire ici les objectifs du projet et ce que vous avez appris.
`;
      await writeFile(join(projectDir, "index.fr.mdx"), mdxFrTemplate);

      // --- Log Success and Next Steps ---
      console.log(`✓ Created project structure for "${name}" with ID ${projectId}`);
      console.log("\nNext steps:");
      console.log(`1. Add thumbnail image (e.g., thumbnail.jpg) to src/projects/${name}/assets/images/`);
      console.log(`2. Add gallery images to src/projects/${name}/assets/images/gallery/`);
      console.log(`3. Update project details in src/projects/${name}/metadata.ts (shortDesc, tags, urls)`);
      console.log(`4. Write project content in src/projects/${name}/index.en.mdx`);
      console.log(`5. Write project content in src/projects/${name}/index.fr.mdx`);
      console.log(`6. Update the sitemap (public/sitemap.xml) with the new project route: /project/${projectId}`);

    } catch (error) {
      console.error("Error creating project:", error);
      process.exit(1);
    }
  });

program.parse();