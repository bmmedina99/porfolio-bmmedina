interface Props {
  name: string
  width?: number
  height?: number
}

const Icon = ({ name, width = 24, height = 24 }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <use href={`assets/svg/icons.svg#${name}`} />
    </svg>
  )
}

export default Icon
