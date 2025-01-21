export interface Experience {
  id: number
  title: string
  company: string
  startDate: string
  endDate: string
  description: string[]
  details: { text: string; link?: string }[]
  technologies: string[]
}
