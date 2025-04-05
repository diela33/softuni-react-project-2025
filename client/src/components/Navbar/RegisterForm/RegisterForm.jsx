import React from "react";
import "./RegisterForm.css";

const RegisterForm = () => (
  <section id="form-sign-up" className="view-section">
    <form className="text-center border border-light p-5">
      <h1>Register</h1>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" className="form-control" placeholder="Email" name="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" className="form-control" placeholder="Password" name="password" />
      </div>
      <div className="form-group">
        <label htmlFor="repeatPassword">Repeat Password</label>
        <input id="repeatPassword" type="password" className="form-control" placeholder="Repeat Password" name="repeatPassword" />
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  </section>
);

export default RegisterForm;
