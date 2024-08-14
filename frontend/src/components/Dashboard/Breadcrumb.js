import React, { useState, useRef } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toAbsoluteUrl } from "../../helpers";



const BreadcrumbCmp = (props) => {
    let navigate = useNavigate();

    return (
        <ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-7">
            {/* <!--begin::Item--> */}
            <li class="breadcrumb-item text-gray-700 fw-bold lh-1 mx-n1">
                <a onClick={() => navigate('/auth')} class="text-hover-primary">
                    <i class="ki-outline ki-home text-gray-700 fs-6"></i>
                </a>
            </li>
            <li class="breadcrumb-item">
                <i class="ki-outline ki-right fs-7 text-gray-700"></i>
            </li>
            <li class="breadcrumb-item text-gray-700 fw-bold lh-1 mx-n1">Dashboard</li>
            <li class="breadcrumb-item">
                <i class="ki-outline ki-right fs-7 text-gray-700"></i>
            </li>
            <li class="breadcrumb-item text-gray-500 mx-n1">{props.title}</li>
            {/* <!--end::Item--> */}
        </ul>
    );
};

export default BreadcrumbCmp;