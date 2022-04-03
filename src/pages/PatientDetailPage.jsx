import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PatientAppointments from '../Components/PatientAppointments'
import PatientBioWrapper from '../Components/PatientBioWrapper'
import PatientDocuments from '../Components/PatientDocuments'
import PatientNotes from '../Components/PatientNotes'
import TopNav from '../Components/TopNav'

function PatientDetailPage() {
  const [patientDetail,setPatientDetail] =useState({})

  useEffect(()=>{
  axios.get('https://619f39821ac52a0017ba467e.mockapi.io/patientDetails')
  .then((response)=>{
    setPatientDetail(response.data[0])
  })
  },[])
  return (
    <div className='flex-grow-1 bg-light-bue'> 
    <TopNav />
    <div className='row'>
     <div className='col-9'>
     <PatientBioWrapper  patientDetail = {patientDetail} />
    <PatientAppointments/>

     </div>
     <div className='col-3'>
        <PatientNotes />
        <PatientDocuments />
     </div>
    </div>
    </div>
  )
}

export default PatientDetailPage