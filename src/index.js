import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Beranda } from './pages/dashboard/Beranda';
import { BookNomorAntrian } from './pages/dashboard/BookNomorAntrian';
import { DaftarBank } from './pages/dashboard/DaftarBank';
import { DetailInfoAntrian } from './pages/dashboard/DetailInfoAntrian';
import { Register } from './pages/auth/Register';
import { Login } from './pages/auth/Login';

ReactDOM.render(
  <React.StrictMode>
    <div className="col-9 offset-2">
      <Login/>
      <Register/>
      <Beranda />
      <BookNomorAntrian />
      <DaftarBank />
      <DetailInfoAntrian />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
