import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login attempt:", { userName, password });
    try {
      const response = await axios.post("http://localhost:4000/login", {
        userName,
        password,
      });
      console.log("Server response:", response.data);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "10px",
        color: "black",
      }}
    >
      <h2>Login</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          minWidth: "300px",
        }}
      >
        <div>
          <label
            htmlFor="username"
            style={{ display: "block", marginBottom: "5px", textAlign: "left" }}
          >
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            style={{ display: "block", marginBottom: "5px", textAlign: "left" }}
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#282c34",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
