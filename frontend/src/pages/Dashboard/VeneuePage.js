import React, { useState, useRef, useEffect } from "react";
import {withSwal} from 'react-sweetalert2';


import BreadcrumbCmp from "../../components/Dashboard/Breadcrumb";
import TableCmp from "../../components/Dashboard/Table";


const VeneuePage = withSwal((props) => {

    return (
        <>
            {/* <!--begin::Content wrapper--> */}
            <div class="d-flex flex-column flex-column-fluid">
                <div id="kt_app_toolbar" class="app-toolbar pt-7 pt-lg-10">

                    {/* <!--begin::Toolbar wrapper--> */}
                    <div class="app-toolbar-wrapper d-flex flex-stack flex-wrap gap-4 w-100">

                        {/* <!--begin::Page title--> */}
                        <div class="page-title d-flex flex-column justify-content-center gap-1 me-3">
                            {/* <!--begin::Breadcrumb--> */}
                            <BreadcrumbCmp title={'Veneues'} />
                            {/* <!--end::Breadcrumb--> */}

                            {/* <!--begin::Title--> */}
                            <h1 class="page-heading d-flex flex-column justify-content-center text-dark fw-bolder fs-3 m-0">Veneues</h1>
                            {/* <!--end::Title--> */}
                        </div>
                        {/* <!--end::Page title--> */}

                        {/* <!--begin::Actions--> */}
                        <div class="d-flex align-items-center gap-2 gap-lg-3">
                            <a onClick={() => {}} class="btn btn-sm btn-flex btn-secondary align-self-center px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">
                            <i class="ki-outline ki-plus-square fs-3"></i>New Veneue</a>
                        </div>
                        {/* <!--end::Actions--> */}
                    </div>
                    {/* <!--end::Toolbar wrapper--> */}
                </div>

                <div id="kt_app_content" class="app-content flex-column-fluid">
                    <div class="row g-5 g-xl-10 mb-5 mb-xl-10">

                        <TableCmp data={[]} columns={[]}/>

                    </div>
                </div>

            </div>


            {/* <!--end::Content wrapper--> */}
        </>
    );
});

export default VeneuePage;