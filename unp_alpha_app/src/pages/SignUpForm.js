import { useState } from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';


export default function SignInForm() {
  // States for registration
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [response, setResponse] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [cookies, setCookie] = useCookies(["user"]);

  // Handling the name change
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setSubmitted(false);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    setSubmitted(false);
  };

  // Handling the username change
  const handleGender = (e) => {
    setGender(e.target.value);
    setSubmitted(false);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleResponse = (e) => {
    setResponse(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      password === ""
    ) {
      setError(true);
    } else {
      let body = {
        first_name: firstname,
        last_name: lastname,
        email: email,
        password: password,
        phone: "987654321",
        gender: gender,
        age: age,
      };
      axios
        .post("http://localhost:8080/register/signup/parent", body)
        .then((res) => {
          handleResponse(res.data);
          setSubmitted(true);
          setError(false);
        });
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
        <h1>User Registration</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <label className="label">First Name</label>
        <input
          onChange={handleFirstName}
          className="input"
          value={firstname}
          type="text"
        />

        <label className="label">Last Name</label>
        <input
          onChange={handleLastName}
          className="input"
          value={lastname}
          type="text"
        />

        <label className="label">Gender</label>
        <input
          onChange={handleGender}
          className="input"
          value={gender}
          type="text"
        />

        <label className="label">Age</label>
        <input onChange={handleAge} className="input" value={age} type="text" />

        <label className="label">Email</label>
        <input
          onChange={handleEmail}
          className="input"
          value={email}
          type="email"
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
