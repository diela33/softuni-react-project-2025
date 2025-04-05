import React from "react";
import "./LoginForm.css";

const LoginForm = () => (
  <section id="form-login" className="view-section">
    <form className="text-center border border-light p-5">
      <h1>Login</h1>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" className="form-control" placeholder="Email" name="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" className="form-control" placeholder="Password" name="password" />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  </section>
);

export default LoginForm;
