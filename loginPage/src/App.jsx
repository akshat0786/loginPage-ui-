import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div className="form">
        <p className="title">Sign in</p>
        <span className="subtitle">
          Sign in and start managing your candidates!
        </span>
        <div className="input-form">
          <input type="text" placeholder="login" className="input-field" />
          <input type="text" placeholder="Password" className="input-field" />
        </div>
        <div className="form-bttom">
          <div className="checkbox">
            <input type="checkbox"
            className="check_box"/>
            <p>remember me </p>
          </div>

          <span className="forget_pass">Forget Password?</span>
        </div>
        <button className="btn">Login</button>

      </div>
      <div className="vector">
          <img src="./vector.png" alt="" className="imgA1"/>
          <img src="./vector1.png" alt="" className="imgB1"/>
        </div>
    </div>
  );
}

export default App;
