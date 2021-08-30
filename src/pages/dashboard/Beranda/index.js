import React from 'react'
import { SideNavigasi } from '../../../components/SideNavigasi'
import "bootstrap/dist/css/bootstrap.min.css";

export const Beranda = () => {
    return (
      <div className="row">
        <div className="col-4">
          <SideNavigasi position="beranda"/>
        </div>
        <div className="col-8">
            components BERANDA taruh sini yah
        </div>
      </div>
    );
}
