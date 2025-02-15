import { loadProjectImages, loadProjectThumbnail } from "@projects/utils";
import type { ProjectMetadata } from "@projects/utils";

export const metadata: ProjectMetadata = {
  id: 0,
  title: "D20Codex",
  thumbnail: loadProjectThumbnail("D20Codex"),
  gallery: loadProjectImages("D20Codex"),
  shortDesc: {
    fr: "Application web répertoriant les données de plusieurs systèmes de jeu de rôle.",
    en: "Web application listing data from several role-playing systems.",
  },
  tags: ["React", "Typescript", "Infinite Scroll", "Virtualization"],
  urls: {
    live: "https://d20codex.vercel.app/",
    github: null,
  },
};
