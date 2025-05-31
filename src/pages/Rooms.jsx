import { useState } from 'react'
import { roomData } from '../data/roomData'
import SectionTitle from '../components/common/SectionTitle'
import { FaStar, FaWifi, FaBath, FaTv, FaUtensils, FaSnowflake, FaPencilAlt } from 'react-icons/fa'

function Rooms() {
  const [activeRoom, setActiveRoom] = useState(null)
  
  // Update page title
  document.title = 'Rooms | Clanza In Hostel'
  
  // Room types for filtering
  const roomTypes = ['All', 'Shared', 'Private', 'Premium']
  const [activeFilter, setActiveFilter] = useState('All')
  
  // Filter rooms based on active filter
  const filteredRooms = activeFilter === 'All' 
    ? roomData 
    : roomData.filter(room => room.type === activeFilter)
  
  const getAmenityIcon = (amenity) => {
    if (amenity.includes('WiFi')) return <FaWifi />
    if (amenity.includes('Bathroom')) return <FaBath />
    if (amenity.includes('TV')) return <FaTv />
    if (amenity.includes('Air Conditioning')) return <FaSnowflake />
    if (amenity.includes('Coffee')) return <FaUtensils />
    return <FaPencilAlt />
  }
  
  return (
    <div>
      {/* Header */}
      <div 
        className="relative py-24 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=1600')" 
        }}
      >
        <div className="absolute inset-0 bg-neutral-900 bg-opacity-70"></div>
        <div className="container-custom relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Rooms
            </h1>
            <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Choose from our range of comfortable and affordable accommodations
            </p>
          </div>
        </div>
      </div>
      
      {/* Room Filters */}
      {/* <div className="bg-white py-6 shadow-sm sticky top-0 z-20">
        <div className="container-custom">
          <div className="flex justify-center space-x-2 md:space-x-6">
            {roomTypes.map(type => (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors ${
                  activeFilter === type
                    ? 'bg-primary text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div> */}
      
      {/* Rooms List */}
      <section className="py-16 bg-neutral-100">
        <div className="container-custom">
          <SectionTitle 
            title="Find Your Perfect Stay" 
            subtitle="Browse our selection of rooms tailored to different preferences and budgets"
          />
          
          <div className="space-y-12">
            {filteredRooms.map(room => (
              <div 
                key={room.id} 
                id={room.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="grid md:grid-cols-3">
                  {/* Room Image */}
                  <div className="md:col-span-1 h-64 md:h-auto relative">
                    <img 
                      src={room.images[0]} 
                      alt={room.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="badge badge-primary">{room.type}</span>
                    </div>
                  </div>
                  
                  {/* Room Details */}
                  <div className="md:col-span-2 p-6 md:p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-2xl font-semibold mb-2">{room.name}</h2>
                        <div className="flex items-center text-sm text-neutral-600 space-x-4">
                          <span className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {room.capacity} {room.capacity === 1 ? 'Person' : 'People'}
                          </span>
                          <span className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            24/7 Reception
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-primary">INR {room.price}</p>
                        <p className="text-neutral-500 text-sm">per months</p>
                      </div>
                    </div>
                    
                    <p className="text-neutral-600 mb-6">{room.description}</p>
                    
                    {/* Amenities */}
                    <div className="mb-6">
                      <h3 className="text-lg font-medium mb-3">Amenities</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
                        {room.amenities.slice(0, 6).map((amenity, index) => (
                          <div key={index} className="flex items-center text-neutral-700">
                            <span className="text-primary mr-2">{getAmenityIcon(amenity)}</span>
                            <span className="text-sm">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <button
                        onClick={() => setActiveRoom(activeRoom === room.id ? null : room.id)}
                        className="btn btn-outline"
                      >
                        {activeRoom === room.id ? 'Hide Details' : 'View Details'}
                      </button>
                      {/* <a href="/booking" className="btn btn-primary">
                        Book Now
                      </a> */}
                    </div>
                    
                    {/* Additional Images */}
                    {activeRoom === room.id && (
                      <div className="mt-6 pt-6 border-t border-neutral-200 animate-fade-in">
                        <h3 className="text-lg font-medium mb-3">Room Gallery</h3>
                        <div className="grid grid-cols-3 gap-3">
                          {room.images.map((image, index) => (
                            <img 
                              key={index} 
                              src={image} 
                              alt={`${room.name} - Image ${index + 1}`} 
                              className="rounded-lg w-full h-32 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                            />
                          ))}
                        </div>
                        
                        {/* Full Amenities List */}
                        {room.amenities.length > 6 && (
                          <div className="mt-6">
                            <h3 className="text-lg font-medium mb-3">All Amenities</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
                              {room.amenities.map((amenity, index) => (
                                <div key={index} className="flex items-center text-neutral-700">
                                  <span className="text-primary mr-2">{getAmenityIcon(amenity)}</span>
                                  <span className="text-sm">{amenity}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about our rooms"
          />
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-neutral-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">What's included in the room rates?</h3>
              <p className="text-neutral-700">
                All room rates include free WiFi, bed linens, and access to common areas including the kitchen, lounge, and co-working space. Private rooms also include towels and daily housekeeping.
              </p>
            </div>
            
            <div className="bg-neutral-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Can I request a specific bed in a dormitory?</h3>
              <p className="text-neutral-700">
                Yes, you can request a specific bed (top or bottom bunk) or location in the dormitory during booking, and we'll do our best to accommodate your preferences based on availability.
              </p>
            </div>
            
            <div className="bg-neutral-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Are bathrooms shared for all room types?</h3>
              <p className="text-neutral-700">
                Dormitory rooms have shared bathroom facilities. Private Twin, Double, and Deluxe rooms have ensuite private bathrooms for your convenience.
              </p>
            </div>
            
           
          </div>
        </div>
      </section>
    </div>
  )
}

export default Rooms