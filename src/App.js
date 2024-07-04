import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Contacts from './components/Contacts';
import Home from './components/Home';
import Shop from './components/Shop';
import Vehicles from './components/Vehicles';
import Discover from './components/Discover';

function App() {
  return (
    
      <div className="App">
        <Header />
        <Routes>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
      </div>
  );    
}

export default App;
