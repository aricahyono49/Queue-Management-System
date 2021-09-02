import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


export const Registerform = () => {
    return (
    <div 
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center"
        }}>
    <div class="container-sm" style={{width: "30vw"}}>    
    <form>
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/Logo_BRI.png" class="img-thumbnail"/>
        <h3 style={{textAlign: "center", fontWeight: "bold"}}>Register Form</h3>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="example@mail.com" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" />
        </div>

        <button type="submit" className="btn btn-primary btn-block">Register Account</button>
          <p className="forgot-password text-right">
          Sudah punya akun? <a href="#">Login</a>
          </p>
    </form>
    </div>
    </div>
  );
};

export default Registerform;