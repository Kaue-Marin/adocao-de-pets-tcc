import React from "react";
import "../styles/login.css";
import bg from "../assets/bg-login.png";

export const Login = () => {
  return (
    <section className="login">
      <div className="bg">
        <img src={bg} alt="" />
      </div>

      <div className="form">
        <div className="logo">
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
};
