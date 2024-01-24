import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './index.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Body from './valuable/body';
import Error from './valuable/my-error';
import Contact from './valuable/contact';
import Services from './valuable/service';
import Help from './valuable/help';
import Footer from './valuable/footer';
import Breadcrumbs from './valuable/pages/breadcrums';
import Header from './valuable/header';
import Registration from './registration';

const AppLayout = () => {
  return (
    <>
      <Router>
       <Header />
        <Routes>
          <Route path="/home" element={<Body />} />
          

          <Route path="/" element={<Body />} />
          {/* <Route path="/service" element={<Services />} /> */}
          <Route path="/service/:name" element={<Services />} />
          <Route path="/help/:name" element={<Help />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Registration />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>
);
