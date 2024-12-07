import React from 'react';
import Authform from '../components/Authform';
import '../styles/Auth.css';

function Login() {
  return (
    <div className="auth-page">
      <Authform initialMode="login" />
    </div>
  );
}

export default Login;