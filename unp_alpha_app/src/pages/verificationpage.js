import { useContext, useState } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { Redirect } from 'react-router-dom';


export default function verificationpage() {
    const { user } = useContext(AuthContext);
    const [email, setemail] = useState('');
    if(user.isEmailVerified || user.Role==="kid")
    {
        return( <Redirect to='/home'></Redirect>)
    }
    const handleSubmit =(e)=>
    {
        e.preventDefault();
        body={"email":email}
        axios.post("", body)
        .then(res=>{                        
        if(res.data)
        {
            if(res.data.verified)
                return(<alert >Email sent please check your inbox or spam.</alert>)            
        }
     })
    }

    const checkVerification =(e)=>
    {
        e.preventDefault();
        axios.get("http://localhost:8080/register/getParentById/"+user._id).then(
            res=>{                        
                if(res.data)
                {
                    if(res.data.user.isEmailVerified)
                    {
                        setauth(res.data.user);
                        return( <Redirect to='/home'></Redirect>)
                    }            
                }
            }
        )
    }

    const handleemail = (e)=>
    {
        setemail(e.target.value);
    }
    return (
        <div>
            <h1>Please verify your email.</h1>
        <form>
            <label className="label">Email Address:</label>
            <input onChange={handleemail} className="input"
                value={email} type="text" />
        
            <button onClick={handleSubmit} className="btn" type="submit">
                Submit
            </button>
            <button onClick={checkVerification} className="btn" type="submit">
                verified?
            </button>
        </form>
    </div>
      );
}