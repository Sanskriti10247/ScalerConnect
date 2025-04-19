import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Feed from './Pages/Feed';
import About from './Pages/About';
import Contact from './Pages/Contact';
import LoginRegister from './Pages/LoginRegister';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/loginRegister" element={<LoginRegister />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
