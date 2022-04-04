import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidepanel from './Components/Sidepanel';
import PatientDetailPage from './pages/PatientDetailPage';


function App() {

  return (
    <div className='d-flex '>

 This is App Component
      <Sidepanel />
      <Routes>
        <Route path="/patient-detail" element={<PatientDetailPage />} />
      </Routes>
    </div>

  )
}

export default App