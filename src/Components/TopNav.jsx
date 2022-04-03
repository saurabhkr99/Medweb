import { BsBell, BsPerson, BsPlusCircleFill, BsPrinterFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

import React from 'react'

function TopNav(props) {
    const { patientName } = props
    return (
        <>
            <nav className="navbar navbar-light px-2">
                <div className="container-fluid">
                    <h6 className="navbar-brand">
                        {/* <span> */}
                        <BsPerson className="mb-1" />
                        {/* </span> */}
                        {/* {patientName} */} Diane Cooper
                    </h6>
                    <form className="d-flex mb-1">
                        <input className="form-control me-2 br-25px" type="search" placeholder="Search" aria-label="Search" />
                        <div>
                            <BsPlusCircleFill className="font-size-25px" />
                        </div>
                        <div>
                            <BsBell className="font-size-25px" />
                        </div>
                    </form>
                </div>

            </nav>
            <hr className="m-0" />
            <div className="navigation-view d-flex my-2  mx-4 ">
                <div className=" d-flex align-items-center flex-grow-1">
                    <p>Patient List
                 >
                        <span className="mx-1">{patientName} Diane Cooper</span>
                    </p>
                </div>
                <div >
                    <button type="button" className="btn btn-outline-primary mr-20">
                        <BsPrinterFill />
                    </button>
                    <button type="button" className="btn btn-outline-primary ">
                        <FaEdit />
                        Edit Patient</button>
                </div>

            </div>
            <hr className="m-0" />
        </>

    )
}

export default TopNav