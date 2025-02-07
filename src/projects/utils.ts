import type { ComponentType } from "react"

export type ProjectImage = {
  src: string
  alt: string
  width?: number
  height?: number
}

export type ProjectMetadata = {
  id: number
  title: string
  thumbnail: ProjectImage
  shortDesc: string
  tags: string[]
  urls: {
    live: string | null
    github: string | null
  }
  gallery: ProjectImage[]
}

export type Project = ProjectMetadata & {
  Content: ComponentType
}

export const loadProjectImages = (projectName: string) => {
  const images = import.meta.glob("/src/projects/*/assets/images/gallery/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default"
  })

  // Filter images for this specific project
  const projectImages = Object.entries(images)
    .filter(([path]) => path.includes(`/${projectName}/`))
    .map(([path, src]) => ({
      src: src as string,
      alt: path.split("/").pop()?.split(".")[0] || "Project image",
    }))

  return projectImages
}

export const loadProjectThumbnail = (projectName: string) => {
  const thumbnails = import.meta.glob("/src/projects/*/assets/images/thumbnail.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default"
  })

  const thumbnailEntry = Object.entries(thumbnails)
    .find(([path]) => path.includes(`/${projectName}/`))

  if (!thumbnailEntry) {
    throw new Error(`No thumbnail found for project ${projectName}`)
  }

  return {
    src: thumbnailEntry[1] as string,
    alt: `${projectName} thumbnail`
  }
}