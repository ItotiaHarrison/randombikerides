import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">About Bike Tales</h2>
            <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="h-full">
                  <img 
                    src="https://images.pexels.com/photos/2404370/pexels-photo-2404370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Mountain biker in action" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 md:p-8 md:w-2/3">
                <h3 className="text-2xl font-bold text-green-800 mb-4">The Journey Behind the Stories</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Welcome to Bike Tales, my personal journal of mountain biking adventures across diverse landscapes and challenging terrains. What started as a casual weekend hobby has evolved into a passionate pursuit of discovering new trails, pushing my limits, and capturing the beauty of nature from the saddle of my bike.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Each story shared here represents not just a ride, but an experience – complete with unexpected discoveries, occasional mishaps, and the inevitable moments of awe that make mountain biking such a rewarding activity. Whether you're an experienced rider or simply enjoy outdoor adventures, I hope these tales inspire you to explore the trails in your area.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#"
                    className="inline-block bg-green-800 hover:bg-green-900 text-white font-semibold py-2 px-6 rounded-full transition-colors"
                  >
                    Contact Me
                  </a>
                  <a 
                    href="#stories"
                    className="inline-block bg-transparent border-2 border-green-800 text-green-800 hover:bg-green-800 hover:text-white font-semibold py-2 px-6 rounded-full transition-colors"
                  >
                    Explore Stories
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-green-800 text-white p-6">
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-2">Let's Connect</h4>
                <p className="text-green-100 mb-4">Follow my journey or share your own trail experiences</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-white hover:text-orange-300 transition-colors">
                    <span className="sr-only">Instagram</span>
                    <span className="text-2xl">📸</span>
                  </a>
                  <a href="#" className="text-white hover:text-orange-300 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <span className="text-2xl">🐦</span>
                  </a>
                  <a href="#" className="text-white hover:text-orange-300 transition-colors">
                    <span className="sr-only">YouTube</span>
                    <span className="text-2xl">📹</span>
                  </a>
                  <a href="#" className="text-white hover:text-orange-300 transition-colors">
                    <span className="sr-only">Strava</span>
                    <span className="text-2xl">🚴</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;