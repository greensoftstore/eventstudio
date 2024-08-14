import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from 'react-router-dom';
import { toAbsoluteUrl } from "../../helpers";


const ResetPasswordCmp = (props) => {

    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch();


    return (
        <form className="form w-100">
            <div className="fv-row mb-8">
                <input type="text" placeholder="Email" name="email" className="form-control bg-transparent" />
            </div>
            
            <div className="d-flex flex-wrap justify-content-center pb-lg-0">
                <button type="button" id="kt_password_reset_submit" className="btn btn-primary me-4">
                    <span className="indicator-label">Submit</span>
                    <span className="indicator-progress">Please wait...
                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                </button>
                <a href="#" className="btn btn-light" onClick={(e) => {props.changeAuthType(0)}}>Cancel</a>
            </div>
        </form>
    );
};

export default ResetPasswordCmp;