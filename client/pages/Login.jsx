import { useState } from "react";
// import { useHistory } from "react-router-dom";
// import axios from "axios";
// import Register from "./Register";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const history = useHistory();

  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.post("/api/login", { userName, password });
  //     if (response.data.success) {
  //       // Store user details in localStorage
  //       localStorage.setItem("user", JSON.stringify(response.data.user));
  //       history.push("/dashboard");
  //     } else {
  //       setError("Invalid login credentials");
  //     }
  //   } catch (err) {
  //     setError("Server error. Please try again later.");
  //   }
  // };

  return (
    <div>
      <h2>Login</h2>
      <label>
        <b>Username</b>
      </label>
      <input
        type="text"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <label>
        <b>Password</b>
      </label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={""}>Login</button>
      {/* {error && <p>{error}</p>} */}
      <p>
        Dont have an account? <a href={""}>Register here</a>
      </p>
    </div>
  );
};

export default Login;
