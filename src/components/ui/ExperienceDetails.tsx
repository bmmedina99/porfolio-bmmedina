import React from 'react'
import { ChevronDown, ChevronUp } from '../icons/Iconbase'

export default function ExperienceDetails() {
  return (
    <>
      {/* Experience 1 */}
      <div className='bg-[#12042d]/60 border border-[#3f007d] rounded-lg p-4 my-2'>
        <div className='flex justify-between item-center'>
          <h3 className='text-lg font-semibold tracking-wide'>
            <span className='text-[#c084fc]'>Puesto</span> <span>&bull;</span>{' '}
            Empresa
          </h3>
          <ChevronUp />
        </div>
        <p className='text-sm text-[#cbd5e1]'>Fecha inicio - Presente</p>
      </div>
      <div className='bg-[#3f007d]/60 border border-[#12042d] rounded-lg max-h-[600px] overflow-hidden space-y-3 p-4'>
        <p>&rarr; Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>&rarr; Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>&rarr; Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='flex flex-wrap gap-2'>
          <span className='bg-[#12042d]/40 text-[#c084fc] text-sm font-medium px-2.5 py-1 rounded-full border border-[#7042f8]'>Lorem</span>
          <span className='bg-[#12042d]/40 text-[#c084fc] text-sm font-medium px-2.5 py-1 rounded-full border border-[#7042f8]'>Lorem</span>
          <span className='bg-[#12042d]/40 text-[#c084fc] text-sm font-medium px-2.5 py-1 rounded-full border border-[#7042f8]'>Lorem</span>
          <span className='bg-[#12042d]/40 text-[#c084fc] text-sm font-medium px-2.5 py-1 rounded-full border border-[#7042f8]'>Lorem</span>
          <span className='bg-[#12042d]/40 text-[#c084fc] text-sm font-medium px-2.5 py-1 rounded-full border border-[#7042f8]'>Lorem</span>
        </div>
        <p className='text-[#00ffaa]'>
          <span>🗺</span> Localicación
        </p>
        <p className='text-[#22d2f0]'>
          <span>🌐</span>{' '}
          <a
            href='#web'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://sitio-web.com
          </a>
        </p>
      </div>
      {/* Experience 2 */}
      <div className='bg-[#12042d]/60 border border-[#3f007d] rounded-lg p-4 my-2'>
        <div className='flex justify-between item-center'>
          <h3 className='text-lg font-semibold tracking-wide'>
            <span className='text-[#c084fc]'>Puesto</span> <span>&bull;</span>{' '}
            Empresa
          </h3>
          <ChevronUp />
        </div>
        <p className='text-sm text-[#cbd5e1]'>Fecha inicio - Presente</p>
      </div>
      {/* Experience 3 */}
      <div className='bg-[#12042d]/60 border border-[#3f007d] rounded-lg p-4 my-2'>
        <div className='flex justify-between item-center'>
          <h3 className='text-lg font-semibold tracking-wide'>
            <span className='text-[#c084fc]'>Puesto</span> <span>&bull;</span>{' '}
            Empresa
          </h3>
          <ChevronUp />
        </div>
        <p className='text-sm text-[#cbd5e1]'>Fecha inicio - Presente</p>
      </div>
    </>
  )
}
