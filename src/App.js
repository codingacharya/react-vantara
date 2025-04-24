import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Testimonial from './components/Testimonial';
import Slideshow from './components/Slideshow';
import AnimalCareForm from './components/AnimalCareForm';
import Footer from './components/Footer';
import './App.css'; // Optional: Custom CSS for App

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About/>
      <Slideshow />
      <Service />
      <Testimonial/>
      <AnimalCareForm />
      <Footer />
    </div>
  );
}

export default App;
