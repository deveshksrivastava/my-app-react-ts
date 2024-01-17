import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './valuable/header';
import Footer from './valuable/footer';
import Home from './valuable/home';
import About from './valuable/about';
import Body from './valuable/body';
import Error from './valuable/my-error';
// import { AppDebouncing } from './valuable/debouncing-performance';
// import Hoc from './valuable/hoc';
// import CustomHooks from './valuable/custom-hooks';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Contact from './valuable/contact';
import Services from './valuable/service';
import Help from './valuable/help';
// import { URLA } from '../url/constant'

// console.log(URLA)

const AppLayout = () => {
  return (
    <div className="relative">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/service',
        element: <Services />
      },
      {
        path: '/help',
        element: <Help />
      },
      // {
      //   path: '/contact/:contactId',
      //   element: <Contact />
      // }
      {
        path: '/contact/',
        element: <Contact />
      }
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <BrowserRouter>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </BrowserRouter>
// );

root.render(<RouterProvider router={appRouter} />);
