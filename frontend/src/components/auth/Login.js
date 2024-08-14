import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const LoginCmp = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const LoginFunc = () => {
        if(email == '') {
            setError(true);
            setErrorMsg('Email Address required.');
        } else if(password == '') {
            setError(true);
            setErrorMsg('Password required.');
        } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError(true);
            setErrorMsg('Email Address invalid.');
        } else {
            setError(false);
            setErrorMsg('');
            props.login(email, password);
        }
    }

    useEffect(() => {
        setLoading(props.loading);
    }, [props.loading])

    useEffect(() => {
        if(props.error) {
            setError(true);
            setErrorMsg(props.errorMsg);
        }
    }, [props])

    return (
        <form className="form w-100">

            <div className="fv-row mb-8">
                <input type="type" placeholder="Email" name="email" onChange={(e) => {setEmail(e.target.value)}} className="form-control bg-transparent" />
            </div>

            <div className="fv-row mb-3">
                <input type="password" placeholder="Password" name="password" onChange={(e) => {setPassword(e.target.value)}} className="form-control bg-transparent" />
            </div>

            <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                <div></div>
                <a href="#" onClick={() => {props.changeAuthType(2)}} className="link-primary">Forgot Password ?</a>
            </div>

            {error == true && (
                <div className="mb-lg-15 alert alert-danger">
                    <div className="alert-text font-weight-bold">
                        {errorMsg}
                    </div>
                </div>
            )}

            <div className="d-grid mb-10">
                <button type="button" className="btn btn-primary" disabled={loading ? true : false} onClick={() => {LoginFunc()}}>
                    {
                        loading ? 
                            <span className="indicator-label">Please wait...<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                        :
                            <span className="indicator-label">Sign In</span>
                    }
                </button>
            </div>

            <div className="text-gray-500 text-center fw-semibold fs-6">Not a Member yet?
            <a href="#" onClick={() => {props.changeAuthType(1)}} className="link-primary">&nbsp;Sign up</a></div>


        </form>
    );
};

export default LoginCmp;