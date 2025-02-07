import { mkdir, writeFile, readdir } from "fs/promises";
import { join } from "path";
import { program } from "commander";

program
  .name("create-project")
  .description("Create new project directory structure")
  .argument("<name>", "project name")
  .action(async (name: string) => {
    try {
      const rootDir = process.cwd();
      const projectDir = join(rootDir, "src/projects", name);

      // Infer the project id from the total number of projects
      const totalProjects = await readdir(join(rootDir, "src/projects"))
        .then(files => files.filter(f => !f.includes(".")).length);
      const projectId = totalProjects;

      // Create project directories
      await mkdir(join(projectDir, "assets", "videos"), { recursive: true });
      await mkdir(join(projectDir, "assets", "images", "gallery"), { recursive: true });

      // Create index.mdx
      const mdxTemplate = `
import { loadProjectImages, loadProjectThumbnail } from "../utils"
import HorizontalGallery from "@/components/HorizontalGallery"
import Heading from "@/components/Heading"
import ExternalLink from "@/components/ExternalLink"
import ExternalLinksContainer from "@/components/ExternalLinksContainer"

export const metadata = {
  id: ${projectId},
  title: "${name}",
  thumbnail: loadProjectThumbnail("${name}"),
  shortDesc: "",
  tags: [],
  urls: {
    live: "",
    github: null
  },
  gallery: loadProjectImages("${name}")
}

<Heading size="xxl">{metadata.title}</Heading>

Écrire ici la description du projet

<HorizontalGallery imgArray={metadata.gallery} title={metadata.title} />

<ExternalLinksContainer>
  {metadata.urls.github && (
    <ExternalLink 
      href={metadata.urls.github} 
      title="Voir le code source sur Github" 
      target="_blank"
    >
      Github
    </ExternalLink>
  )}
  {metadata.urls.live && (
    <ExternalLink 
      href={metadata.urls.live} 
      title="Voir le projet en ligne" 
      target="_blank"
    >
      Voir le projet
    </ExternalLink>
  )}
</ExternalLinksContainer>

## Technologies utilisées

## Quel était le but&nbsp;?`;

      await writeFile(join(projectDir, "index.mdx"), mdxTemplate);

      console.log(`✓ Created project structure for "${name}"`);
      console.log("\nNext steps:");
      console.log("1. Add thumbnail.jpg to src/projects/${name}/assets/images/");
      console.log("2. Add gallery images to src/projects/${name}/assets/images/gallery/");
      console.log("3. Update project metadata in index.mdx");
      console.log("4. Write project description and content");
      
    } catch (error) {
      console.error("Error creating project:", error);
      process.exit(1);
    }
  });

program.parse();