import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { BikeStory } from '../types';

interface StoryDetailProps {
  story: BikeStory;
  onClose: () => void;
}

const StoryDetail: React.FC<StoryDetailProps> = ({ story, onClose }) => {
  
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/70 z-50 overflow-y-auto p-4 md:p-8">
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-screen overflow-y-auto">
          {/* Header with image */}
          <div className="relative h-80 overflow-hidden">
            <img 
              src={story.coverImage} 
              alt={story.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <div className="absolute bottom-0 left-0 p-6">
              <h2 className="text-3xl font-bold text-white mb-2">{story.title}</h2>
              <div className="flex flex-wrap gap-4 text-white/90">
                <span>{story.date}</span>
                <span>•</span>
                <span>{story.location}</span>
              </div>
            </div>
          </div>
          
          {/* Story stats */}
          <div className="bg-green-800 text-white p-4">
            <div className="flex justify-around">
              {story.distance && (
                <div className="text-center">
                  <div className="text-2xl font-bold">{story.distance} km</div>
                  <div className="text-sm text-white/80">Distance</div>
                </div>
              )}
              {story.elevation && (
                <div className="text-center">
                  <div className="text-2xl font-bold">{story.elevation} m</div>
                  <div className="text-sm text-white/80">Elevation</div>
                </div>
              )}
              {story.duration && (
                <div className="text-center">
                  <div className="text-2xl font-bold">{story.duration}</div>
                  <div className="text-sm text-white/80">Duration</div>
                </div>
              )}
            </div>
          </div>
          
          {/* Story content */}
          <div className="p-6">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-8">
              {story.content}
            </p>
            
            {/* Photo gallery */}
            <h3 className="text-xl font-bold text-green-800 mb-4">Photo Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {story.gallery.map((img, index) => (
                <div key={index} className="overflow-hidden rounded-lg h-60">
                  <img 
                    src={img} 
                    alt={`${story.title} gallery image ${index+1}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <button 
                onClick={onClose}
                className="inline-block bg-green-800 hover:bg-green-900 text-white font-semibold py-2 px-6 rounded-full transition-colors"
              >
                Back to Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;