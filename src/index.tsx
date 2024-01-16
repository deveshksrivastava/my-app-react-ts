import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import { AppDebouncing } from './valuable/debouncing-performance';
import Hoc from './valuable/hoc';
import CustomHooks from './valuable/custom-hooks';
import TestPage from './valuable/test-page';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import { URLA } from '../url/constant'

// console.log(URLA)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
    {/* <AppDebouncing /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
