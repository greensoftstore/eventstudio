import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from 'react-router-dom';

import { toAbsoluteUrl } from "../../helpers";
import { logout } from "../../actions/auth";

import LoginCmp from "../../components/auth/Login";
import SignupCmp from "../../components/auth/Signup";
import ResetPasswordCmp from "../../components/auth/ResetPassword";
import Header from "./Header";
import Sidebar from "./Sidebar";


const Footer = (props) => {
    let navigate = useNavigate();

    return (
        <div id="kt_app_footer" class="app-footer d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
            
            <div class="text-dark order-2 order-md-1">
                <span class="text-muted fw-semibold me-1">{new Date().getFullYear()}&copy;</span>
                <a href="#" target="_blank" class="text-gray-800 text-hover-primary">Events Management</a>
            </div>
            
            <ul class="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                <li class="menu-item">
                    <a href="#" target="_blank" class="menu-link px-2">About</a>
                </li>
                <li class="menu-item">
                    <a href="#" target="_blank" class="menu-link px-2">Support</a>
                </li>
                <li class="menu-item">
                    <a href="#" target="_blank" class="menu-link px-2">Purchase</a>
                </li>
            </ul>
            
        </div>
    );
};

export default Footer;