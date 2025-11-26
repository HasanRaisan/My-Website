import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home';
import ExperienceDetails from './Pages/ExperienceDetails';
import { ExperienceContext } from './Context/Experience';
import { experienceData } from './Data/Experience';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <>
      <ExperienceContext.Provider value={experienceData}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/experience/:experienceId' element={<ExperienceDetails />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<Navigate to="/404" replace />} />
        </Routes>
        
      </ExperienceContext.Provider>
    </>
  );
}

export default App;
