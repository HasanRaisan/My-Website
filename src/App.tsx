import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home';
import Experience from './Pages/Experience';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Experience />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
