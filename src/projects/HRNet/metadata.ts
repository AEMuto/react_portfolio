import { loadProjectImages, loadProjectThumbnail } from "@projects/utils";
import type { ProjectMetadata } from "@projects/utils";

export const metadata: ProjectMetadata = {
  id: 3,
  title: "HRNet",
  thumbnail: loadProjectThumbnail("HRNet"),
  gallery: loadProjectImages("HRNet"),
  shortDesc: {
    en: "Company CRM allowing to manage the creation and follow-up of its employee profiles.",
    fr: "CRM d'une entreprise permettant de gérer la création et le suivi de ses profils employés."
  },
  tags: ["React", "Redux", "Typescript", "Storybook"],
  urls: {
    live: "https://antoine-marseaud-hrnet-app.vercel.app/",
    github: "https://github.com/AEMuto/AntoineMarseaud_14_HRnet_Application_23032022",
  },
};
