import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './index.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './valuable/header';
import Body from './valuable/body';
import Error from './valuable/my-error';
import Contact from './valuable/contact';
import Services from './valuable/service';
import Help from './valuable/help';
import Footer from './valuable/footer';

const AppLayout = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/service" element={<Services />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact" element={<Contact />} />
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
