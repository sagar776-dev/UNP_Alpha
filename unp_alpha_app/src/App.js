import './App.css';
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import GetDetailsForm from "./pages/getdetails";
import Profilepage from "./pages/Profile";
import KidProfile from "./pages/KidProfile";
import {Link, useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Searchpage from './pages/searchpage';
import InboxPage from './pages/inbox';

import ViewFriends from './pages/viewFriendsPage';
import KidSignUp from './pages/kidSignUpForm';

import { useCookies } from "react-cookie";



import 'antd/dist/antd.css';
import Messenger from './components/messenger/Messenger';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import { AuthContext } from "./context/AuthContext";

function App() {
  // const navigate = useNavigate();
  // const { user } = useContext(AuthContext);

  const [cookies, setCookie] = useCookies(["user"]);
  const user = cookies.user;
  return (
    // <BrowserRouter>
      <Routes >
        <Route path="/" element={user ? <Searchpage /> : <SignInForm />}/>            
          <Route exact path="/register" element={<SignUpForm />}/>
          <Route exact path="/registerkid" element={<KidSignUp />}/>
          <Route exact path="/home" element={user ? <Searchpage /> : <SignInForm />}/> 
          {/* <Route exact path="/home" element={<Searchpage />}/> */}
          {/* <Route exact path="/profile/:username" element={user ? <Profilepage /> : <SignInForm />}/> */}
          <Route exact path="/profile/:username" element={user ? <Profilepage />: <SignInForm />}/>
          <Route exact path="/login" element={<SignInForm />}/>      
          <Route exact path="/messenger" element={user ? <Messenger />: <SignInForm />}/>   
          <Route exact path="/inbox" element={user ? <InboxPage />: <SignInForm />}/>      
          <Route exact path="/profile" element={user ? <Profilepage />: <SignInForm />}/>      
          <Route exact path="/Kidprofile" element={user ? <KidProfile />: <SignInForm />}/>   
          <Route exact path="/verification" element={user.isEmailVerified ? <EmailVerification />: <SignInForm />}/>
      </Routes>      
    // </BrowserRouter>
  );
}


export default App;
