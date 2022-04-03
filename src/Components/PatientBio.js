import React from 'react'

function PatientBio(props) {
    const { patientDetail } = props
    return (
        <div className="card pt-4   pb-4">
            {/* <div className='container'> */}
            <div className='container'>
                <div className='row pt-4'>
                    <div className='col-4'>
                        <p className='m-0 font-grey bold'>Gender</p>
                        <p>{patientDetail.Gender}</p>
                        <hr className='m-0 w-90' />
                    </div>

                    <div className='col-4'>
                        <p className='m-0 font-grey bold'>Birthday</p>
                        <p>{patientDetail.Birthday}</p>
                        <hr className='m-0 w-90' />
                    </div>


                    <div className='col-4'>
                        <p className='m-0 font-grey bold'>Phone Number</p>
                        <p>{patientDetail['Phone Number']}</p>
                        <hr className='m-0 w-90' />
                    </div>

                </div>

            </div>


            <div className='container'>
                <div className='row pt-4'>
                    <div className='col-4'>
                        <p className='m-0 font-grey bold'>Street Address</p>
                        <p>{patientDetail['Street Address']}</p>
                        <hr className='m-0 w-90' />
                    </div>


                    <div className='col-4'>
                        <p className='m-0 font-grey bold'>City</p>
                        <p>{patientDetail.City || 'Cilacap'}</p>
                        <hr className='m-0 w-90' />
                    </div>
                    {/* <hr className='m-0 w-90' /> */}

                    <div className='col-4'>
                        <p className='m-0 font-grey bold'>Zip Code</p>
                        <p>{patientDetail['ZIP Code']}</p>
                        <hr className='m-0 w-90' />
                    </div>
                    {/* <hr className='m-0 w-90' /> */}

                </div>
            </div>

            <div className='container'>
                <div className='row pt-4'>
                    <div className='col-4'>
                        <p className='m-0 font-grey bold'>Member Status</p>
                        <p>{patientDetail['Member Status']}</p>
                        <hr className='m-0 w-90' />
                    </div>
                    {/* <hr className='m-0 w-90' /> */}

                    <div className='col-4'>
                        <p className='m-0 font-grey bold'>Registered Date</p>
                        <p>{patientDetail['Register Date']}</p>
                        <hr className='m-0 w-90' />
                    </div>
                    {/* <hr className='m-0 w-90' /> */}

                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default PatientBio