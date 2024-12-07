import React from 'react';
import Authform from '../components/Authform';
import '../styles/Auth.css';

function Register() {
  return (
    <div className="auth-page">
      <Authform initialMode="signup" />
    </div>
  );
}

export default Register;