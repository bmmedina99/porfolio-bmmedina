import React from 'react'
import { ChevronDown, ChevronUp } from '../icons/Iconbase'

export default function ExperienceDetails() {
  return (
    <>
      {/* Experience 1 */}
      <div className='bg-[#12042d]/60 border border-[#3f007d] rounded-lg p-4 mb-2'>
        <div className='flex justify-between item-center'>
          <h3 className='text-lg font-semibold tracking-wide'>
            <span className='text-[#c6b8e1]'>Puesto</span> <span>&rarr;</span>{' '}
            Empresa
          </h3>
          <ChevronUp />
        </div>
        <p className='text-sm text-[#cbd5e1]'>Fecha inicio - Presente</p>
      </div>
      <div className='bg-[#3f007d]/60 border border-[#12042d] rounded-lg max-h-[600px] overflow-hidden space-y-3 p-4 mb-2'>
        <div>
          <p>&bull; Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>&bull; Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>&bull; Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
          <span>Lorem</span>
          <span>Lorem</span>
          <span>Lorem</span>
          <span>Lorem</span>
          <span>Lorem</span>
        </div>
        <p>
          <span>🗺</span> Localicación
        </p>
        <p>
          <span>🌐</span>{' '}
          <a
            href='#web'
            target='_blank'
            rel='noopener noreferrer'
          >
            Sitio web
          </a>
        </p>
      </div>
      {/* Experience 2 */}
      <div className='bg-[#12042d]/60 border border-[#3f007d] rounded-lg p-4 mb-2'>
        <div className='flex justify-between item-center'>
          <h3 className='text-lg font-semibold tracking-wide'>
            <span className='text-[#c6b8e1]'>Puesto</span> <span>&rarr;</span>{' '}
            Empresa
          </h3>
          <ChevronDown />
        </div>
        <p className='text-sm text-[#cbd5e1]'>Fecha inicio - Fecha fin</p>
      </div>
      {/* Experience 3 */}
      <div className='bg-[#12042d]/60 border border-[#3f007d] rounded-lg p-4 mb-2'>
        <div className='flex justify-between item-center'>
          <h3 className='text-lg font-semibold tracking-wide'>
            <span className='text-[#c6b8e1]'>Puesto</span> <span>&rarr;</span>{' '}
            Empresa
          </h3>
          <ChevronDown />
        </div>
        <p className='text-sm text-[#cbd5e1]'>Fecha inicio - Fecha fin</p>
      </div>
    </>
  )
}
