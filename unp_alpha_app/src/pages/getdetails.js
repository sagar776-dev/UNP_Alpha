import { useState } from "react";
//import axios from 'axios';
export default function GetDetailsForm() {
  // States for registration
  //street, school name, location, grade, ethnicity, profile visibility
  const [schoolname, setSchoolName] = useState("");
  const [street, setStreet] = useState("");
  const [location, setLocation] = useState("");
  const [grade, setGrade] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [profilevisibility, setProfileVisibility] = useState("");

  const [response, setResponse] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleSchoolName = (e) => {
    setSchoolName(e.target.value);
    setSubmitted(false);
  };

  const handleStreet = (e) => {
    setStreet(e.target.value);
    setSubmitted(false);
  };

  // Handling the username change
  const handleLocation = (e) => {
    setLocation(e.target.value);
    setSubmitted(false);
  };

  const handleGrade = (e) => {
    setGrade(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEthnicity = (e) => {
    setEthnicity(e.target.value);
    setSubmitted(false);
  };

  const onChangeValue = (e) => {
    console.log(e.target.value);
    setProfileVisibility(e.target.value);
  };

  const handleResponse = (e) => {
    setResponse(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      schoolname === "" ||
      street === "" ||
      location === "" ||
      grade === "" ||
      ethnicity === ""
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message if there is no error
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
    <div className="form">
      <div>
        <h1>User Details</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <label className="label">School Name</label>
        <input
          onChange={handleSchoolName}
          className="input"
          value={schoolname}
          type="text"
        />

        <label className="label">Street Name</label>
        <input
          onChange={handleStreet}
          className="input"
          value={street}
          type="text"
        />

        <label className="label">Location</label>
        <input
          onChange={handleLocation}
          className="input"
          value={location}
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

        <label className="label">Profile Visibility</label>
        <div onChange={onChangeValue}>
          <input type="radio" value="Show" name="Profile Visibility" /> Show
          <input type="radio" value="Hide" name="Profile Visibility" /> Hide
        </div>

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}