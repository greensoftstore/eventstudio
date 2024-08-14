import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toAbsoluteUrl } from "../../helpers";


const SignupCmp = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');
    const [accept, setAccept] = useState(false);
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(props.loading);
    }, [props.loading])

    useEffect(() => {
        if(props.error) {
            setError(true);
            setErrorMsg(props.errorMsg);
        }
    }, [props])

    const SignupFunc = () => {
        if(email == '') {
            setError(true);
            setErrorMsg('Email Address required.');
        } else if(password == '') {
            setError(true);
            setErrorMsg('Password required.');
        } else if(repassword == '') {
            setError(true);
            setErrorMsg('Repeat Password required.');
        } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError(true);
            setErrorMsg('Email Address invalid.');
        } else if(password.length < 8) {
            setError(true);
            setErrorMsg('Password must be longer than 8 characters.');
        } else if(password != repassword) {
            setError(true);
            setErrorMsg('Re-Password invalid.');
        } else if(accept == false) {
            setError(true);
            setErrorMsg('Accept the Terms!');
        } else {
            setError(false);
            setErrorMsg('');
            props.signup(email, password);
        }
    }


    return (
        <form classNameName="form w-100">

            <div className="fv-row mb-8">
                <input type="text" placeholder="Email" name="email" className="form-control bg-transparent" onChange={(e) => {setEmail(e.target.value)}} />
            </div>
            
            <div className="fv-row mb-8" data-kt-password-meter="true">
       
                <div className="mb-1">
                    
                    <div className="position-relative mb-3">
                        <input className="form-control bg-transparent" type={show ? 'text' : 'password'} placeholder="Password" name="password" onChange={(e) => {setPassword(e.target.value)}} />
                        <span className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2">
                            {
                                show ? 
                                    <i className="ki-outline ki-eye fs-2" onClick={() => setShow(false)}></i>
                                :
                                    <i className="ki-outline ki-eye-slash fs-2" onClick={() => setShow(true)}></i>
                            }
                        </span>
                    </div>
                   
                    <div className="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
                        <div className={`flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2 ${password.length > 7 ? 'active' : ''}`}></div>
                        <div className={`flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2 ${password.length > 7 && /\d/.test(password) ? 'active' : ''}`}></div>
                        <div className={`flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2 ${password.length > 7 && /\d/.test(password) && /[A-Z]/.test(password) || password.length > 7 && /\d/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password) ? 'active' : ''}`}></div>
                        <div className={`flex-grow-1 bg-secondary bg-active-success rounded h-5px ${password.length > 7 && /\d/.test(password) && /[A-Z]/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password) ? 'active' : ''}`}></div>
                    </div>
                </div>
                <div className="text-muted">Use 8 or more characters with a mix of letters, numbers & symbols.</div>
            </div>
            <div className="fv-row mb-8">
                <input placeholder="Repeat Password" name="confirm-password" type="password" className="form-control bg-transparent"  onChange={(e) => {setRePassword(e.target.value)}}/>
            </div>
            <div className="fv-row mb-8">
                <label className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" name="toc" onChange={(e) => {setAccept(e.target.checked)}} />
                    <span className="form-check-label fw-semibold text-gray-700 fs-base ms-1">I Accept the
                    <a className="ms-1 link-primary">Terms</a></span>
                </label>
            </div>

            {error == true && (
                <div className="mb-lg-15 alert alert-danger">
                    <div className="alert-text font-weight-bold">
                        {errorMsg}
                    </div>
                </div>
            )}

            <div className="d-grid mb-10">
                <button type="button" className="btn btn-primary" disabled={loading ? true : false} onClick={() => {SignupFunc()}}>
                    {
                        loading ? 
                            <span className="indicator-label">Please wait...<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                        :
                            <span className="indicator-label">Sign Up</span>
                    }
                </button>
            </div>
            <div className="text-gray-500 text-center fw-semibold fs-6">Already have an Account?
            <a href="#" className="link-primary fw-semibold" onClick={(e) => {props.changeAuthType(0)}}>&nbsp;Sign in</a></div>
        </form>
    );
};

export default SignupCmp;