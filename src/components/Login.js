import React, { useState } from "react";
import "./../App.css";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [islogin, setIslogin] = useState(false);

  const onUserName = (event) => {
    setUserName(event.target.value);
    console.log(username);
  };

  const onPassword = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };

  const onLogin = async () => {
    try {
      const response = await axios.post("https://blogbackend-13xq.onrender.com/login", {
        username,
        password,
      });
      console.log(response.data);
      setIslogin(true);
    } catch (error) {
      console.error("Error adding number to array:", error);
      setIslogin(false);
    }
  };

  if (islogin) {
    return <Navigate to="/Blog" />;
  }

  return (
    <div className="container">
      <h1 align="center">Login Form</h1>
      <label>User Name : </label>

      <input
        type="text"
        name="username"
        placeholder="Enter your username"
        onChange={onUserName}
      />
      <label>Password : </label>
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        onChange={onPassword}
      />
      <button onClick={onLogin}>Login</button>
    </div>
  );
}
