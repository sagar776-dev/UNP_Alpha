import './App.css';
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import GetDetailsForm from "./getdetails";
import {Link, useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Searchpage from './searchpage';
import 'antd/dist/antd.css';
import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function Signup() {
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();

    // 👇️ redirect to /contacts
    navigate('/SignUpForm');
  };



  return (
    <BrowserRouter>
      <div className="App">        
        <Routes>
          <Route path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Searchpage />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
function Signin() {
  return <SignInForm />;
}




function App() {
return ( 
<div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/SignInForm">Login</Link>
            </li>
            <li>
              <Link to="/SignUpForm">Sign Up</Link>
            </li>
            <li>
              <Link to="/GetDetailsForm">Get Details</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/SignInForm" element={<SignInForm />} />
          <Route path="/SignUpForm" element={<SignUpForm />} />
          <Route path="/GetDetailsForm" element={<GetDetailsForm />} />
        </Routes>
      </div>
    </div>
);
}

export default App;