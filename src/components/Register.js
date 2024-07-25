import React, { useState } from "react";
import "./../App.css";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function Register() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isregister, setIsregister] = useState(false);

  const onUserName = (event) => {
    setUserName(event.target.value);
  };

  const onPassword = (event) => {
    setPassword(event.target.value);
  };

  const onRegister = async () => {
    try {
      const response = await axios.post(
        "https://blogbackend-13xq.onrender.com/register",
        {
          username,
          password,
        }
      );
      console.log(response.data);
      setIsregister(true);
    } catch (error) {
      console.error("Error adding number to array:", error);
      setIsregister(false);
    }
  };

  if (isregister) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1 align="center">Register Form</h1>
      <table border={5} align="center">
        <tr>
          <td>
            <label>User Name : </label>
          </td>
          <td>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              onChange={onUserName}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Password : </label>
          </td>
          <td>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={onPassword}
            />
          </td>
        </tr>
        <button onClick={onRegister}>Register</button>
      </table>
    </div>
  );
}
