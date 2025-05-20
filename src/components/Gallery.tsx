import React, { useState } from 'react';
import { bikeStories } from '../data/stories';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Collect all images from all stories
  const allImages = bikeStories.reduce<string[]>((acc, story) => {
    // Add cover image and gallery images
    return [...acc, story.coverImage, ...story.gallery];
  }, []);
  
  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const handleCloseImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trail Snapshots</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Moments captured from the saddle, showcasing the beauty of the trails
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {allImages.map((image, index) => (
            <div 
              key={index} 
              className={`overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-green-800/30
                ${index % 5 === 0 ? 'col-span-2 row-span-2' : ''}`}
              onClick={() => handleImageClick(image)}
            >
              <img 
                src={image} 
                alt={`Bike adventure photo ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={handleCloseImage}
        >
          <button 
            onClick={handleCloseImage}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged view" 
            className="max-w-full max-h-[90vh] object-contain pointer-events-none"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;