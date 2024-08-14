import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from 'react-router-dom';


import { toAbsoluteUrl } from "../../helpers";
import { logout } from "../../actions/auth";

import LoginCmp from "../../components/auth/Login";
import SignupCmp from "../../components/auth/Signup";
import ResetPasswordCmp from "../../components/auth/ResetPassword";


const Header = (props) => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const [showUserMenu, setShowUserMenu] = useState(false);
    const [hover, setHover] = useState(false);
    const [headerShow, setHeaderShow] = useState(false);
    const [sidebarShow, setSidebarShow] = useState(false);

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

    useEffect(() => {
        if(hover) 
            setShowUserMenu(true);
        else
            setShowUserMenu(false);
    }, [hover])

    useEffect(() => {
        if(props.showOption == false) 
            setSidebarShow(false);
    }, [props])


    const LogoutBtnClick = () => {
        const res = dispatch(logout());

        if(res.success) {
            navigate('/auth');
        }
    }

    const headershowFunc = () => {
        setHeaderShow(true);
        props.headershow(true);
    }

    const sidebarshowFunc = () => {
        setSidebarShow(true);
        props.sidebarshow(true);
    }


    return (
        <div id="kt_app_header" className="app-header"  data-kt-sticky="true" data-kt-sticky-activate="{default: false, lg: true}" data-kt-sticky-name="app-header-sticky" data-kt-sticky-offset="{default: false, lg: '300px'}">

            <div className="app-container container-fluid d-flex align-items-stretch justify-content-between" id="kt_app_header_container">
                <div className="app-header-logo d-flex align-items-center me-lg-9">
                    <div className="btn btn-icon btn-color-gray-500 btn-active-color-primary w-35px h-35px ms-n2 me-2 d-flex d-lg-none" id="kt_app_header_menu_toggle" onClick={() => {headershowFunc()}}>
                        <i className="ki-outline ki-abstract-14 fs-1"></i>
                    </div>

                    <Link to={'/'}>
                        <img alt="Logo" src={toAbsoluteUrl("./event_logo.png")} className="h-30px theme-light-show" />
                    </Link>
                </div>


                <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">

                    <div className="d-flex align-items-stretch" id="kt_app_header_menu_wrapper">
                        {
                            width < 992 ? ''
                            :
                            <div className='app-header-menu app-header-mobile-drawer align-items-stretch' data-kt-drawer="true" data-kt-drawer-name="app-header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_header_menu_toggle" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_menu_wrapper'}">
                                <div className={`menu menu-rounded menu-column menu-lg-row menu-active-bg menu-title-gray-600 menu-state-gray-900 menu-arrow-gray-500 fw-semibold fw-semibold fs-6 align-items-stretch my-5 my-lg-0 px-2 px-lg-0`} id="#kt_app_header_menu" data-kt-menu="true">
                                    {/* <!--begin:Menu item--> */}
                                    <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className={`menu-item menu-lg-down-accordion me-0 me-lg-2 ${props.active == 0 && 'here menu-here-bg'}`} onClick={() => {props.selectTab(0)}}>
                                        <span className="menu-link">
                                            <span className="menu-title">Dashboard</span>
                                            <span className="menu-arrow d-lg-none"></span>
                                        </span>
                                    </div>
                                    {/* <!--end:Menu item--> */}
                                    {/* <!--begin:Menu item--> */}
                                    <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className={`menu-item menu-lg-down-accordion me-0 me-lg-2 ${props.active == 1 && 'here menu-here-bg'}`} onClick={() => {props.selectTab(1)}}>
                                        {/* <!--begin:Menu link--> */}
                                        <span className="menu-link">
                                            <span className="menu-title">Workspace</span>
                                            <span className="menu-arrow d-lg-none"></span>
                                        </span>
                                        {/* <!--end:Menu link--> */}
                                    </div>
                                    {/* <!--end:Menu item--> */}
                                </div>
                            </div>
                        }
                    </div>
                    <div className="app-navbar flex-shrink-0">
                        <div className="app-navbar-item ms-1 ms-lg-4" id="kt_header_user_menu_toggle">
                            <div className={`cursor-pointer symbol symbol-35px symbol-md-40px ${showUserMenu ? 'show menu-dropdown' : ''}`} onClick={() => {setShowUserMenu(!showUserMenu)}} data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                <img className="symbol symbol-35px symbol-md-40px" src={toAbsoluteUrl("assets/media/avatars/300-5.jpg")} alt="user" />
                            </div>
                            {
                                showUserMenu ? 
                                    <div className="show menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true"
                                        style={{zIndex: 107, position: 'fixed', inset: '0px 0px auto auto', margin: 0, transform: 'translate(-30px, 80px)'}} data-popper-placement='bottom-end'
                                        onMouseLeave={() => {setTimeout(() => {setShowUserMenu(false);}, 500)}}
                                    >
                                        <div className="menu-item px-3">
                                            <div className="menu-content d-flex align-items-center px-3">
                                                <div className="symbol symbol-50px me-5">
                                                    <img alt="Logo" src={toAbsoluteUrl("assets/media/avatars/300-5.jpg")} />
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <div className="fw-bold d-flex align-items-center fs-5">Max Smith
                                                    <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span></div>
                                                    <a href="#" className="fw-semibold text-muted text-hover-primary fs-7">max@kt.com</a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu separator--> */}
                                        <div className="separator my-2"></div>
                                        {/* <!--end::Menu separator--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-5">
                                            <a href="#" className="menu-link px-5">My Profile</a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-5 my-1">
                                            <a href="#" className="menu-link px-5">Account Settings</a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-5">
                                            <a onClick={() => {LogoutBtnClick()}} className="menu-link px-5">Sign Out</a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                    </div>
                                :   '' 
                            }
                            {/* <!--end::User account menu--> */}
                            {/* <!--end::Menu wrapper--> */}
                        </div>
                        {/* <!--end::User menu--> */}
                        {/* <!--begin::Sidebar menu toggle--> */}
                        <div className='app-navbar-item d-flex align-items-center d-lg-none ms-1 me-n2'>
                            <a href="#" className={`btn btn-icon btn-color-gray-500 btn-active-color-primary w-35px h-35px ${sidebarShow && width < 992 ? 'active' : ''}`} id="kt_app_sidebar_mobile_toggle" onClick={() => {sidebarshowFunc()}}>
                                <i className="ki-outline ki-burger-menu-2 fs-1"></i>
                            </a>
                        </div>
                        {/* <!--end::Sidebar menu toggle--> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;