import { EXPERIENCES } from '@/constants'
import { useCallback, useState } from 'react'
import Icon from './Icon'

export default function ExperienceDetails() {
  const [expanded, setExpanded] = useState(EXPERIENCES.length - 1)

  const handleExpand = useCallback((id: number) => {
    setExpanded((prev) => (prev === id ? -1 : id))
  }, [])

  return (
    <div className='relative flex flex-col-reverse'>
      {EXPERIENCES.map((experience) => (
        <article
          key={experience.id}
          className='mb-4'
        >
          <header>
            <button
              type='button'
              id={`experience-header-${experience.id}`}
              className='w-full bg-[#12042d]/60 border border-[#3f007d] p-4 rounded-md focus:outline-none focus:right-2 focus:-ring-[#6347ff] transition-colors'
              onClick={() => handleExpand(experience.id)}
              aria-expanded={expanded === experience.id}
              aria-controls={`experience-detail-${experience.id}`}
            >
              <div className='flex items-center justify-between'>
                <div className='text-left'>
                  <h3 className='text-lg font-semibold tracking-wide'>
                    <span className='text-[#c084fc]'>{experience.title}</span>{' '}
                    &bull; {experience.company}
                  </h3>
                  <p className='text-sm tracking-wide'>
                    {experience.startDate} - {experience.endDate}
                  </p>
                </div>
                <span className='text-[#c084fc]'>
                  {expanded === experience.id ? (
                    <Icon name='menu-collapse' />
                  ) : (
                    <Icon name='menu-expand' />
                  )}
                </span>
              </div>
            </button>
          </header>
          <section
            id={`experience-detail-${experience.id}`}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${expanded === experience.id ? 'max-h-screen' : 'max-h-0'}`}
            aria-labelledby={`experience-header-${experience.id}`}
          >
            <div className='pt-4'>
              <div className='bg-[#3f007d]/60 border border-[#12042d] rounded-md p-4'>
                <ul className='pl-4 mb-4 list-disc'>
                  {experience.description.map((desc) => (
                    <li
                      key={desc}
                      className='text-[#cbd5e1] text-pretty'
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
                  <li>
                    <p className='flex items-center gap-2 text-[#00ffaa]'>
                      <Icon name='location' />
                      <span>{experience.location}</span>
                    </p>
                  </li>
                  {experience.website && (
                    <li>
                      <p className='flex items-center gap-2 text-[#22d2f0]'>
                        <Icon name='website' />
                        <a
                          href={experience.website.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='hover:underline'
                        >
                          {experience.website.text}
                        </a>
                      </p>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </section>
        </article>
      ))}
    </div>
  )
}
