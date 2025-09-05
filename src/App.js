 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Blog from './Blog';
import Settings from './Settings';
import TrackOrder from './TrackOrder';
import BestOffers from './BestOffers';
import Register from './Register'
function App() {
  return (
    <Router>
      <Routes>
         
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/best-offers" element={<BestOffers />} />
      </Routes>
    </Router>
  );
}

export default App;
