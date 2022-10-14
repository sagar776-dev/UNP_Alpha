const express = require('express');
//const { app } = require('..');
const serach = require("./serach");
const registrationRoutes = require('./registration');
const router = express.Router();

// router.get('/', (req, res) => res.send('It works.'));
// router.get('/registration/', (req, res) => res.send());

const constructorMethod = (app) => {
    app.use('/register', registrationRoutes);

    app.use('*', (req, res) => {
      res.status(404).json({error: 'Not found'});
    });
  };



module.exports = constructorMethod;