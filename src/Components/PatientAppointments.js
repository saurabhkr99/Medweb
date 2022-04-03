import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UpcomingAppointment from './UpcomingAppointment'

function PatientAppointments() {
  const [isSelected,setIsSelected] = useState(0)

  const [appointmentDetails,setAppointmentDetails] =useState({})

  useEffect(()=>{
  axios.get('https://619f39821ac52a0017ba467e.mockapi.io/appointment_details')
  .then((response)=>{
    console.log("response in appointmentdetails",response.data[0]);
    setAppointmentDetails(response.data[0])
  })
  },[])

  useEffect(()=>{
    console.log("appointmentDetails:--",appointmentDetails);

  },[appointmentDetails])


  return (
    <div className='card ms-4 mt-4'>
     <div className='tabs d-flex justify-content-around ms-4 my-4 align-items-center bg-light-bue w-75 h-40px'>
       <p onClick={()=>{setIsSelected(0)}}  className={ `${isSelected === 0 && ' whiteBtn'} m-0 cursor-pointer` } >Upcoming Appointments</p>
       <p onClick={()=>{setIsSelected(1)}} className={ `${isSelected === 1 && ' whiteBtn'} m-0 cursor-pointer` }>Past Appointments</p>
       <p onClick={()=>{setIsSelected(2)}} className={ `${isSelected === 2 && ' whiteBtn'} m-0 cursor-pointer` } >Medical Records</p>
     </div>

     {isSelected == 0 &&  <UpcomingAppointment UpcomingAppointment = {appointmentDetails['Upcoming Appointments']} />}
     {isSelected == 1 &&  <>Past Appointment</> }
     {isSelected == 2 &&  <>Medical Records</>}
    </div>
  )
}

export default PatientAppointments