import { EXPERIENCES } from '@/constants'
import { useState } from 'react'
import { ChevronDown, ChevronUp, Location, Website } from '../icons/Iconbase'

export default function ExperienceDetails() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className='flex flex-grow flex-col space-y-4'>
      {EXPERIENCES.map((experience) => (
        <div key={experience.id}>
          <div
            key={experience.id}
            className='bg-[#12042d]/60 border border-[#3f007d] rounded-lg p-4 my-1'
          >
            <div className='flex justify-between item-center'>
              <h3 className='text-lg font-semibold tracking-wide'>
                <span className='text-[#c084fc]'>{experience.title}</span>{' '}
                &bull; {experience.company}
              </h3>
              {expanded ? (
                <ChevronDown title='Expandir' />
              ) : (
                <ChevronUp title='Contraer' />
              )}
            </div>
            <p className='text-sm text-[#cbd5e1]'>
              {experience.startDate} - {experience.endDate}
            </p>
          </div>
          <div className='bg-[#3f007d]/60 border border-[#12042d] rounded-lg max-h-[600px] overflow-hidden space-y-3 p-4'>
            <div>
              {experience.description.map((desc, index) => (
                <p key={`desc-${index + 1}`}>
                  <span className='text-xl text-[#c084fc]'>&rarr;</span> {desc}
                </p>
              ))}
            </div>
            <div className='flex items-center flex-wrap gap-2'>
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className='bg-[#12042d]/40 text-[#c084fc] text-sm font-medium px-2.5 py-1 rounded-full border border-[#7042f8]'
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className='flex items-center gap-2 text-[#00ffaa]'>
              <Location />
              {experience.location}
            </p>
            <p className='flex items-center gap-2 text-[#22d2f0]'>
              <Website />
              <a
                className='hover:text-[#c084fc] transition-colors duration-300'
                href={experience.website}
                target='_blank'
                rel='noopener noreferrer'
              >
                {experience.website}
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
