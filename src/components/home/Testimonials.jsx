import { useState } from 'react'
import SectionTitle from '../common/SectionTitle'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import { testimonialsData } from '../../data/testimonialsData'

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    )
  }
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    )
  }
  
  return (
    <section className="py-20 bg-neutral-900 text-white">
      <div className="container-custom">
        <SectionTitle 
          title="What Students Say " 
          subtitle="Read testimonials from students who have stayed with us."
          light={true}
        />
        
        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="bg-neutral-800 rounded-lg p-8 md:p-12 relative">
            <div className="absolute -top-5 left-8 text-primary text-4xl">
              <FaQuoteLeft />
            </div>
            
            <div className="mb-6">
              {[...Array(5)].map((_, i) => (
                <FaStar 
                  key={i} 
                  className={`inline-block mr-1 ${
                    i < testimonialsData[activeIndex].rating 
                      ? 'text-primary' 
                      : 'text-neutral-600'
                  }`} 
                />
              ))}
            </div>
            
            <p className="text-xl md:text-2xl mb-8 italic text-neutral-300">
             "{testimonialsData[activeIndex].text}"
            </p>
            
            <div className="flex items-center">
              {/* <img 
                src={testimonialsData[activeIndex].avatar} 
                alt={testimonialsData[activeIndex].name} 
                className="w-16 h-16 rounded-full object-cover mr-4"
              /> */}
              <div>
                <h4 className="font-semibold text-lg">{testimonialsData[activeIndex].name}</h4>
                <p className="text-neutral-400">{testimonialsData[activeIndex].location}</p>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-neutral-600 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-neutral-600 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-primary' : 'bg-neutral-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials