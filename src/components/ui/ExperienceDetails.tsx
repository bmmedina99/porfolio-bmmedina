import { EXPERIENCES } from '@/constants'
import { useState } from 'react'
import Icon from './Icon'

export default function ExperienceDetails() {
  const [expanded, setExpanded] = useState(EXPERIENCES.length - 1)

  const handleExpand = (id: number) => setExpanded(expanded === id ? -1 : id)

  return (
    <div className='relative flex flex-col-reverse'>
      {EXPERIENCES.map((experience) => (
        <article key={experience.id}>
          <div
            className='w-full bg-[#12042d]/60 border border-[#3f007d] p-4 rounded-md select-none'
            onClick={() => handleExpand(experience.id)}
            onKeyDown={() => handleExpand(experience.id)}
          >
            <div className='flex items-center justify-between '>
              <div className='text-start'>
                <h2 className='text-lg font-semibold tracking-wide'>
                  <span className='text-[#c084fc]'>{experience.title}</span>{' '}
                  &bull; {experience.company}
                </h2>
                <p className='text-sm tracking-wide'>
                  {experience.startDate} - {experience.endDate}
                </p>
              </div>
              <button
                type='button'
                aria-label={`${expanded === experience.id ? 'Contraer' : 'Expandir'} ${experience.title}`}
                className='text-[#c084fc] cursor-pointer'
              >
                {expanded === experience.id ? (
                  <Icon name='menu-collapse' />
                ) : (
                  <Icon name='menu-expand' />
                )}
              </button>
            </div>
          </div>
          <div
            className={`${expanded === experience.id ? 'max-h-[600px]' : 'max-h-2.5'} overflow-hidden transition-[max-height] duration-300 ease-in-out`}
          >
            <div className='mx-[-20px] p-6'>
              <div className='bg-[#3f007d]/60 border border-[#12042d] rounded-md p-4'>
                <ul className='pl-4 mb-4 list-disc text-pretty'>
                  {experience.description.map((desc) => (
                    <li
                      key={desc}
                      className='text-[#cbd5e1]'
                    >
                      <p>{desc}</p>
                    </li>
                  ))}
                </ul>
                <ul className='flex flex-wrap gap-2 mb-4'>
                  {experience.technologies.map((tech) => (
                    <li
                      key={tech}
                      className='bg-[#12042d]/40 text-[#c084fc] text-sm font-medium px-2.5 py-1 rounded-xl border border-[#7042f8]'
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <ul className='flex flex-wrap gap-4'>
                  {experience.details.map((detail) => (
                    <li
                      key={detail.text}
                      className='flex items-center gap-2'
                    >
                      {detail.link ? (
                        <p className=' flex items-center gap-2 text-[#22d2f0]'>
                          <span>
                            <Icon name='website' />
                          </span>
                          <a
                            href={detail.link}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            {detail.text}
                          </a>
                        </p>
                      ) : (
                        <p className='flex items-center gap-2 text-[#00ffaa]'>
                          <span>
                            <Icon name='location' />
                          </span>
                          <span>{detail.text}</span>
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
