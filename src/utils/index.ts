export const slugify = (text: string) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')

export const capitalLetter = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1)

export const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
