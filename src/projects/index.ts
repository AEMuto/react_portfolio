import type { Project, ProjectMetadata } from "./utils";
import type { Language } from "@contexts/LanguageContext";
import type { MDXContent } from "mdx/types.js";

type ProjectModule = { default: MDXContent; metadata: ProjectMetadata };
type ProjectsByLang = Record<Language, Record<number, Project>>;

// Import all MDX files from project directories
const projectsMDX = import.meta.glob<ProjectModule>("./*/index.{en,fr}.mdx", {
  eager: true,
});

const projectsByLang = Object.entries(projectsMDX).reduce<ProjectsByLang>(
  (acc, [path, module]) => {
    const [projectName, lang] = path.match(/\.\/([^/]+)\/index\.([^.]+)\.mdx$/)?.slice(1) || [];
    if (!projectName || (lang !== "en" && lang !== "fr")) return acc;
    const projectId = module.metadata.id;
    acc[lang][projectId] = {
      content: module.default,
      ...module.metadata,
    };
    return acc;
  },
  { en: {}, fr: {} }
);

// Export functions that take language as parameter
export const getProjectById = (id: number, lang: Language) => projectsByLang[lang][id];

export const getAllProjects = (lang: Language) =>
  Object.values(projectsByLang[lang]).sort((a, b) => a.id - b.id);

export const getProjectsMetadata = (lang: Language) =>
  getAllProjects(lang).map(({ id, title, thumbnail, shortDesc, tags, urls }) => ({
    id,
    title,
    thumbnail,
    shortDesc,
    tags,
    urls,
  }));

export const getTotalProjects = () => Object.keys(projectsByLang.en).length; // Assuming same number in both languages

// Export projectsByLang for direct access if needed
export default projectsByLang;
