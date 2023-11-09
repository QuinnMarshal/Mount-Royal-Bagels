import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Menu from './components/pages/Menu';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element = {<Home />} />
        <Route exact path='/about' element = {<About />} />
        <Route exact path='/menu' element = {<Menu />} />
        <Route exact path='/contact' element = {<Contact />} />
      </Routes>
    </>
  );
}

export default App;
