import SectionTitle from '../common/SectionTitle'

function AboutSection() {
  return (
    <section className="py-20 bg-neutral-100">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/7114129/pexels-photo-7114129.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Clanza In Hostel Common Area" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary rounded-lg p-6 shadow-lg hidden md:block">
              <p className="text-white text-2xl font-bold">10+</p>
              <p className="text-white text-sm">Years of Experience</p>
            </div>
          </div>
          
          <div>
            <SectionTitle 
              title="Welcome to Clanza In" 
              subtitle="A modern hostel experience redesigned for today's travelers"
              center={false}
            />
            
            <p className="text-neutral-700 mb-6">
              At Clanza In, we believe that travel should be accessible, comfortable, and community-oriented. Our thoughtfully designed spaces combine the social atmosphere of a hostel with the comfort and amenities you'd expect from upscale accommodations.
            </p>
            
            <p className="text-neutral-700 mb-8">
              Whether you're a solo adventurer, digital nomad, or traveling with friends, our centrally located hostel provides the perfect base for exploring the city while meeting fellow travelers from around the world.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-secondary rounded-full p-2 mr-4 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Central Location</h4>
                  <p className="text-neutral-600">In the heart of Greater Noida Near Sharda University Gate-5, close to all attractions</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary rounded-full p-2 mr-4 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Free Wi-Fi</h4>
                  <p className="text-neutral-600">High-speed internet throughout the property</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary rounded-full p-2 mr-4 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">24/7 Reception</h4>
                  <p className="text-neutral-600">Staff available around the clock for your needs</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary rounded-full p-2 mr-4 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Community Events</h4>
                  <p className="text-neutral-600">Regular social activities to meet fellow travelers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection