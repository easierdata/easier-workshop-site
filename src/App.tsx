import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Landing from './pages/landing/Landing';
import About from './pages/about/about';
import Location from './pages/location/location';
import Sponsors from './pages/sponsors/sponsors';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Sponsors />
      <About />
      <Location />
    </div>
  );
}

export default App;
