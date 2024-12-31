import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import Footer from '../valuable/footer';
import Header from '../valuable/header';


const Protected = ({ children }: any) => {
  const user = localStorage.getItem('token');
  console.log(user);

  // if (!user) {
  //   return <Navigate to={'/login'} replace={true}></Navigate>;
  // }

  return (
    <>
      <Header />
      <div className=''>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Protected;
