import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function _handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={_handleSubmit}>
      <div>
        <div>
          <label htmlFor="view-login--email">Email</label>
        </div>
        <input
          id="view-login--email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <div>
          <label htmlFor="view-login--password">Password</label>
        </div>
        <input
          id="view-login--password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/forgot-password">Forgot Password</Link>
        </li>
      </ul>
    </form>
  );
}
