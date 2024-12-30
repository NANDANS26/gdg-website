import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Bars3Icon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Community', href: '/community' },
  { name: 'Team', href: '/team' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Quiz', href: '/quiz' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 logo-container">
          <Link to="/" className="-m-1.5 p-1.5 group">
            <span className="sr-only">GDG PESCE</span>
            <img 
              className="h-8 w-auto transform group-hover:scale-105 transition-transform duration-200" 
              src="https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-goog/contentbuilder/logo_dark_QmPdj9K.svg" 
              alt="GDG Logo" 
              style={{ marginLeft: '-3.5rem' }}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              style={{ fontSize: '1rem', marginLeft: '1.6rem' }}
              className={`font-semibold leading-6 transition-all duration-200 ${
                location.pathname === item.href
                  ? 'text-gdg-blue dark:text-gdg-blue-400 scale-105'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gdg-blue dark:hover:text-gdg-blue-400'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            type="button"
            className="rounded-lg bg-gradient-to-r from-gdg-blue to-gdg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-gdg hover:shadow-gdg-lg transform hover:-translate-y-0.5 transition-all duration-200"
            style={{ marginLeft: '1.8rem' }}
          >
            Join GDG
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.href
                    ? 'text-gdg-blue dark:text-gdg-blue-400 bg-gdg-blue-50 dark:bg-gdg-blue-900/20'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gdg-blue dark:hover:text-gdg-blue-400'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <button
                type="button"
                className="w-full rounded-lg bg-gradient-to-r from-gdg-blue to-gdg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-gdg"
              >
                Join GDG
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}