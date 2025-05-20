import React, { useEffect, useState, useRef } from 'react';

const BikeAnimation: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const bikePath = useRef<HTMLDivElement>(null);
  const bikeIcon = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(window.scrollY / totalHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (bikePath.current && bikeIcon.current) {
      // Calculate position along the path
      const pathWidth = bikePath.current.offsetWidth;
      const bikeWidth = bikeIcon.current.offsetWidth;
      const position = scrollProgress * (pathWidth - bikeWidth);
      
      bikeIcon.current.style.transform = `translateX(${position}px)`;
    }
  }, [scrollProgress]);

  return (
    <div className="fixed bottom-4 left-0 w-full z-40 pointer-events-none">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Path - a simple line */}
          <div 
            ref={bikePath}
            className="h-1 bg-gradient-to-r from-green-700 via-orange-500 to-green-700 rounded-full w-full opacity-70"
          ></div>
          
          {/* Bike icon */}
          <div 
            ref={bikeIcon}
            className="absolute bottom-0 transform -translate-y-2"
            style={{ transition: 'transform 0.1s ease-out' }}
          >
            <div className="text-2xl">🚵‍♂️</div>
          </div>
          
          {/* Progress indicator */}
          <div className="absolute top-2 right-0 text-sm bg-white bg-opacity-80 px-2 py-1 rounded-full">
            {Math.round(scrollProgress * 100)}% of trail completed
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeAnimation;