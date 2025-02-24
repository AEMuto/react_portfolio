import type { Project, ProjectMetadata } from "./utils";
import type { Language } from "@contexts/LanguageContext";
import type { MDXContent } from "mdx/types.js";

type ProjectModule = { default: MDXContent; metadata: ProjectMetadata };
type ProjectsByLang = Record<Language, Record<number, Promise<Project>>>;

// Create a map to store loaded projects
const projectCache: ProjectsByLang = {
  en: {},
  fr: {}
};

// Import all MDX files lazily
const projectModules = import.meta.glob<ProjectModule>("./*/index.{en,fr}.mdx", {
  eager: false,
});

// Helper to load and cache a project
const loadProject = async (path: string, lang: Language): Promise<Project> => {
  try {
    const module = await projectModules[path]();
    const projectId = module.metadata.id;
    
    const project = {
      content: module.default,
      ...module.metadata,
    };

    // Cache the loaded project
    projectCache[lang][projectId] = Promise.resolve(project);
    
    return project;
  } catch (error) {
    // Log error for debugging but throw a user-friendly error
    console.error(`Failed to load project from path: ${path}`, error);
    throw new Error(`Failed to load project content. Please try again later.`);
  }
};

export const getProjectById = async (id: number, lang: Language): Promise<Project | null> => {
  try {
    // Return cached project if available
    const project = await projectCache?.[lang]?.[id];
    if (project) return project;

    // Find the correct path for this project
    const projectPath = Object.keys(projectModules).find(path => 
      path.includes(`/index.${lang}.mdx`)
    );

    if (!projectPath) {
      throw new Error(`Project not found: id=${id}, language=${lang}`);
    }

    return await loadProject(projectPath, lang); // Load and cache the project
  } catch (error) {
    console.error(`Failed to get project: id=${id}, language=${lang}`, error);
    return null;
  }
};

export const getAllProjects = async (lang: Language): Promise<Project[]> => {
  try {
    const paths = Object.keys(projectModules).filter(path => 
      path.includes(`/index.${lang}.mdx`)
    );

    const projects = await Promise.all(
      paths.map(path => loadProject(path, lang))
    );

    return projects.sort((a, b) => a.id - b.id);
  } catch (error) {
    console.error(`Failed to get all projects for language: ${lang}`, error);
    return [];
  }
};

export const getTotalProjects = (): number => {
  try {
    return Object.keys(projectModules)
      .filter(path => path.includes("/index.en.mdx")) // Assuming same number of projects for all languages
      .length;
  } catch (error) {
    console.error("Failed to get total number of projects", error);
    return 0;
  }
};