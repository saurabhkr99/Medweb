import React from 'react';
import { BsPerson } from "react-icons/bs";


function PatientNotes() {

  return (
    <div className='card mt-4'>
    <div className='d-flex justify-content-between pt-3 px-2  '>
        <p className='bold'>Notes</p>
        <p className='color-blue'>See all</p>
    </div>
    <div className='bg-light-bue mx-1 py-4'>
    <div className='mb-4 ps-3' >
    <p className='m-0'>- THis patient is lorem ipsum.</p>
    <p className='m-0'>- THis patient is lorem ipsum.</p>
    <p className='m-0'>- THis patient is lorem ipsum.</p>
    </div>

    <button type="button" className="btn btn-primary float-right btn-sm me-2">save note</button>
    </div>
    <div className='m-3'>
        <h6>Lorem ipsum </h6>
        <div className='d-flex justify-content-between' >
            <p>
            <BsPerson  />
            Drg. mega nande</p>
            <p>20 Nov '19</p>
        </div>
    </div>
    </div>
  )
}

export default PatientNotes