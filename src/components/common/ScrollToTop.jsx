import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])
  
  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-primary hover:bg-primary-dark text-white rounded-full p-3 shadow-lg transition-opacity duration-300 z-10 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  )
}

export default ScrollToTop