import { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { useCookies } from "react-cookie";
import { Routes, Route, useNavigate } from "react-router-dom";

export default function SignInForm() {
  const { setAuth } = useContext(AuthContext);
  // States for registration
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [response, setResponse] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [cookies, setCookie] = useCookies(["user"]);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleResponse = (e) => {
    setCookie("token", e.accessToken, { path: "/" });
    setCookie("user", e.profile, { path: "/" });
    setResponse(e);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || password === "") {
      setError(true);
    } else {
      let body = {
        username: name,
        password: password,
      };
      axios.post("http://localhost:8080/register/login", body).then((res) => {
        handleResponse(res.data);
        const token = res.data.accesstoken;
        const roles = res.data.roles;
        //setAuth({ roles, token });
        setSubmitted(true);
        setError(false);
        navigate("/home");
      });
      // setSubmitted(true);
      // setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>{response.message}</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="form form-login">
      <div>
        <h1>Login</h1>
      </div>

      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        <label className="label">User Name/ E-mail</label>
        <input
          onChange={handleName}
          className="input"
          value={name}
          type="text"
        />

        <label className="label">Password</label>
        <input
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
        />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
