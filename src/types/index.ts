export interface Experience {
  id: number
  title: string
  company: string
  startDate: string
  endDate: string
  description: string[]
  technologies: string[]
  location: string
  website?: { text: string; link: string }
}

export interface Project {
  id: number
  image: ImageMetadata
  title: string
  description: string
  technologies: string[]
  type: string
  githubURL?: string
  demoURL?: string
}
