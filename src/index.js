import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/header';
import MainScreen from './components/main-screen/main-screen';
import MedServices from './components/med-services/med-services';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <div className="container">
      <MainScreen/>
      <MedServices/>
    </div>
  </React.StrictMode>
);
