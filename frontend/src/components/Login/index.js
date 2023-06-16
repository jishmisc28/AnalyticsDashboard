import React from 'react';
import { GoogleLogin } from 'react-google-login';
import './styles.css';

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
    // Handle Google authentication response here
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form className="login-form">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Login</button>
      </form>
      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default Login;
