import React from "react";
import { SideNavigasi } from "../../../components/SideNavigasi";
import "bootstrap/dist/css/bootstrap.min.css";
import { BookAntrian } from "../../../components/BookNomorAntrian";

export const BookNomorAntrian = () => {
  return (
    <div className="row">
      <div className="col-4">
        <SideNavigasi position="book nomor antrian" />
      </div>
      <div className="col-8">
        <BookAntrian></BookAntrian>
      </div>
    </div>
  );
};
