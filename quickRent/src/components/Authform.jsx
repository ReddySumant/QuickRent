import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopBar from "./TopBar";
import MainNavbar from "./MainNavbar";



export default function Authform({ initialMode = "login" }) {
  const [isLogin, setIsLogin] = useState(initialMode === "login");
  const [role, setRole] = useState("Customer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setIsLogin(initialMode === "login");
  }, [initialMode]);

  const validateFields = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password || (!isLogin && !confirmPassword)) {
      toast.error("All fields are required!", { position: "top-center" });
      return false;
    }

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!", {
        position: "top-center",
      });
      return false;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!", {
        position: "top-center",
      });
      return false;
    }

    if (!isLogin && password !== confirmPassword) {
      toast.error("Passwords do not match!", { position: "top-center" });
      return false;
    }

    return true;
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      if (isLogin) {
        const user = users.find(
          (u) => u.email === email && u.password === password && u.role === role
        );
        if (user) {
          toast.success("Login successful!", { position: "top-center" });
        } else {
          toast.error("Invalid credentials!", {
            position: "top-center",
          });
        }
      } else {
        const existingUser = users.find((u) => u.email === email);
        if (existingUser) {
          toast.error("User already exists! Please log in.", {
            position: "top-center",
          });
        } else {
          setUsers([...users, { email, password, role }]);
          toast.success("Sign-up successful!", { position: "top-center" });
          setTimeout(() => {
            setIsLogin(true);
            resetForm();
          }, 2000);
        }
      }
    }
  };

  return (
    <div>
        <TopBar />
        <MainNavbar />
    <div className="auth-container">
        
      <ToastContainer />
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => {
              setIsLogin(true);
              resetForm();
            }}
          >
            Login
          </button>
          <button
          class="contactformbtn"
            className={!isLogin ? "active" : ""}
            onClick={() => {
              setIsLogin(false);
              resetForm();
            }}
          >
            Sign Up
          </button>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <h2>{isLogin ? "Login Form" : "Sign Up Form"}</h2>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
          {isLogin && (
            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div>
          )}
          <button className="login-button" type="submit">{isLogin ? "Login" : "Sign Up"}</button>
          <div className="dropdown">
            <label htmlFor="role-select">Select Role:</label>
            <select
              id="role-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="Customer">Customer</option>
              <option value="Seller">Seller</option>
            </select>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}