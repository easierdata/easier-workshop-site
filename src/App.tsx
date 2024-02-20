import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Landing from './pages/landing/Landing';
import Attendees from './pages/attendees/attendees';
import About from './pages/about/about';
import Location from './pages/location/location';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Attendees />
      <About />
      <Location />
    </div>
  );
}

export default App;
