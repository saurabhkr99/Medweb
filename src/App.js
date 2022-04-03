import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidepanel from './Components/Sidepanel';
import PatientDetailPage from './pages/PatientDetailPage';


function App() {
  const [data, setData] = useState([])
  const [file, setFile] = useState([])

  // useEffect(() => {
  //   axios.get("https://619f39821ac52a0017ba467e.mockapi.io/patientDetails")
  //     .then((response) => {
  //       setData(response.data);
  //     });

  //   console.log("patient detail-",data)

  // }, []);
  // useEffect(() =>{
  //   axios.get("https://619f39821ac52a0017ba467e.mockapi.io/Files")
  //   .then((response) => {
  //     console.log("file data-",response);
  //     setFile(response.file);
  //   });
  // }, [])
  return (
    <div className='d-flex '>
      <Sidepanel />
      <Routes>
        <Route path="/patient-detail" element={<PatientDetailPage />} />
      </Routes>
    </div>

  )
}

export default App