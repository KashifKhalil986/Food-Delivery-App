// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Header from './components/Layouts/Header';
import About from './components/Pages/About/About';
import Menu from './components/Pages/Our_Menu/Menu';
import Contact from './components/Pages/Contact/Contact';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
  
    </Router>
  
  );
};

export default App;
