import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'ABOUT', href: '#' },
    { name: 'GAMES', href: '#' },
  ]

  return (
    <nav className='pointer-events-auto absolute top-0 right-0 z-50 flex w-full'>
      <div className='mx-8 mt-6 flex w-full items-center justify-between rounded-3xl bg-white/60 px-8 backdrop-blur-sm h-14 md:h-18 md:border-3 md:border-gray-800'>
        <div className='text-xl font-bold tracking-wider'></div>

        {/* 電腦版選單 */}
        <ul className='hidden space-x-8 md:flex'>
          {navLinks.map((link) => (
            <li key={link.name} className='transition-opacity hover:opacity-70'>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* 手機版漢堡按鈕 */}
        <button
          className='z-50 block p-2 md:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* 手機版全幅選單 */}
      {isMenuOpen && (
        <div className='fixed inset-0 z-100 flex h-screen w-screen flex-col items-center justify-center space-y-8 bg-black/60 text-2xl text-white backdrop-blur-md md:hidden'>
          <div className='absolute top-8 right-8'>
            <button onClick={() => setIsMenuOpen(false)}>
              <X size={32} />
            </button>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
