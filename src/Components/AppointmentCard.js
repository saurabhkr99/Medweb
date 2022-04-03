import React from 'react'
import { GrNotes } from "react-icons/gr";

export default function AppointmentCard(props) {
    const {eachAppointment} = props
   
  return (
    <div className='d-flex my-card m-4 justify-content-between px-4 pt-2'>
    <div>
        <h6>{eachAppointment.Date}</h6>
        <p >{eachAppointment.Time}</p>
    </div>

    <div>
        <p className='m-0 font-grey bold'>Treatment</p>
        <h6>{eachAppointment.Treatment}</h6>
    </div>

    <div>
        <p className='m-0 font-grey bold'>Dentist</p>
        <h6>{eachAppointment.Dentist}</h6>
    </div>

    <div>
        <p className='m-0 font-grey bold'>Nurse</p>
        <h6>{eachAppointment.Nurse}</h6>
    </div>

    <p className='align-self-center color-blue'>
    <GrNotes/>
    Note</p>

    </div>
  )
}
