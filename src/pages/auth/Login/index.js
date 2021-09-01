import React from "react";
import { LoginForm } from "../../../components/Login";

export const Login = () => {
  return (
    <div>
      <div className="row">
        <div className="col-4 offset-4">
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  );
};
