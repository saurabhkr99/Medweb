import React from 'react'
import PersonImg from '../assets/person.jpg'
function PatientId(props) {
  const {  patientDetail } = props
  return (
    <div className="card ms-4 h-100 px-4" >
    <div className='w-25 mx-auto pt-3'>
    <img  src={PersonImg} className="card-img-top" alt="..." />
    </div>
      <div className="card-body ">
        <h5 className="card-title text-center">{patientDetail.name}</h5>
        <p className="card-text text-center mb-0 font-grey">{patientDetail['e-email']}</p>
        <div className='d-flex justify-content-center'>
          <div className=' pe-5'>
            <h5 className='card-text text-center m-0'>{patientDetail.Past}</h5>
            <p className='card-text font-grey'>Past</p>
          </div>
          <div className='vertical-line my-2'></div>

          <div className='ps-4'>
            <h5 className='card-text text-center m-0'>{patientDetail.Upcoming}</h5>
            <p className='card-text font-grey'>Upcoming</p>
          </div>
        </div>
        <button type="button" className="btn btn-outline-primary w-100  mt-3">
          Send Message
        </button>
      </div>
    </div>
  )
}

export default PatientId
