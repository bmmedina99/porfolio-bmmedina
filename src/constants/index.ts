import type { Experience } from '@/types'

export const NAV_ITEMS = [
  { id: '01', label: 'experiencia' },
  { id: '02', label: 'proyectos' },
  { id: '03', label: 'sobre mí' },
  { id: '04', label: 'contacto' },
]

export const EXPERIENCES: Experience[] = [
  {
    id: 0,
    title: 'Puesto',
    company: 'Empresa',
    startDate: 'Fecha inicio',
    endDate: 'Presente',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      'Lorem ipsum dolor sit amet, consectetur',
    ],
    details: [
      { text: 'Calle Localicación' },
      { text: 'sitio-web.com', link: 'https://sitio-web.com' },
    ],
    technologies: ['Lorem', 'Ipsum', 'Dolor'],
  },
  {
    id: 1,
    title: 'Puesto',
    company: 'Empresa',
    startDate: 'Fecha inicio',
    endDate: 'Fecha fin',
    description: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet, co',
      'Lorem ipsum dolor sit amet, consecte',
      'Lorem ipsum dolor sit amet, consec',
      'Lorem ipsum dolor sit amet, conse.',
      'Lorem ipsum dolor sit amet, conse elit.',
      'Lorem ipsum dolor sit amet, con elit.',
      'Lorem ipsum dolor sit .',
    ],
    details: [
      { text: 'Calle Localicación' },
      { text: 'sitio-web.com', link: 'https://sitio-web.com' },
    ],
    technologies: ['Lorem', 'Ipsum', 'Dolor'],
  },
  {
    id: 2,
    title: 'Puesto',
    company: 'Empresa',
    startDate: 'Fecha inicio',
    endDate: 'Fecha fin',
    description: [
      'Lorem ipsum dolo.',
      'Lorem ipsum dolor sit amet, consecng elit.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    ],
    details: [
      { text: 'Calle Localicación' },
      { text: 'sitio-web.com', link: 'https://sitio-web.com' },
    ],
    technologies: ['Lorem', 'Ipsum', 'Dolor'],
  },
  {
    id: 3,
    title: 'Puesto',
    company: 'Empresa',
    startDate: 'Fecha inicio',
    endDate: 'Fecha fin',
    description: [
      'Lorem ipsum dolor sit amedipisicing elit.',
      'Lorem ipsum dolortur adipisicing elit.',
      'Lorem ipsum dur adipisicing elit.',
    ],
    details: [
      { text: 'Calle Localicación' },
      { text: 'sitio-web.com', link: 'https://sitio-web.com' },
    ],
    technologies: ['Lorem', 'Ipsum', 'Dolor'],
  },
]
