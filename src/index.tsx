import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PrimeraPartesita from './components/PrimeraPartesita';
import NavBar from './components/navBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SegundaGen from './components/SegundaGen';
import TerceraGen from './components/TerceraGen';
import CuartaGen from './components/CuartaGen';
import QuintaGen from './components/QuintaGen';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<PrimeraPartesita />} />
        <Route path='/SegundaGen' element={<SegundaGen />} />
        <Route path='/TerceraGen' element={<TerceraGen />} />
        <Route path='/CuartaGen' element={<CuartaGen />} />
        <Route path='/QuintaGen' element={<QuintaGen />} />


      </Routes>
    </BrowserRouter>

  </div>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
