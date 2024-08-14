import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from 'react-router-dom';

import { toAbsoluteUrl } from "../../helpers";
import { login, signup } from "../../actions/auth";

import LoginCmp from "../../components/auth/Login";
import SignupCmp from "../../components/auth/Signup";
import ResetPasswordCmp from "../../components/auth/ResetPassword";


const Login = (props) => {
    let navigate = useNavigate();

    const [type, setType] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch();

    const changeAuthType = (type) => {
        setType(type);
    };

    const loginfunc = (email, password) => {
        setLoading(true);

        dispatch(login(email, password))
        .then(() => {
            navigate("/");
        })
        .catch(() => {
            setError(true);
            setLoading(false);
        });
    }

    const signupfunc = (email, password) => {
        setLoading(true);

        dispatch(signup(email, password))
        .then(() => {
            setType(0);
            setError(false);
            setLoading(false);
        })
        .catch(() => {
            setError(true);
            setLoading(false);
        });
    }

    if(isLoggedIn) {
        return <Navigate to="/" />;
    }

    return (
        <div id="kt_body" className="app-blank bgi-size-cover bgi-attachment-fixed bgi-position-center" style={{backgroundImage: `url('${toAbsoluteUrl("/assets/media/auth/bg10.jpeg")}')`, height: '100vh'}}>
            
            <div className="d-flex flex-column flex-root h-100" id="kt_app_root">
                
                <div className="d-flex flex-column flex-lg-row flex-column-fluid">

                    <div className="d-flex flex-lg-row-fluid">
                        <div className="d-flex flex-column flex-center pb-0 pb-lg-10 p-10 w-100">
                            <img className="theme-light-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20" src={toAbsoluteUrl("/assets/media/auth/agency.png")} alt="" />
                            <img className="theme-dark-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20" src={toAbsoluteUrl("/assets/media/auth/agency-dark.png")} alt="" />

                            <h1 className="text-gray-800 fs-2qx fw-bold text-center mb-7">Fast, Efficient and Productive</h1>

                            <div className="text-gray-600 fs-base text-center fw-semibold">In this kind of post,
                            <a href="#" className="opacity-75-hover text-primary me-1">the blogger</a>introduces a person they’ve interviewed
                            <br />and provides some background information about
                            <a href="#" className="opacity-75-hover text-primary me-1">the interviewee</a>and their
                            <br />work following this is a transcript of the interview.</div>
                        </div>
                    </div>

                    <div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12">

                        <div className="bg-body d-flex flex-column flex-center rounded-4 w-md-600px p-10">

                            <div className="d-flex flex-center flex-column align-items-stretch h-lg-100 w-md-400px">
   
                                <div className="d-flex flex-center flex-column flex-column-fluid pb-15 pb-lg-20">


                                        <div className="text-center mb-11">
                                            
                                            <h1 className="text-dark fw-bolder mb-3">{type == 0 ? 'Sign In' : type == 1 ? 'Sign Up' : 'Forget Password ?'}</h1>
                                            
                                            <div className="text-gray-500 fw-semibold fs-6">{type == 2 ? 'Enter your email to reset your password.' : 'Your Social Campaigns'}</div>
                                            
                                        </div>
                                        
                                        {/* Social Login Part */}
                                        {
                                            type != 2 ?
                                                <div className="row g-3 mb-9">
                                                    <div className="col-md-6">
                                                        <a href="#" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                                                        <img alt="Logo" src={toAbsoluteUrl('assets/media/svg/brand-logos/google-icon.svg')} className="h-15px me-3" />Sign in with Google</a>
                                                    </div>
                                                    
                                                    <div className="col-md-6">
                                                        <a href="#" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                                                        <img alt="Logo" src={toAbsoluteUrl('assets/media/svg/brand-logos/apple-black.svg')} className="h-15px me-3" />Sign in with Apple</a>
                                                    </div>
                                                </div>
                                            :   ''
                                        }
                                        

                                        {
                                            type != 2 ?
                                                <div className="separator separator-content my-14">
                                                    <span className="w-125px text-gray-500 fw-semibold fs-7">Or with email</span>
                                                </div>
                                            :   ''
                                        }

                                        {
                                            type == 0 ? <LoginCmp changeAuthType={changeAuthType} login={loginfunc} loading={loading} error={error} errorMsg={message} /> : 
                                            type == 1 ? <SignupCmp changeAuthType={changeAuthType} signup={signupfunc} loading={loading} error={error} errorMsg={message} /> : 
                                            <ResetPasswordCmp changeAuthType={changeAuthType} loading={loading} error={error} />
                                        }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;