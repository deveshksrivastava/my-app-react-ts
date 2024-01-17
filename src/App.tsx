import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './valuable/header';
import Footer from './valuable/footer';
import Home from './valuable/home';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './valuable/about';
import Body from './valuable/body';
import Error from './valuable/my-error';
export default function App() {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
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
        path: '/about',
        element: <About />
      }
      // {
      //   path: '/contact',
      //   element: <Contact />
      // },
      // {
      //   path: '/restaurants/:resId',
      //   element: <RestaurantMenu />
      // }
    ],
    errorElement: <Error />
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<RouterProvider router={appRouter} />);
