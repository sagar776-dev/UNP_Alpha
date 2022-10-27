import React, { useState } from 'react';
import './App.css';
import Searchpage from './searchpage';
import 'antd/dist/antd.css';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD

=======
import logo from './logo.svg';
import './components/search'
import Search from 'antd/lib/input/Search';
>>>>>>> cb270e3fa0aff0c812edcf40a99e476b348911f3


function App() {
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
<<<<<<< HEAD
  );
}
=======

>>>>>>> cb270e3fa0aff0c812edcf40a99e476b348911f3

export default App;
