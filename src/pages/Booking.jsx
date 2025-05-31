import SectionTitle from '../components/common/SectionTitle'
import BookingForm from '../components/booking/BookingForm'
import BookingInfo from '../components/booking/BookingInfo'

function Booking() {
  // Update page title
  document.title = 'Book Your Stay | Clanza In Hostel'
  
  return (
    <div>
      {/* Header */}
      <div 
        className="relative py-24 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600')" 
        }}
      >
        <div className="absolute inset-0 bg-neutral-900 bg-opacity-70"></div>
        <div className="container-custom relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Book Your Stay
            </h1>
            <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Reserve your perfect accommodation at Clanza In
            </p>
          </div>
        </div>
      </div>
      
      {/* Booking Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container-custom">
          <SectionTitle 
            title="Make Your Reservation" 
            subtitle="Fill out the form below to book your stay with us"
          />
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <BookingForm />
            </div>
            
            <div className="md:col-span-1">
              <BookingInfo />
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Book With Us */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Why Book Directly With Us" 
            subtitle="Enjoy these exclusive benefits when booking on our website"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-neutral-200 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Best Price Guarantee</h3>
              <p className="text-neutral-600">
                We promise you'll get the lowest price when booking directly through our website. Found a better rate elsewhere? We'll match it!
              </p>
            </div>
            
            <div className="p-6 border border-neutral-200 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Flexible Cancellation</h3>
              <p className="text-neutral-600">
                Plans change! Enjoy free cancellation up to 48 hours before check-in when you book directly with us.
              </p>
            </div>
            
            <div className="p-6 border border-neutral-200 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Special Perks</h3>
              <p className="text-neutral-600">
                Direct bookings receive exclusive perks like welcome drinks, late checkout options (subject to availability), and special offers for your next stay.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Booking