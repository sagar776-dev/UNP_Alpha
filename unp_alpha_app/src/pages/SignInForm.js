import { useContext, useState } from 'react';
import axios from 'axios';
//import AuthContext from '../context/AuthContext';
import { Link, NavLink, redirect } from 'react-router-dom';
import { Navigate, useNavigate } from "react-router-dom";
import { Redirect } from 'react-router';
import SignUpForm from './SignUpForm';

export default function SignInForm() {

//    const { setAuth } = useContext(AuthContext);
// States for registration

const [username, setusername] = useState("");
const [password, setPassword] = useState("");
const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
const [token, settoken] = useState("");
const [roles, setRoles] = useState("");

const [response, setResponse] = useState('');

const navigate = useNavigate();
// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
setusername(e.target.value);
setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};

const handleResponse = (e) => {
    setResponse(e);
    setSubmitted(false);
    };

// Handling the form submission
const handleSubmit = (e) => {
e.preventDefault();
if (username === '' || password === '') {
setError(true);
} else {
    let body = {
        "username": username,
        "password": password    
     }
     navigate('/home')
     console.log(body);     
     setauthenticated(true);          
    //  axios.post("http://localhost:8080/register/login", body)
    //  .then(res=>{                        
    //     //handleResponse(res.data);
    //     //if(res.status == 200)
               
    //     setRoles(res.data.roles);
    //     setauthenticated(true);
    //     settoken(res.data.accesstoken)
    //     {<Navigate to ="/home" />}
        
    //     //setError(false);
    //  })     
// setSubmitted(true);
// setError(false);
}
};

// // Showing success message
// const successMessage = () => {
//  return 
//      // <redirect to='/home'/>
    
//     //   <div
//     //   className="success"
//     //   style={{
//     //   display: submitted ? '' : 'none',
//     //   }}>
//     //       <h1>asdfasdfa{response.message}</h1>
//     //   </div>
//  ;
// };

// Showing error message if error is true
const errorMessage = () => {
return (
    <div
        className="error"
        style={{
        display: error ? '' : 'none',
    }}>
        <h1>Please enter all the fields</h1>
    </div>
);
};

return (
    <div className="form" >
        <div>
            <h1>Login</h1>
        </div>

        <div className="messages">
            {errorMessage()}
            {/* {successMessage()} */}
        </div>

        <form style={{margin:20}}>
            <label className="label">User Name/ E-mail</label>
            <input onChange={handleName} className="input"
                value={username} type="text" />

            <label className="label">Password</label>
            <input onChange={handlePassword} className="input"
                value={password} type="password" />
            
            <button onClick={handleSubmit} className="btn" type="submit">
                Submit
            </button>  
            {/* <Link to={<SignUpForm/>} ><label >Sign up</label></Link> */}
        </form>
    </div>
    );
}