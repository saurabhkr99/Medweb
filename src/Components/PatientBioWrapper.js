import React from 'react'
import PatientBio from './PatientBio'
import PatientId from './PatientId'

function PatientBioWrapper(props) {
  return (
    <div className='row  mt-4 ' style={{paddingLeft: "0px"}} >
       <div className='col-md-4'>
       <PatientId patientDetail = {props.patientDetail} />
       </div>
       <div className='col-md-8'>
        <PatientBio patientDetail = {props.patientDetail} />

       </div>
    </div>
  )
}

export default PatientBioWrapper