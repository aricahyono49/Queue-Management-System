import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bri from "./BRI.jpg";

export const LoginForm = () => {
  return (
    <div>
      <img src={bri} width="200px" height="160px" />
      <div class="container">
        <h1>Login</h1>
        <form>
          <label>Username</label>
          <br />
          <input type="text" />
          <br />
          <label>Password</label>
          <br />
          <input type="password" />
          <br />
          <button>Log in</button>
          <div>
            <a href="#" id="signup">
              Belum Punya Akun?
            </a>
            <a href="#" id="signup">
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
