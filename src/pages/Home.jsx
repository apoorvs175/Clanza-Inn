import Hero from '../components/home/Hero'
import AboutSection from '../components/home/AboutSection'
import FeaturedRooms from '../components/home/FeaturedRooms'
import Testimonials from '../components/home/Testimonials'
import FacilitiesSection from '../components/home/FacilitiesSection'
import CtaSection from '../components/home/CtaSection'

function Home() {
  // Update page title
  document.title = 'Clanza In | Modern Hostel Accommodation'
  
  return (
    <div>
      <Hero />
      <AboutSection />
      <FeaturedRooms />
      <FacilitiesSection />
      <Testimonials />
      <CtaSection />
    </div>
  )
}

export default Home