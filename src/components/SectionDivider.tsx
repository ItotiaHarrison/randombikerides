import React, { useEffect, useState } from 'react';

interface SectionDividerProps {
  type: 'mountains' | 'trail' | 'forest';
  invert?: boolean;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ type, invert = false }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderDivider = () => {
    switch (type) {
      case 'mountains':
        return (
          <div className="relative h-32 overflow-hidden">
            <div 
              className={`absolute inset-0 bg-cover bg-center ${invert ? 'rotate-180' : ''}`}
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/10350232/pexels-photo-10350232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                transform: `translateY(${scrollY * 0.1}px)`,
                filter: 'brightness(0.3) contrast(1.2)'
              }}
            />
          </div>
        );
      
      case 'trail':
        return (
          <div className="relative h-24 overflow-hidden bg-green-100">
            <div 
              className="absolute w-full h-full"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/1702624/pexels-photo-1702624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                backgroundSize: '200% auto',
                backgroundPosition: `${50 + (scrollY * 0.05)}% center`,
                opacity: 0.2
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-4 h-4 rounded-full bg-orange-500 shadow-lg"
                style={{
                  transform: `translateX(${Math.sin(scrollY * 0.01) * 50}px)`
                }}
              />
            </div>
          </div>
        );
      
      case 'forest':
        return (
          <div className="relative h-40 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-8 h-8 text-2xl"
                style={{
                  left: `${20 * (i + 1)}%`,
                  top: `${Math.sin((scrollY + (i * 100)) * 0.02) * 20 + 50}%`,
                  transform: 'translate(-50%, -50%)',
                  opacity: 0.8 - (i * 0.1)
                }}
              >
                🌲
              </div>
            ))}
          </div>
        );
    }
  };

  return renderDivider();
};

export default SectionDivider;