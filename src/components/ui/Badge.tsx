import React from 'react'

export const Badge = ({ items }: { items: string[] }) => {
  return (
    <ul className='flex flex-wrap gap-2 my-4'>
      {items.map((item) => (
        <li
          key={item}
          className='badge'
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
