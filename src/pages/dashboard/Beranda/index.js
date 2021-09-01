import React from 'react'
import { SideNavigasi } from '../../../components/SideNavigasi'
import Beranda2 from '../../../components/Beranda'
import "bootstrap/dist/css/bootstrap.min.css";

export const Beranda = () => {
    return (
      <div className="row">
        <div className="col-4">
          <SideNavigasi position="beranda"/>
        </div>
        <div className="col-8">
            <Beranda2 />
        </div>
      </div>
    );
}
