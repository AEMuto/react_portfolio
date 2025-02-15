import { loadProjectImages, loadProjectThumbnail } from "@projects/utils";
import type { ProjectMetadata } from "@projects/utils";

export const metadata: ProjectMetadata = {
  id: 1,
  title: "FishEye",
  thumbnail: loadProjectThumbnail("FishEye"),
  gallery: loadProjectImages("FishEye"),
  shortDesc: {
    en: "An accessible platform allowing photographers to showcase their work.",
    fr: "Une plateforme accessible permettant à des photographes de présenter leurs travaux.",
  },
  tags: ["Javascript", "OOP", "Factory Pattern", "WCAG"],

  urls: {
    live: "https://aemuto.github.io/AntoineMarseaud_6_10082021/",
    github: "https://github.com/AEMuto/AntoineMarseaud_6_10082021",
  },
};
