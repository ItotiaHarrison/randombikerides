import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" id="home">
      {/* Parallax Background Layers */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/4710907/pexels-photo-4710907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      
      {/* Mountain silhouette - back layer */}
      <div 
        className="absolute bottom-0 left-0 right-0 z-20 h-[30vh] bg-contain bg-bottom bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/10350232/pexels-photo-10350232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          transform: `translateY(${scrollY * 0.1}px)`,
          opacity: 0.6,
          filter: 'brightness(0.3) contrast(1.2)'
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-30 text-center">
        <h1 
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          style={{
            transform: `translateY(${-scrollY * 0.2}px)`,
          }}
        >
          Trail Tales
        </h1>
        <p 
          className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto"
          style={{
            transform: `translateY(${-scrollY * 0.15}px)`,
          }}
        >
          Join me on epic mountain biking adventures, from misty forests to dusty desert trails
        </p>
        <a 
          href="#stories" 
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1"
          style={{
            transform: `translateY(${-scrollY * 0.1}px)`,
          }}
        >
          Explore Stories
        </a>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;