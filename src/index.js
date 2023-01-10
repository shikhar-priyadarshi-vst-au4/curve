import React from 'react';
import {BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import Dashboard from "./layouts/Dashboard";
import Pools from "./layouts/Pools";
import Swap from "./layouts/Swap";
import './assets/styles/index.css';
import MainLayout from './layouts/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/curve' element={<MainLayout/>}>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='pools' element={<Pools/>}/>
          <Route path='swap' element={<Swap/>}/>
          <Route path="*" element={<Navigate to="/curve/pools"/>}/>
        </Route>
        <Route path="*" element={<Navigate to="/curve/pools"/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
