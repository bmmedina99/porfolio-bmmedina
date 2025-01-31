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
    title: 'Soporte CAU',
    company: 'Empresarios Agrupados',
    startDate: 'Mar. 2019',
    endDate: 'Ago. 2019',
    description: [
      'Resolución de problemas técnicos en equipos de usuarios y administración de inventarios de hardware/software mediante Lansweeper.',
      'Optimización de procesos, logrando reducir el tiempo de resolución de tareas críticas a la mitad de lo solicitado.',
      'Experiencia en gestión de actualizaciones y parches en red mediante WSUS, asegurando el correcto funcionamiento de los equipos.',
    ],
    technologies: [
      'WSUS',
      'Lansweeper',
      'Soporte técnico',
      'Optimización de procesos',
      'Comunicación técnica efectiva',
    ],
    details: [
      { text: 'Magallanes, Madrid' },
      {
        text: 'empresariosagrupados.es',
        link: 'https://www.empresariosagrupados.es',
      },
    ],
  },
  {
    id: 1,
    title: 'Programador Junior',
    company: 'Asociación de Mutuas y A.T. (AMAT)',
    startDate: 'Nov. 2021',
    endDate: 'Feb. 2022',
    description: [
      'Desarrollo de un programa en Python para extraer datos blob y convertirlos a formatos de archivo estándar (PNG, JPG, PDF).',
      'Automatización del proceso de transferencia de archivos al servidor mediante SFTP, mejorando significativamente la eficiencia operativa.',
      'Uso de bases de datos para la manipulación y extracción de datos, aplicando principios de programación robusta y eficiente.',
    ],
    technologies: [
      'Python',
      'Base de datos',
      'Automatización',
      'Optimización con SFTP',
      'Resolución de problemas técnicos',
    ],
    details: [
      { text: 'Nuevos Ministerios, Madrid' },
      { text: 'amat.es', link: 'https://www.amat.es' },
    ],
  },
  {
    id: 2,
    title: 'Desarrollador Web Freelance',
    company: 'Gray Gorilla Fitness',
    startDate: 'Dec. 2021',
    endDate: 'Oct. 2022',
    description: [
      'Desarrollé una página web personalizada para una compañía de accesorios de gimnasio que trabajaba con Amazon FBA.',
      'Implementé una interfaz clara y funcional para mostrar los productos, con redirección directa a Amazon para la compra, mejorando la experiencia del usuario.',
      'Colaboré con los propietarios para entender sus necesidades y proporcionar una solución ajustada a sus objetivos comerciales.',
    ],
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Posicionamiento SEO',
      'Resolución autónoma',
      'Integración con Amazon FBA',
    ],
    details: [
      { text: 'Remoto' },
      {
        text: 'graygorillafitness.com',
        link: '#',
      },
    ],
  },
  {
    id: 3,
    title: 'Operador de Sala',
    company: 'Izertis (Cliente: RSI)',
    startDate: 'Jul. 2022',
    endDate: 'Presente',
    description: [
      'Desarrollé una extensión para mejorar la eficiencia de una tarea específica del servicio, demostrando capacidad para identificar problemas y crear soluciones prácticas.',
      'Registro y análisis de incidencias en herramientas como BMC Remedy, contribuyendo a mejorar la base de conocimiento del equipo.',
      'Colaboración con diferentes departamentos, comunicando de manera clara y efectiva para resolver problemas críticos.',
    ],
    technologies: [
      'Control-M',
      'BMC Remedy',
      'Monitoreo de sistemas',
      'Toma de decisiones críticas',
      'Liderazgo en turno rotativo',
    ],
    details: [
      { text: 'Tres Cantos, Madrid' },
      { text: 'izertis.com', link: 'https://www.izertis.com/es/' },
    ],
  },
]
