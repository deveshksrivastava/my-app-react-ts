import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Body from './valuable/body';
import Error from './valuable/my-error';
import Contact from './valuable/contact';
import Services from './valuable/service';
import Help from './valuable/help';
import Registration from './registration';
// import Login from './app';
import Protected from './auth/protected';
import Header from './valuable/header';
import Profile from './valuable/profile';
import ServiceDetails from './valuable/servicedetails';
import HelpServices from './valuable/helpdetails';
import Home from './valuable/home';
import DataSets from './valuable/datasets';
import i18n from './i18n';
import Product from './valuable/product';
import ProductNew from './valuable/product-new';
import RegistrationNew from './2024-June_Interview-prep/registation';
import Regestration1 from './2024-June_Interview-prep/Regestration1';

const AppLayout = () => {
  useEffect(() => {
    const language = localStorage.getItem("I18N_LANGUAGE");
    if (language) {
      i18n.changeLanguage(language);
    }
  }, []);
  return (
    <div className="relative min-h-[100vh]">
      <Router>
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          <Route
            path="/"
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />
          <Route
            path="/service"
            element={
              <Protected>
                <Services />
              </Protected>
            }
          />
          <Route
            path="/help"
            element={
              <Protected>
                <Help />
              </Protected>
            }
          />
          <Route
            path="/service/:id"
            element={
              <Protected>
                <ServiceDetails />
              </Protected>
            }
          />
          <Route
            path="/help/:id"
            element={
              <Protected>
                <HelpServices />
              </Protected>
            }
          />
          <Route
            path="/contact"
            element={
              <Protected>
                <Contact />
              </Protected>
            }
          />
          <Route
            path="/profile"
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />
          <Route
            path="/datasets"
            element={
              <Protected>
                <DataSets />
              </Protected>
            }
          />
          <Route
            path="/product"
            element={
              <Protected>
                <Product />
              </Protected>
            }
          />
          <Route
            path="/product-new"
            element={
              <Protected>
                <ProductNew />
              </Protected>
            }
          />
          <Route
            path="/registeration"
            element={
              <Protected>
                <Regestration1 />
              </Protected>
            }
          />
          <Route path="/register" element={<Registration />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router> 
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AppLayout />
    {/* <RegistrationNew /> */}
  </React.StrictMode>
);
