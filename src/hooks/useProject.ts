import { useEffect, useState } from "react"
import { useLanguage } from "@contexts/LanguageContext"
import { getProjectById, getAllProjects } from "@/projects"
import type { Project } from "@projects/utils"

export const useProject = (id: number) => {
  const { language } = useLanguage()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true)
        const result = await getProjectById(id, language)
        setProject(result)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch project'))
      } finally {
        setLoading(false)
      }
    }

    fetchProject()
  }, [id, language])

  return { project, loading, error }
}

export const useAllProjects = () => {
  const { language } = useLanguage()
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)
        const results = await getAllProjects(language)
        setProjects(results)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch projects'))
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [language])

  return { projects, loading, error }
}