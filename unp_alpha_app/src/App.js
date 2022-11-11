import './App.css';
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import GetDetailsForm from "./pages/getdetails";
import Profilepage from "./pages/Profile";
import {Link, useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Searchpage from './pages/searchpage';
import InboxPage from './pages/inbox';

import 'antd/dist/antd.css';
import Messenger from './components/messenger/Messenger';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { AuthContext } from "./context/AuthContext";

function App() {
  // const navigate = useNavigate();
  // const { user } = useContext(AuthContext);
  return (
    // <BrowserRouter>
      <Routes >
        <Route path="/" element={<SignInForm />}/>            
          <Route exact path="/register" element={<SignUpForm />}/>
          {/* <Route exact path="/home" element={user ? <Searchpage /> : <SignInForm />}/> */}
          <Route exact path="/home" element={<Searchpage />}/>
          {/* <Route exact path="/profile/:username" element={user ? <Profilepage /> : <SignInForm />}/> */}
          <Route exact path="/profile/:username" element={<Profilepage />}/>
          <Route exact path="/login" element={<SignInForm />}/>      
          <Route exact path="/messenger" element={<Messenger />}/>   
          <Route exact path="/inbox" element={<InboxPage />}/>      
          <Route exact path="/profile" element={<Profilepage />}/>      
      </Routes>      
    // </BrowserRouter>
  );
}


export default App;
