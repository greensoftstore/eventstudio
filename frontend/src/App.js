import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Link, useLocation, Navigate, Routes } from "react-router-dom";

import './App.css';
import AuthPage from "./pages/Auth/AuthPage";
import Layout from "./pages/Layout/Layout";
import SponsorRequest from './pages/Public/SponsorRequest';

import { toAbsoluteUrl } from "./helpers";


function App() {
  const useScript = url => {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  };

  useScript(toAbsoluteUrl('/assets/js/scripts.bundle.js'));
  useScript(toAbsoluteUrl('/assets/js/widgets.bundle.js'));
  useScript(toAbsoluteUrl('/assets/js/custom/widgets.js'));

  const { user: currentUser } = useSelector((state) => state.auth);

  
  return (
    <Routes>
      <Route path="/sponsor" element={<SponsorRequest />} />
      {!currentUser && (
        <>
          <Route path="/auth" element={<AuthPage />} />
          <Route index element={<Navigate to={'/auth'} replace />} />
        </>
      )}
      {currentUser && (
        <>
          <Route path="/" element={<Layout />} />
          <Route path="/auth" element={<Navigate to={'/'} replace />} />
        </>
      )}
    </Routes>
  );
}

export default App;
