import React from "react";
import { SideNavigasi } from "../../../components/SideNavigasi";
import "bootstrap/dist/css/bootstrap.min.css";
import { DaftarListBank } from "../../../components/DaftarBank";

export const DaftarBank = () => {
  return (
    <div className="row">
      <div className="col-4">
        <SideNavigasi position="daftar bank" />
      </div>
      <div className="col-8">
        <DaftarListBank></DaftarListBank>
      </div>
    </div>
  );
};
