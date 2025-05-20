import React from 'react';
import { BikeStory } from '../types';

interface StoryCardProps {
  story: BikeStory;
  onClick: () => void;
}

const StoryCard: React.FC<StoryCardProps> = ({ story, onClick }) => {
  return (
    <div 
      className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={story.coverImage} 
          alt={story.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <span className="inline-block bg-orange-500 text-white px-3 py-1 text-xs font-semibold rounded-full mb-2">
            {story.location}
          </span>
          <h3 className="text-xl font-bold text-white">{story.title}</h3>
          <p className="text-white/80 text-sm">{story.date}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-600 mb-4 line-clamp-3">{story.description}</p>
        <div className="flex justify-between text-sm text-gray-500">
          {story.distance && (
            <span className="flex items-center">
              <span className="mr-1">📏</span> {story.distance} km
            </span>
          )}
          {story.elevation && (
            <span className="flex items-center">
              <span className="mr-1">⛰️</span> {story.elevation} m
            </span>
          )}
          {story.duration && (
            <span className="flex items-center">
              <span className="mr-1">⏱️</span> {story.duration}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryCard;