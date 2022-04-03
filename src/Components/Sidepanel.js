import React from 'react'
import { FaNotesMedical } from "react-icons/fa";
import { BsCalendarDate, BsPerson } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { GrOverview } from "react-icons/gr";
import { BiMessageDetail } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { RiListSettingsLine } from "react-icons/ri";

function Sidepanel() {
  return (
    <div className='px-3 pt-2'> 
    <h4>
      <FaNotesMedical className='me-2 mb-1'/>
      Zedenta
    </h4>
      <div className=" flex-column mt-4 ">
      <div className='my-4 mx-1'>
      <Link to={'/'} className='bold my-nav-item'>
      <GrOverview className='me-3'/>
      Overview </Link>
      </div>
       <div className='my-4 mx-1'>
       <Link to={'/'} className='bold my-nav-item'>
       <BsCalendarDate className='me-3'/>
        Calender</Link>
       </div>
      <div className='my-4 mx-1'>
      <Link to={'/patient-detail'} className='bold my-nav-item'>
      <BsPerson className="me-3" />
       Patient List</Link>
      </div>
      <div className='my-4 mx-1'>
       <Link to={'/'} className='bold my-nav-item'>
       <BiMessageDetail className="me-3" />
       Messages </Link>

      </div>
      <div className='my-4 mx-1'>
       <Link to={'/'} className='bold my-nav-item'> 
       <MdPayment className="me-3" />
       Payment information</Link>

      </div>
       <div className='my-4 mx-1'>
       <Link to={'/'} className='bold my-nav-item'>
       <RiListSettingsLine className="me-3" />
       Settings </Link>
       </div>
       
      </div>
    </div>
  )
}

export default Sidepanel