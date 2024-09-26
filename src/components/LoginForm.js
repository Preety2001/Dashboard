import React, { useState } from 'react';

function LoginForm({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // User login info
  const database = [
    {
      username: 'user1',
      password: 'pass1',
    },
    {
      username: 'user2',
      password: 'pass2',
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    // Find user login info
    const userData = database.find((user) => user.username === username);

    // Validate username
    if (!userData) {
      setError('Invalid username');
      return;
    }

    // Validate password
    if (userData.password !== password) {
      setError('Invalid password');
      return;
    }

    // Reset error message
    setError('');

    // Call the onLoginSuccess prop to notify App.js of successful login
    onLoginSuccess();
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleForgotPassword = () => {
    alert('Forgot password functionality is not implemented yet.');
  };

  return (
    <div className="login-container">
      <div className="login-pic">
        <img src="/image16.png" alt="Example" />
      </div>

      <div className="login-box">
        <div className="icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-key" viewBox="0 0 16 16">
            <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5" />
            <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
          </svg>
        </div>
        <h2>Admin Panel</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group remember-me">
            <div className="btcb">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
            </div>
            <div className="btrm">
              <label htmlFor="rememberMe" className="remember-me-label">&emsp;Remember me</label>
            </div>
          </div>
          <button type="submit">Login</button>
          {error && <div className="error">{error}</div>}
        </form>
        <div className="forgot-password">
          <span onClick={handleForgotPassword} className="forgot-password-link">Forgot password?</span>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
