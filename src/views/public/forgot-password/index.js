import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function ForgotPasswordView() {
  const [email, setEmail] = useState('');

  function _handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={_handleSubmit}>
      <div>
        <div>
          <label htmlFor="view-forgotPassword--email">Email</label>
        </div>
        <input
          id="view-forgotPassword--email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </form>
  );
}
