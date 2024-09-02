'use client';

import React, { Suspense } from 'react';
import './App.css';
import './css/index.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import { Helmet } from 'react-helmet';
import { getTitleFromRoute } from './utils/docTile';
import { router } from './route';
import { NavBar } from './components/Navbar/NavBar';
import { Footer } from './components/Footer/Footer';
import ProtectedRoute from './route/ProtectedRoute';

export default function App() {

  const id = localStorage.getItem('userId');

  const location = useLocation();
  return (
    <PrimeReactProvider>
      <Helmet>
        <title>{getTitleFromRoute(location.pathname)}</title>
      </Helmet>
      <Suspense fallback={<div>Loading...</div>}>
        {

          (location?.pathname === "/signin" || location?.pathname === "/register") ? "" : <NavBar />
        }
        <Routes>
          {router.map((route) => {

            return (
              <Route key={route.path} path={route.path} element={route.element} />)
          })}



        </Routes>
        {
          (location?.pathname === "/signin" || location?.pathname === "/register") ? "" :
            <Footer />
        }

      </Suspense>
    </PrimeReactProvider>
  );
}
