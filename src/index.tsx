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
import RegistrationNew from './interview-2024/registation';
import Regestration1 from './interview-2024/Regestration1';
import Registration2 from './interview-2024/Registration2';
import { TodoApp } from './interview-2024/TodoApp';
import { TodoAppJune } from './interview-2024/TodoApp-july24'
import { Netflix } from './interview-2024/Netflix';
import CoutryStateDDl from './interview-2025/skills/country-state';
import FormCreation from './interview-2024/Test1-Create-form4';
import GoolgeCalender from './interview-2024/Test2-GooogleCalender2';
import MSExcel from './interview-2024/Test3-MS-Excel3';
import GooogleAutoText from './interview-2024/Test4.GoogleAutoText';
import ProgressBar from './interview-2024/Test5-Propress-bar';
import RegistrationCurd from './interview-2025/registration-curd';
import AppBootstrap from './interview-2025/performance/app-backup';
import MyLogin from './MyLogin';
import LoginNetflix from './components/netflix/login';
import RegistrationFormWithFormik from './interview-2025/RegistrationwithFormik';


const AppLayout = () => {
  useEffect(() => {
    const language = localStorage.getItem("I18N_LANGUAGE");
    if (language) {
      i18n.changeLanguage(language);
    }
  }, []);
  return (
    <div className="">
      {/* <Header /> */}
      <Router>
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<Protected> <Home /></Protected>} />
          <Route path="/login" element={<MyLogin />} />
          <Route path="/netflixlogin" element={<LoginNetflix />} />
          <Route path="/registration-formik" element={<Protected><RegistrationFormWithFormik /></Protected>} />
          <Route path="/help" element={<Protected> <Help /></Protected>} />
          <Route path="/help/:id" element={<Protected> <Regestration1 /></Protected>} />
          <Route path="/service" element={<Protected> <Services /></Protected>} />
          <Route path="/service/:id" element={<Protected> <ServiceDetails /></Protected>} />
          <Route path="/contact" element={<Protected> <Contact /></Protected>} />
          <Route path="/profile" element={<Protected> <Profile /></Protected>} />
          <Route path="/datasets" element={<Protected> <DataSets /></Protected>} />
          <Route path="/product" element={<Protected> <Product /></Protected>} />
          <Route path="/product-new" element={<Protected> <ProductNew /></Protected>} />
          <Route path="/register" element={<Protected><Registration /></Protected>} />
          <Route path="/registrationcurd" element={<Protected> <RegistrationCurd /></Protected>} />
          <Route path="/registeration" element={<Protected> <Regestration1 /></Protected>} />
          <Route path="/ddlcountrystate" element={<Protected> <CoutryStateDDl /></Protected>} />
          <Route path="/registeration-new" element={<Protected> <RegistrationNew /></Protected>} />
          <Route path="/registeration2" element={<Protected> <Registration2 /></Protected>} />
          <Route path="/registeration1" element={<Protected> <Regestration1 /></Protected>} />
          <Route path="/todoapp" element={<Protected> <TodoApp /></Protected>} />
          <Route path="/netflix" element={<Protected> <Netflix /></Protected>} />
          <Route path="/interview/create-form" element={<Protected><FormCreation /></Protected>} />
          <Route path="/interview/google-calendar" element={<Protected><GoolgeCalender /></Protected>} />
          <Route path="/interview/ms-excel" element={<Protected><MSExcel /></Protected>} />
          <Route path="/interview/google-auto-text" element={<Protected><GooogleAutoText /></Protected>} />
          <Route path="/interview/progress-bar" element={<Protected><ProgressBar /></Protected>} />
          <Route path="/todoappjune" element={<Protected><TodoAppJune /></Protected>} />
          <Route path="/appbootstrap" element={<Protected><AppBootstrap /></Protected>} />
          <Route path="/embedededpage" element={<Protected> <EmbeddedPage /></Protected>} />
          <Route path="*" element={<Protected> <Error /></Protected>} />
        </Routes>
      </Router>
    </div >
  );
};

const EmbeddedPage = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <iframe
        src="https://techbluehost.sharepoint.com/:u:/s/zxzx/ESFGgXOnb2hBmLMj2EW9t1wB7fExZhdGDY-9IpwEY8Lg5A?e=lAtne5" // replace with the URL you want to embed
        title="Embedded Page"
        style={{ border: 'none', width: '100%', height: '100%' }}
        allowFullScreen
      />
      ssdsdsd
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AppLayout />
    {/* <RegistrationNew /> */}
    {/* <Registration2 />
    <TodoApp />
    <Netflix /> */}
    {/* <TodoAppJune /> */}
    {/* <RegistrationCurd /> */}
  </React.StrictMode>
);
