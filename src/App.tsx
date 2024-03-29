import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Landing from './pages/landing/Landing';
import About from './pages/about/about';
import Location from './pages/location/location';
import Sponsors from './pages/sponsors/sponsors';
import Speakers from './pages/speakers/speakers';
import Itinerary from './pages/itinerary/itinerary';
import FAQ from './pages/faq/faq';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Sponsors />
      <About />
      <Speakers />
      <Itinerary />
      <Location />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
