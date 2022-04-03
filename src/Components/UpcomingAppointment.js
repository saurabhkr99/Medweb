import React, { useEffect } from 'react'
import AppointmentCard from './AppointmentCard'

function UpcomingAppointment(props) {
const {UpcomingAppointment} = props
console.log("UpcomingAPpointment:-",props);
    
  return (
    <div className='bg-light-bue'>
       <div className='d-flex justify-content-between align-items-center mx-4 py-2'>
           <h6>Root canal Treatment</h6>
           <button type="button" className="btn btn-outline-primary ">
          Show Previous Treatment
        </button>
       </div>
       <hr className='m-0'/>
 
      {UpcomingAppointment && <AppointmentCard eachAppointment = {UpcomingAppointment} />}

    </div>
  )
}

export default UpcomingAppointment