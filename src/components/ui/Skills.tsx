interface Props {
  name: string
  width?: number
  height?: number
}

const Skills = ({ name, width = 24, height = 24 }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      fill='none'
    >
      <use href={`svg/skills.svg#${name}`} />
    </svg>
  )
}

export default Skills
