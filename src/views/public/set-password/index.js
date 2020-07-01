import React, { useState } from 'react';

export function SetPasswordView() {
  const [password, setPassword] = useState('');

  function _handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={_handleSubmit}>
      <fieldset>
        <div>
          <label>Email</label>
        </div>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
}
