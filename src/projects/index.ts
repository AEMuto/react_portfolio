import type { Project, ProjectMetadata } from './utils'

// Import all MDX files from project directories
const projectModules = import.meta.glob<{
  default: React.ComponentType
  metadata: ProjectMetadata
}>('./*/index.mdx', { eager: true })

// Convert the record of modules into an array of projects
const projects: Project[] = Object.entries(projectModules)
  .map(([path, module]) => {
    // Extract project name from path (e.g., './project0/index.mdx' -> 'project0')
    const projectName = path.split('/')[1]

    return {
      ...module.metadata,
      Content: module.default
    }
  })
  // Sort by ID to maintain order
  .sort((a, b) => a.id - b.id)

// Export individual aspects for flexibility
export const getProjectById = (id: number) =>
  projects.find(project => project.id === id)

export const getAllProjects = () => projects

export const getProjectsMetadata = () =>
  projects.map(({ Content, ...metadata }) => metadata)

export const getTotalProjects = () => projects.length

// Default export for convenience
export default projects