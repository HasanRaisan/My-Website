import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home';
import ExperienceDetails from './Pages/ExperienceDetails';
import { ExperienceContext } from './Context/Experience';
import { experienceData } from './Data/Experience';

function App() {
  return (
    <>
      <ExperienceContext.Provider value={experienceData}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/experience/:experienceId' element={<ExperienceDetails />} />
        </Routes>
      </ExperienceContext.Provider>
    </>
  );
}

export default App;
