import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from 'react-router-dom';
import {Helmet} from "react-helmet";

import { toAbsoluteUrl } from "../../helpers";
import { logout } from "../../actions/auth";

import LoginCmp from "../../components/auth/Login";
import SignupCmp from "../../components/auth/Signup";
import ResetPasswordCmp from "../../components/auth/ResetPassword";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import EventsPage from "../Dashboard/EventsPage";
import VeneuePage from "../Dashboard/VeneuePage";


const Layout = (props) => {
    let navigate = useNavigate();

    const [tab, setTab] = useState(0); 
    const [sidebar, setSidebar] = useState(0); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [headershow, setHeaderShow] = useState(false);
    const [sidebarshow, setSidebarShow] = useState(false);
    const [headerSidebar, setHeaderSidebar] = useState(false);

    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch();

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        // window.location.reload();

        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    // useEffect(() => {
    //     const html = document.getElementsByClassName('drawer-overlay')[0];
    //     if(html)
    //         html.remove();
    //     console.log(html)
    // }, [headershow, sidebarshow])

    useEffect(() => {
        const element = document.querySelector('.drawer-overlay');
        if (element) {
            element.remove();
        }
    }, [headershow, ]);

    useEffect(() => {
        if(width > 992) {
            if(document.body.querySelector('.drawer-overlay')) {
                document.body.querySelector('.drawer-overlay').remove();
                document.getElementsByTagName("body")[0].removeAttribute("data-kt-drawer-app-sidebar");
                document.getElementsByTagName("body")[0].removeAttribute("data-kt-drawer");
                setSidebarShow(false);
                setHeaderShow(false);
            }
        }
    }, [width])


    if(!isLoggedIn) {
        return <Navigate to="/auth" />;
    }

    const selectSidebar = (selected) => {
        if(document.body.querySelector('.drawer-overlay')) {
            document.body.querySelector('.drawer-overlay').remove();
            document.getElementsByTagName("body")[0].removeAttribute("data-kt-drawer-app-sidebar");
            document.getElementsByTagName("body")[0].removeAttribute("data-kt-drawer");
        }
        setSidebarShow(false);
        setSidebar(selected);
    }

    const selectTab = (selected) => {
        setTab(selected);
        setHeaderShow(false)
        if(document.body.querySelector('.drawer-overlay')) {
            document.body.querySelector('.drawer-overlay').remove();
            document.getElementsByTagName("body")[0].removeAttribute("data-kt-drawer-app-header-menu");
            document.getElementsByTagName("body")[0].removeAttribute("data-kt-drawer");
        }
    }

    const headershowFunc = () => {
        setHeaderShow(true)
    }

    const sidebarshowFunc = () => {
        setSidebarShow(true);
        setHeaderSidebar(false);
    }


    return (
        <div id="kt_app_body" data-kt-app-header-fixed-mobile="true" data-kt-app-sidebar-enabled="true" data-kt-app-sidebar-fixed="false" data-kt-app-sidebar-push-header="true" data-kt-app-sidebar-push-toolbar="true" data-kt-app-sidebar-push-footer="true" data-kt-app-toolbar-enabled="true" class="app-default">

            <div className={`app-header-menu app-header-mobile-drawer align-items-stretch ${headershow && width < 992 ? 'drawer drawer-start w-250px drawer-on' : 'd-none'}`} data-kt-drawer="true" data-kt-drawer-name="app-header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_header_menu_toggle">
                <div className={`menu menu-rounded menu-column menu-lg-row menu-active-bg menu-title-gray-600 menu-state-gray-900 menu-arrow-gray-500 fw-semibold fw-semibold fs-6 align-items-stretch my-5 my-lg-0 px-2 px-lg-0`} id="#kt_app_header_menu" data-kt-menu="true">
                    {/* <!--begin:Menu item--> */}
                    <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className='menu-item me-0 me-lg-2 here menu-here-bg' onClick={() => {selectTab(0)}}>
                        <span className={`menu-link ${tab == 0 && ' active'}`}>
                            <span className="menu-title">Dashboard</span>
                        </span>
                    </div>
                    {/* <!--end:Menu item--> */}
                    {/* <!--begin:Menu item--> */}
                    <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className='menu-item me-0 me-lg-2 here menu-here-bg' onClick={() => {selectTab(1)}}>
                        {/* <!--begin:Menu link--> */}
                        <span className={`menu-link ${tab == 1 && ' active'}`}>
                            <span className="menu-title">Workspace</span>
                        </span>
                        {/* <!--end:Menu link--> */}
                    </div>
                    {/* <!--end:Menu item--> */}
                </div>
            </div>
            
            <div class="d-flex flex-column flex-root app-root" id="kt_app_root">
                <div class="app-page flex-column flex-column-fluid" id="kt_app_page" style={{minHeight: '100vh'}}>
                    
                    <Header active={tab} selectTab={selectTab} headershow={headershowFunc} sidebarshow={sidebarshowFunc} showOption={headerSidebar}/>

                    <div class="app-wrapper d-flex" id="kt_app_wrapper">
                        {/* <!--begin::Wrapper container--> */}
                        <div class="app-container container-fluid d-flex">
                            <Sidebar active={sidebar} selectSidebar={selectSidebar} showOption={sidebarshow}/>
                            
                            {/* <!--begin::Main--> */}
						    <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
                                {
                                    sidebar == 0 ? <EventsPage />
                                    : sidebar == 1 ? <VeneuePage />
                                    : ''
                                }

                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>
		    </div>

            <div id="kt_scrolltop" class="scrolltop" data-kt-scrolltop="true">
                <i class="ki-outline ki-arrow-up"></i>
            </div>

            <Helmet>
				{/* <script src={toAbsoluteUrl('/assets/plugins/global/plugins.bundle.js')} crossorigin="anonymous" async></script> */}
				{/* <script src={toAbsoluteUrl('/assets/js/scripts.bundle.js')} crossorigin="anonymous" async></script>
				<script src={toAbsoluteUrl("/assets/js/widgets.bundle.js")} crossorigin="anonymous" async></script>
				<script src={toAbsoluteUrl("/assets/js/custom/widgets.js")} crossorigin="anonymous" async></script> */}
            </Helmet>
        </div>
    );
};

export default Layout;