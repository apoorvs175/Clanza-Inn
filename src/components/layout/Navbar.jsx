

import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes, FaWhatsapp, FaPhone } from 'react-icons/fa'
import Logo from '../common/Logo'

function Navbar({ scrolled = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)
  const closeMobileMenu = () => setMobileMenuOpen(false)

  const handleWhatsApp = () => {
    const message = "hello clanzaa In"
    const phoneNumber = "9810549852"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const handleCall = () => {
    window.location.href = 'tel:+9810549852'
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-nav py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="z-10">
            <Logo color={scrolled || mobileMenuOpen ? 'dark' : 'light'} />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex md:items-center md:space-x-8">
            {['/', '/rooms', '/gallery', '/contact', '/location'].map((path, index) => {
              const labels = ['Home', 'Rooms', 'Gallery', 'Contact', 'About Us']
              return (
                <li key={index}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `text-lg font-medium transition-colors duration-200 ${
                        isActive
                          ? 'text-primary'
                          : scrolled
                          ? 'text-neutral-800 hover:text-primary'
                          : 'text-white hover:text-primary-light'
                      }`
                    }
                  >
                    {labels[index]}
                  </NavLink>
                </li>
              )
            })}
          </ul>

          {/* Desktop buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <button
              onClick={handleWhatsApp}
              className="btn"
              style={{
                backgroundColor: '#25D366',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1ebe57')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#25D366')}
            >
              <FaWhatsapp className="mr-2" />
              WhatsApp
            </button>
            <button onClick={handleCall} className="btn btn-primary flex items-center">
              <FaPhone className="mr-2" />
              Call Now
            </button>
          </div>

          {/* Mobile WhatsApp + Hamburger */}
          <div className="flex items-center space-x-4 md:hidden z-10">
            <button
              onClick={handleWhatsApp}
              aria-label="WhatsApp"
              className="relative
                         text-white
                         p-3
                         rounded-full
                         text-2xl
                         shadow-lg
                         hover:bg-[#1ebe57]
                         transition-all
                         animate-glow
                         hover:scale-110
                         focus:outline-none"
              style={{ backgroundColor: '#25D366' }}
            >
              <FaWhatsapp />
            </button>

            <button
              type="button"
              className="text-2xl focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <FaTimes className="text-neutral-800" />
              ) : (
                <FaBars className={`${scrolled ? 'text-neutral-800' : 'text-white'}`} />
              )}
            </button>
          </div>

          {/* Mobile drawer menu */}
          <div
            className={`fixed inset-0 bg-white flex flex-col justify-center items-center transition-transform duration-300 ease-in-out transform ${
              mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } md:hidden`}
          >
            <ul className="flex flex-col items-center space-y-6">
              {['/', '/rooms', '/gallery', '/contact', '/location'].map((path, index) => {
                const labels = ['Home', 'Rooms', 'Gallery', 'Contact', 'About Us']
                return (
                  <li key={index}>
                    <NavLink
                      to={path}
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        `text-xl font-medium ${
                          isActive
                            ? 'text-primary'
                            : 'text-neutral-800 hover:text-primary'
                        }`
                      }
                    >
                      {labels[index]}
                    </NavLink>
                  </li>
                )
              })}

              <li className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={handleCall}
                  className="btn btn-primary flex items-center justify-center"
                >
                  <FaPhone className="mr-2" />
                  Call Now
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Glow animation keyframes */}
      <style>
        {`
          @keyframes glow {
            0%, 100% {
              box-shadow:
                0 0 6px 2px rgba(37, 211, 102, 0.6),
                0 0 12px 4px rgba(37, 211, 102, 0.4),
                0 0 18px 6px rgba(37, 211, 102, 0.2);
            }
            50% {
              box-shadow:
                0 0 12px 4px rgba(37, 211, 102, 0.8),
                0 0 24px 8px rgba(37, 211, 102, 0.6),
                0 0 36px 12px rgba(37, 211, 102, 0.3);
            }
          }
          .animate-glow {
            animation: glow 2.5s ease-in-out infinite;
          }
        `}
      </style>
    </header>
  )
}

export default Navbar
