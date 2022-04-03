import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { GrNotes } from "react-icons/gr";
import DocumentCard from './DocumentCard';


function PatientDocuments() {
    const [patientDocuments,setPatientDocuments] =useState({})

    useEffect(()=>{
    axios.get('https://619f39821ac52a0017ba467e.mockapi.io/Files')
    .then((response)=>{
      setPatientDocuments(response.data[0])
    })
    },[])
  return (
    <div className='my-card mt-4 pb-4' >
        <div className='d-flex justify-content-between m-2 py-3'>
         <h6>Files/Documents</h6>
         <h6 className='color-blue'>
         <GrNotes/>
         Add Files</h6>
        </div>
       {patientDocuments.files && patientDocuments.files.map((file)=> <DocumentCard  document = {file}/>)} 
    </div>
  )
}

export default PatientDocuments