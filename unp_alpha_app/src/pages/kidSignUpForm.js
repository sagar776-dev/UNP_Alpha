import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";


export default function SignInForm() {
  // States for registration
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userid, setUserID] = useState("");
  const [location, setLocation] = useState("");
  const [street, setStreet] = useState("");
  const [school, setSchool] = useState("");
  const [grade, setGrade] = useState("");
  const [ethnicity, setEthnicity] = useState("");

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
  const handleUserName = (e) => {
    setUserName(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handleUserID = (e) => {
    setUserID(e.target.value);
    setSubmitted(false);
  };

  const handleStreet = (e) => {
    setStreet(e.target.value);
    setSubmitted(false);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
    setSubmitted(false);
  };

  const handleSchool = (e) => {
    setSchool(e.target.value);
    setSubmitted(false);
  };

  const handleGrade = (e) => {
    setGrade(e.target.value);
    setSubmitted(false);
  };

  const handleEthnicity = (e) => {
    setEthnicity(e.target.value);
    setSubmitted(false);
  };

  const handleResponse = (e) => {
    setResponse(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (firstname === "" || lastname === "" || password === "") {
      setError(true);
    } else {
      let body = {
        first_name: firstname,
        last_name: lastname,
        username: username,
        password: password,
        gender: gender,
        age: age,
        location: location,
        street: street,
        school: school,
        grade: grade,
        ethnicity: ethnicity,
        parentid: cookies.user.id
      };
      console.log(body);
      axios
        .post("http://localhost:8080/register/signup/kid", body)
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
      </div>
    );
  };

  return (
    <div className="form">
      <div>
        <h1>Kid registration</h1>
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

        <label className="label">User Name</label>
        <input
          onChange={handleUserName}
          className="input"
          value={username}
          type="text"
        />

        <label className="label">Password</label>
        <input
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
        />

        <label className="label">Location</label>
        <input
          onChange={handleLocation}
          className="input"
          value={location}
          type="text"
        />

        <label className="label">Street</label>
        <input
          onChange={handleStreet}
          className="input"
          value={street}
          type="text"
        />

        <label className="label">School</label>
        <input
          onChange={handleSchool}
          className="input"
          value={school}
          type="text"
        />

        <label className="label">Grade</label>
        <input
          onChange={handleGrade}
          className="input"
          value={grade}
          type="text"
        />

        <label className="label">Ethnicity</label>
        <input
          onChange={handleEthnicity}
          className="input"
          value={ethnicity}
          type="text"
        />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>

      </form>
    </div>
  );
}
