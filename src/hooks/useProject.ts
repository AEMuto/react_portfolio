import { useEffect, useState } from "react"
import { useLanguage } from "@contexts/LanguageContext"
import { getProjectById, getAllProjects } from "@/projects"
import type { Project } from "@projects/utils"

export const useProject = (id: number) => {
  const { language } = useLanguage()
  const [project, setProject] = useState<Project | null>(null)

  useEffect(() => {
    const current = getProjectById(id, language)
    // console.log("Hello from /src/hooks/useProject.ts", current)
    setProject(current || null)
  }, [id, language])

  return project
}

export const useAllProjects = () => {
  const { language } = useLanguage()
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    setProjects(getAllProjects(language))
  }, [language])

  return projects
}