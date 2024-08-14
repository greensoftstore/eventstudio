import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { toAbsoluteUrl } from "../../helpers";
import { logout } from "../../actions/auth";
import TextField from "../../components/Global/TextField";
import Select from "../../components/Global/Select";
import DatePicker from "../../components/Global/Datepicker";



const SponsorRequest = (props) => {
    let navigate = useNavigate();

    return (
        <div id="kt_body" class="app-blank bgi-size-cover bgi-position-center bgi-no-repeat" style={{backgroundImage: `url('${toAbsoluteUrl("/assets/media/auth/bg8.jpg")}')`, minHeight: '100vh'}}>

            <div class="d-flex flex-column flex-root" id="kt_app_root" style={{minHeight: '100vh'}}>

                <div class="d-flex flex-column flex-center flex-column-fluid">
                    <div class="d-flex flex-column flex-center text-center p-10">

                        <div class="card card-flush w-md-650px py-5">
                            <div class="card-body py-15 py-lg-20">

                                <div class="mb-7">
                                    <Link to={"/auth"} class="">
                                        <img alt="Logo" src={toAbsoluteUrl("/event_logo.png")} class="h-40px" />
                                    </Link>
                                </div>
                                
                                <h1 class="fw-bolder text-gray-900 mb-5">Welcome to Event Studio</h1>
                                
                                <div class="fw-semibold fs-6 text-gray-500 mb-7">
                                    This is your opportunity to get sponsor!!!
                                </div>

                                <div className="d-flex text-start flex-column">
                                    <TextField label='Email' required={true} name='email' onChange={(e) => {console.log(e.target.value)}} />

                                    <TextField label='Name' required={true} name='name' onChange={(e) => {console.log(e.target.value)}} />

                                    {/* <Select label='Veneue' name='veneue' options={[]} onChange={(e) => {console.log(e.value)}} /> */}
                                </div>

                                <div class="mb-5 mt-5">
                                    <Link to={"/auth"} class="btn btn-sm btn-primary">Request Sponsor</Link>
                                </div>

                                <div class="mb-0">
                                    <img src={toAbsoluteUrl("/assets/media/auth/welcome.png")} class="mw-100 mh-200px theme-light-show" alt="" />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SponsorRequest;