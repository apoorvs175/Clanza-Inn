import { FaWifi, FaUtensils, FaTv, FaLaptop, FaTshirt, FaLock } from 'react-icons/fa'
import SectionTitle from '../common/SectionTitle'

function FacilitiesSection() {
  const facilities = [
    {
      icon: <FaWifi className="text-3xl" />,
      title: 'Free High-Speed WiFi',
      description: 'Stay connected with our complimentary high-speed internet access throughout the property.'
    },
    {
      icon: <FaUtensils className="text-3xl" />,
      title: 'Shared Kitchen',
      description: 'Fully equipped communal kitchen where you can prepare your own meals and socialize.'
    },
    {
      icon: <FaTv className="text-3xl" />,
      title: 'Lounge Area',
      description: 'Comfortable common area with TV, games, and plenty of space to relax and meet others.'
    },
    {
      icon: <FaLaptop className="text-3xl" />,
      title: 'Co-working Space',
      description: 'Dedicated work area for digital nomads and others.'
    },
    {
      icon: <FaTshirt className="text-3xl" />,
      title: 'Laundry Facilities',
      description: 'Laundry facilities available for all twice in a week.'
    },
    {
      icon: <FaLock className="text-3xl" />,
      title: 'Secure Storage',
      description: 'Lockers and luggage storage to keep your belongings safe during your stay.'
    }
  ]
  
  return (
    <section className="py-20 bg-neutral-100">
      <div className="container-custom">
        <SectionTitle 
          title="Hostel Facilities" 
          subtitle="Everything you need for a comfortable stay"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 shadow-card hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-primary mb-4">
                {facility.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{facility.title}</h3>
              <p className="text-neutral-600">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FacilitiesSection