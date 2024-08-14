import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { toAbsoluteUrl } from "../../helpers";
import { logout } from "../../actions/auth";

import LoginCmp from "../../components/auth/Login";
import SignupCmp from "../../components/auth/Signup";
import ResetPasswordCmp from "../../components/auth/ResetPassword";
import Header from "./Header";


const Sidebar = (props) => {
    let navigate = useNavigate();

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div id="kt_app_sidebar" className={`app-sidebar flex-column ${props.showOption && width < 992 ? 'drawer drawer-start drawer-on w-240px' : ''}`} data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="auto" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
            {/* <!--begin::Sidebar secondary menu--> */}
            <div id="kt_app_sidebar_menu" data-kt-menu="true" className="menu menu-sub-indention menu-rounded menu-column menu-active-bg menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-arrow-gray-500 fw-semibold fs-6 py-4 py-lg-6 ms-lg-n7 px-2 px-lg-0">
                <div id="kt_app_sidebar_menu_wrapper" className="hover-scroll-y px-1 px-lg-5" data-kt-sticky="true" data-kt-sticky-name="app-sidebar-menu-sticky" data-kt-sticky-offset="{default: false, xl: '500px'}" data-kt-sticky-release="#kt_app_stats" data-kt-sticky-width="250px" data-kt-sticky-left="auto" data-kt-sticky-top="100px" data-kt-sticky-animation="false" data-kt-sticky-zindex="95" data-kt-scroll="true" data-kt-scroll-activate="{default: true, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_header, #kt_app_header" data-kt-scroll-wrappers="#kt_app_sidebar_menu" data-kt-scroll-offset="20px">
                    {/* <!--begin:Menu item--> */}
                    <div className="menu-item">
                        <div className="menu-content">
                            <span className="menu-section fs-5 fw-bolder ps-1 py-1">Dashboard</span>
                        </div>
                    </div>
                    {/* <!--end:Menu item--> */}
                    {/* <!--begin:Menu item--> */}
                    <div className="menu-item">
                        <a className={`menu-link ${props.active == 0 ? 'active' : ''}`} onClick={() => {props.selectSidebar(0)}}>
                            <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Events</span>
                        </a>
                    </div>
                    
                    <div className="menu-item">
                        <a className={`menu-link ${props.active == 1 ? 'active' : ''}`} onClick={() => {props.selectSidebar(1)}}>
                            <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Venues</span>
                        </a>
                    </div>

                    <div className="menu-item">
                        <a className={`menu-link ${props.active == 3 ? 'active' : ''}`} onClick={() => {props.selectSidebar(3)}}>
                            <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Speakers</span>
                        </a>
                    </div>
                    
                    <div className="menu-item">
                        <a className={`menu-link ${props.active == 4 ? 'active' : ''}`} onClick={() => {props.selectSidebar(4)}}>
                            <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Sponsorships</span>
                        </a>
                    </div>
                    
                    <div className="menu-item">
                        <a className={`menu-link ${props.active == 5 ? 'active' : ''}`} onClick={() => {props.selectSidebar(6)}}>
                            <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Producers</span>
                        </a>
                    </div>
                    
                    <div className="menu-item">
                        <a className={`menu-link ${props.active == 6 ? 'active' : ''}`} onClick={() => {props.selectSidebar(7)}}>
                            <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Sponsor Requests</span>
                        </a>
                    </div>
                    
                    <div className="menu-item">
                        <a className={`menu-link ${props.active == 7 ? 'active' : ''}`} onClick={() => {props.selectSidebar(8)}}>
                            <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Speaking Requests</span>
                        </a>
                    </div>
                    
                    <div className="menu-item">
                        <a className={`menu-link ${props.active == 8 ? 'active' : ''}`} onClick={() => {props.selectSidebar(9)}}>
                            <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Speaker Onboarding</span>
                        </a>
                    </div>
    
                </div>
            </div>
        </div>
    );
};

export default Sidebar;