import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold flex items-center">
              <span className="inline-block mr-2">🚵‍♂️</span> BikeTales
            </h2>
            <p className="text-green-200 mt-2 max-w-md">
              Exploring the world one trail at a time, documenting the journey, and sharing the adventure.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:gap-16">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'Stories', 'Gallery', 'About'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-green-200 hover:text-orange-300 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                {[
                  {name: 'Instagram', icon: '📸'}, 
                  {name: 'Twitter', icon: '🐦'}, 
                  {name: 'YouTube', icon: '📹'}, 
                  {name: 'Strava', icon: '🚴'}
                ].map((item) => (
                  <li key={item.name}>
                    <a 
                      href="#" 
                      className="text-green-200 hover:text-orange-300 transition-colors flex items-center"
                    >
                      <span className="mr-2">{item.icon}</span>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-green-700 text-center text-green-300 text-sm">
          <p>© {currentYear} BikeTales. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;