import { useState } from 'react'
import { galleryData } from '../../data/galleryData'

function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  
  const categories = ['all', 'rooms', 'common_areas', 'facilities', 'surroundings']
  
  const categoryLabels = {
    all: 'All',
    rooms: 'Rooms',
    common_areas: 'Common Areas',
    facilities: 'Facilities',
    surroundings: 'Surroundings'
  }
  
  const filteredImages = activeCategory === 'all' 
    ? galleryData
    : galleryData.filter(image => image.category === activeCategory)
  
  return (
    <div>
      {/* Category Filter */}
      <div className="flex justify-center flex-wrap gap-3 mb-10">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeCategory === category
                ? 'bg-primary text-white'
                : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
            }`}
          >
            {categoryLabels[category]}
          </button>
        ))}
      </div>
      
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full">
            <div className="relative">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title} 
                className="w-full max-h-[80vh] object-contain"
              />
              
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-70 transition-opacity"
                aria-label="Close lightbox"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                <h3 className="text-lg font-medium">{selectedImage.title}</h3>
                <p className="text-sm text-neutral-300">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GalleryGrid