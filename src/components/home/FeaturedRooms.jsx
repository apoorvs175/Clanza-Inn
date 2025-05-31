import { Link } from 'react-router-dom'
import SectionTitle from '../common/SectionTitle'
import { roomData } from '../../data/roomData'

function FeaturedRooms() {
  // Select featured rooms (first 3)
  const featuredRooms = roomData.slice(0, 3)
  
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <SectionTitle 
          title="Our Featured Rooms" 
          subtitle="Discover our most popular accommodation options"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRooms.map((room) => (
            <div key={room.id} className="card group">
              <div className="relative overflow-hidden">
                <img 
                  src={room.images[0]} 
                  alt={room.name} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="badge badge-primary">{room.type}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold">{room.name}</h3>
                  <p className="text-primary font-semibold">INR {room.price}<span className="text-neutral-500 text-sm"> /Months</span></p>
                </div>
                
                <p className="text-neutral-600 mb-4">{room.shortDescription}</p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {room.amenities.slice(0, 3).map((amenity, index) => (
                    <span key={index} className="text-sm text-neutral-600 flex items-center">
                      <svg className="w-4 h-4 mr-1 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {amenity}
                    </span>
                  ))}
                </div>
                
                <Link to={`/rooms#${room.id}`} className="btn btn-outline w-full">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/rooms" className="btn btn-primary">
            View All Rooms
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedRooms