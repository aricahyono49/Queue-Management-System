import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './style.css';
export const SideNavigasi = (props) => {
    const iconArrow = <i className="bi bi-caret-right-fill" />
    const checkPosition = (params) => props.position === params
    return (
      <div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <h1>
              bank bri <i className="bi bi-list float-end"></i>
            </h1>
          </li>
          <li className="nav-item">
            {checkPosition("beranda") && iconArrow} beranda
          </li>
          <li className="nav-item">
            {checkPosition("book nomor antrian") && iconArrow} book nomor
            antrian
          </li>
          <li className="nav-item">
            {checkPosition("daftar bank") && iconArrow} daftar bank & info
            antrian
          </li>
          <li className="nav-item">sign out</li>
        </ul>
      </div>
    );
}
