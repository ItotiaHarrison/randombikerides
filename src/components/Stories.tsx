import React, { useState } from 'react';
import { bikeStories } from '../data/stories';
import StoryCard from './StoryCard';
import StoryDetail from './StoryDetail';

const Stories: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<string | null>(null);
  
  const handleStoryClick = (storyId: string) => {
    setSelectedStory(storyId);
    document.body.style.overflow = 'hidden';
  };
  
  const handleCloseDetail = () => {
    setSelectedStory(null);
    document.body.style.overflow = 'auto';
  };
  
  const story = selectedStory ? bikeStories.find(s => s.id === selectedStory) : null;
  
  return (
    <section id="stories" className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Adventure Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chronicles of my most memorable rides, from serene forest paths to challenging mountain trails
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bikeStories.map((story) => (
            <StoryCard 
              key={story.id} 
              story={story} 
              onClick={() => handleStoryClick(story.id)}
            />
          ))}
        </div>
      </div>
      
      {/* Story Detail Modal */}
      {story && (
        <StoryDetail story={story} onClose={handleCloseDetail} />
      )}
    </section>
  );
};

export default Stories;