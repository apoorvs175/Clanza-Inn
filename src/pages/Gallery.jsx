import SectionTitle from '../components/common/SectionTitle'
import GalleryGrid from '../components/gallery/GalleryGrid'

function Gallery() {
  // Update page title
  document.title = 'Gallery | Clanza In Hostel'
  
  return (
    <div>
      {/* Header */}
      <div 
        className="relative py-24 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/7031408/pexels-photo-7031408.jpeg?auto=compress&cs=tinysrgb&w=1600')" 
        }}
      >
        <div className="absolute inset-0 bg-neutral-900 bg-opacity-70"></div>
        <div className="container-custom relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Photo Gallery
            </h1>
            <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Explore our spaces, rooms, and facilities through our gallery
            </p>
          </div>
        </div>
      </div>
      
      {/* Gallery Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container-custom">
          <SectionTitle 
            title="Visual Tour" 
            subtitle="Browse photos of our hostel, rooms, and surroundings"
          />
          
          <GalleryGrid />
        </div>
      </section>
      
      {/* Virtual Tour Promo */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-neutral-900 rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Take a Virtual Tour
                </h2>
                <p className="text-neutral-300 mb-6">
                  Can't visit in person? Explore our hostel through our interactive virtual tour. Navigate through common areas, rooms, and facilities to get a feel for our space before you book.
                </p>
                <div>
                  <button className="btn bg-primary text-white hover:bg-primary-dark">
                    Launch Virtual Tour
                  </button>
                </div>
              </div>
              <div className="h-64 md:h-auto relative">
                <img 
                  src="https://images.pexels.com/photos/6186829/pexels-photo-6186829.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Virtual Tour" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery