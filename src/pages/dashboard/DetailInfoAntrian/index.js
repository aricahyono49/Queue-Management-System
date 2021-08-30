import React from "react";
import { SideNavigasi } from "../../../components/SideNavigasi";
import "bootstrap/dist/css/bootstrap.min.css";

export const DetailInfoAntrian = () => {
  return (
    <div className="row">
      <div className="col-4">
        <SideNavigasi position="daftar bank" />
      </div>
      <div className="col-8">component DETAIL INFO ANTRIAN taruh sini yah</div>
    </div>
  );
};
