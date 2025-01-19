export const ChevronUp = ({ title }: { title: string }) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <title>{title}</title>
      <path
        stroke='none'
        d='M0 0h24v24H0z'
        fill='none'
      />
      <path d='M6 15l6 -6l6 6' />
    </svg>
  )
}

export const ChevronDown = ({ title }: { title: string }) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <title>{title}</title>
      <path
        stroke='none'
        d='M0 0h24v24H0z'
        fill='none'
      />
      <path d='M6 9l6 6l6 -6' />
    </svg>
  )
}

export const Menu = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <title>Menu</title>
      <path
        stroke='none'
        d='M0 0h24v24H0z'
        fill='none'
      />
      <path d='M4 6l16 0' />
      <path d='M4 12l16 0' />
      <path d='M4 18l16 0' />
    </svg>
  )
}

export const Close = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <title>Cerrar</title>
      <path
        stroke='none'
        d='M0 0h24v24H0z'
        fill='none'
      />
      <path d='M18 6l-12 12' />
      <path d='M6 6l12 12' />
    </svg>
  )
}

export const Location = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='currentColor'
    >
      <title>Ubicación</title>
      <path
        stroke='none'
        d='M0 0h24v24H0z'
        fill='none'
      />
      <path d='M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z' />
    </svg>
  )
}

export const Website = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <title>Sitio Web</title>
      <path
        stroke='none'
        d='M0 0h24v24H0z'
        fill='none'
      />
      <path d='M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4' />
      <path d='M11.5 3a16.989 16.989 0 0 0 -1.826 4' />
      <path d='M12.5 3a16.989 16.989 0 0 1 1.828 4' />
      <path d='M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4' />
      <path d='M11.5 21a16.989 16.989 0 0 1 -1.826 -4' />
      <path d='M12.5 21a16.989 16.989 0 0 0 1.828 -4' />
      <path d='M2 10l1 4l1.5 -4l1.5 4l1 -4' />
      <path d='M17 10l1 4l1.5 -4l1.5 4l1 -4' />
      <path d='M9.5 10l1 4l1.5 -4l1.5 4l1 -4' />
    </svg>
  )
}
