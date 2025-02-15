import { loadProjectImages, loadProjectThumbnail } from "@projects/utils";
import type { ProjectMetadata } from "@projects/utils";

export const metadata: ProjectMetadata = {
  id: 2,
  title: "ArgentBank",
  thumbnail: loadProjectThumbnail("ArgentBank"),
  gallery: loadProjectImages("ArgentBank"),
  shortDesc: {
    fr: "Front-end d'une application web permettant la connexion, création et modification d'un utilisateur via l'usage d'un JWT.",
    en: "Web app front-end allowing user login, creation, and modification through the use of a JWT.",
  },
  tags: ["React", "Redux", "Typescript"],
  urls: {
    live: "https://argent-bank.vercel.app/",
    github: "https://github.com/AEMuto/AntoineMarseaud_13_16022022",
  },
};
