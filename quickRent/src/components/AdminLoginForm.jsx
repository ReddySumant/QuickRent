import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopBar from "./TopBar";
import MainNavbar from "./MainNavbar";
import Button from 'react-bootstrap/Button';


export default function AdminLoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validateFields = () => {
    if (!username && !password) {
      toast.error("All fields are required!", { position: "top-center" });
      return false;
    }

    if (!username) {
      toast.error("Username is required!", { position: "top-center" });
      return false;
    }

    if (!password) {
      toast.error("Password is required!", { position: "top-center" });
      return false;
    }

    const usernameRegex = /^[a-zA-Z]+$/;
    if (!usernameRegex.test(username)) {
      toast.error("Username must contain only letters!", {
        position: "top-center",
      });
      return false;
    }

    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error("Password must be at least 6 characters and include letters, numbers, and special characters!", {
        position: "top-center",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      toast.success("Admin Login Successful!", { position: "top-center" });
    }
  };

  return (
    <div>
        <TopBar />
        <MainNavbar />
    <div className="admin-login-container">
      <ToastContainer />
      <div className="form-container">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit} className="admin-form">
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="ad-login-btn" type="submit">Login</button>
        </form>
      </div>
    </div>
    </div>
  );
}