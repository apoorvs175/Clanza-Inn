




















import { useEffect } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import { FaMapMarkerAlt } from 'react-icons/fa';

function SimpleLocation() {
  document.title = 'Location | Clanzaa In';

  useEffect(() => {
    if (window.L) {
      const map = window.L.map('simple-location-map').setView([28.4717588, 77.4783711], 12);

      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      const locations = [
        { lat: 28.469509, lng: 77.475028, name: 'Clanxa Inn-B', address: 'Near Sharda Gate-5, Greater Noida, KP-3, UP - 201310' },
        { lat: 28.482142, lng: 77.476767, name: 'Clanza Inn- C', address: '2. 456 Another Ave, City Center' },
        { lat: 28.46955279216589, lng: 77.47895882032854, name: 'Clanza Inn- D', address: '1. 123 Simple Street, Downtown' },
        { lat: 28.471647, lng: 77.478302, name: 'Clanza Inn-A (Head Office)', address: '3. 789 Third Blvd, Uptown' }
      ];

      locations.forEach(location => {
        const marker = window.L.marker([location.lat, location.lng]).addTo(map);
        marker.bindPopup(`<b>${location.name}</b><br>Lat: ${location.lat}, Lng: ${location.lng}`).openPopup();
      });

      return () => {
        map.remove();
      };
    }
  }, []);

  return (
    <div>
      {/* Header */}
      <div
        className="relative py-16 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-neutral-900 bg-opacity-70"></div>
        <div className="container-custom relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeInDown">Our Location</h1>
            <p className="text-lg text-white text-opacity-90 max-w-2xl mx-auto animate__animated animate__fadeInUp">
              Find us in the heart of the city.
            </p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container-custom">
          <SectionTitle title="Where to Find Us" subtitle="Located in Greater Noida" />
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-lg shadow-lg p-6">
              {[
                { name: 'Clanza Inn-A (Head Office)', address: 'Near Sharda Gate-5, Greater Noida, KP-3, UP - 201310' },
                { name: 'Clanxa Inn-B', address: 'Near Sharda Gate-5, Greater Noida, KP-3, UP - 201310' },
                { name: 'Clanza Inn-C', address: 'Near Sharda Gate-4, Greater Noida, KP-3, UP - 201310' },
                { name: 'Clanza Inn-D', address: 'Near Cube, Namoli, Kp-3, UP - 201306' }
              ].map((location, index) => (
                <div className="flex items-start mb-6" key={index}>
                  <div className="bg-primary rounded-full p-3 mr-4 flex-shrink-0">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-gray-600 transition duration-300">{location.name}</h3>
                    <div className="text-neutral-600">
                      <p>{location.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
              <div id="simple-location-map" className="w-full h-[400px] fixed-map"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Owners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Meet Our Owners</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: 'Sujeet Parida',
                designation: 'CEO',
                description: 'Guides financial strategy with insight, precision, and executive leadership focus.',
                image: '/images/sujeet.PNG'
              },
              {
                name: 'Rohit',
                designation: 'Director',
                description: 'Leads innovation and operations to achieve impactful, scalable business outcomes.',
                image: '/images/raja.PNG'
              },
              {
                name: 'Abhishek Singh',
                designation: 'Director',
                description: 'Drives strategic vision and ensures consistent, long-term organizational growth.',
                image: '/images/abhi.jpg'
              }
            ].map((owner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 h-[500px] flex flex-col items-center"
              >
                <img
                  src={owner.image}
                  alt={owner.name}
                  className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                  style={{ width: '450px', height: '300px' }}
                />
                <div className="p-4 text-left w-full h-[120px]">
                  <h3 className="text-xl font-semibold mt-2 text-gray-800">{owner.name}</h3>
                  <h4 className="text-md text-gray-600">{owner.designation}</h4>
                  <p className="text-gray-500 mt-2">{owner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline CSS for Fixed Map Position */}
      <style jsx>{`
        .fixed-map {
          position: relative;
          top: 0;
          z-index: 1;
        }
      `}</style>
    </div>
  );
}

export default SimpleLocation;
