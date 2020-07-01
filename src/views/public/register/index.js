import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormInputEmail, FormInputPassword } from "@/components";

export function RegisterView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function _handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={_handleSubmit}>
      <fieldset>
        <div>
          <div>
            <label htmlFor="view-register--email">Email</label>
          </div>
          <FormInputEmail
            value={email}
            handleChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <div>
            <label htmlFor="view-register--password">Password</label>
          </div>
          <FormInputPassword
            value={password}
            handleChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <div>
            <label htmlFor="view-register--confirmPassword">
              Confirm Password
            </label>
          </div>
          <input
            id="view-register--confirmPassword"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
        </div>
      </fieldset>
      <button type="submit">Register</button>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/forgot-password">Forgot Password</Link>
        </li>
      </ul>
    </form>
  );
}
