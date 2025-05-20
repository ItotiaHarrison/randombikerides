import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stories from './components/Stories';
import Gallery from './components/Gallery';
import About from './components/About';
import Footer from './components/Footer';
import BikeAnimation from './components/BikeAnimation';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Stories />
      <Gallery />
      <About />
      <Footer />
      <BikeAnimation />
    </div>
  );
}

export default App;