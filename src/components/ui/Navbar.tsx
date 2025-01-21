import { NAV_ITEMS } from '@/constants'
import { capitalLetter, scrollToTop, slugify } from '@/utils'
import { useEffect, useRef, useState } from 'react'
import { ChevronUp, Close, Menu } from '../icons/Iconbase'

export default function Navbar() {
  const [initialOffsetTop, setInitialOffsetTop] = useState<number | null>(null)
  const [isShowScrollTop, setIsShowScrollTop] = useState(false)
  const [isNavbarFixed, setIsNavbarFixed] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [active, setActive] = useState('home')
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const navTop = navRef.current?.offsetTop ?? 0

      if (!initialOffsetTop) setInitialOffsetTop(navTop)

      setIsMenuOpen(false)
      setIsNavbarFixed(window.scrollY >= (initialOffsetTop || 0))

      let currentActiveSection = 'home'
      for (const item of NAV_ITEMS) {
        const section = document.querySelector(`#${slugify(item.label)}`)
        const sectionScrollPosition = section
          ? window.scrollY + section.getBoundingClientRect().top
          : 0

        if (sectionScrollPosition >= sectionScrollPosition - 65)
          currentActiveSection = item.label

        setActive(currentActiveSection)
        setIsShowScrollTop(window.scrollY > window.innerHeight - 65)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [initialOffsetTop])

  return (
    <nav
      ref={navRef}
      className={`flex items-center w-full h-[65px] select-none z-50 ${isNavbarFixed ? 'fixed top-0 right-0 w-full' : 'relative'}`}
    >
      <div className='max-w-7xl mx-auto flex justify-center items-center backdrop-blur-md rounded-full px-8 py-4 bg-[#030014]/60 shadow-lg shadow-[#2a0e61]/60 border border-[#7042f8]/40'>
        <ul className='hidden md:flex gap-8'>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${slugify(item.label)}`}
                className={`flex items-center gap-2 hover:text-[#22d2f0] transition-colors ${active === item.label ? 'text-[#22d2f0]' : 'text-[#f6f6f6]'}`}
              >
                <span className='text-sm opacity-50'>&lt;</span>
                <span className='text-lg'>{capitalLetter(item.label)}</span>
                <span className='text-sm opacity-50'>/&gt;</span>
              </a>
            </li>
          ))}
        </ul>
        <button
          type='button'
          className='md:hidden text-[#22d2f0]'
          onClick={() => setIsMenuOpen(true)}
          aria-label='Abrir menu'
        >
          <Menu />
        </button>
      </div>
      <div
        className={`md:hidden fixed top-0 right-0 w-64 h-full bg-[#030014]/60 backdrop-blur-md shadow-lg shadow-[#2a0e61]/60 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
          type='button'
          className='text-[#22d2f0] p-4'
          onClick={() => setIsMenuOpen(false)}
          aria-label='Cerrar menu'
        >
          <Close />
        </button>
        <ul className='flex flex-col gap-4 p-4'>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${slugify(item.label)}`}
                className={`flex items-center gap-2 hover:text-[#22d2f0] transition-colors ${active === item.label ? 'text-[#22d2f0]' : 'text-[#f6f6f6]'}`}
              >
                <span className='text-lg'>
                  {capitalLetter(slugify(item.label))}.tsx
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <button
        type='button'
        className={`fixed bottom-6 right-6 text-[#22d2f0] border border-[#22d2f0] shadow-lg shadow-[#22d2f0]/50 rounded-full p-3 transition-opacity duration-300 z-20 ${isShowScrollTop ? 'visible opacity-100' : 'invisible opacity-0'}`}
        onClick={scrollToTop}
      >
        <ChevronUp title='Ir a experiencia' />
      </button>
    </nav>
  )
}
