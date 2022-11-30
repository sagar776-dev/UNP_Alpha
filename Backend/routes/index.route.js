const express = require('express');
//const { app } = require('..');
const registrationRoutes = require('./registration');
const parents = require('./parents');
const kid = require('./kid');
const request = require('./friend_requests');
const jwt = require('../middleware/jwt');
const auth = require('../middleware/auth');

// router.get('/', (req, res) => res.send('It works.'));
// router.get('/registration/', (req, res) => res.send());

const constructorMethod = (app) => {

    
    console.log("Index router");
    // app.use('/api', jwt.validateUser);
    // app.use('/api/kid', auth.validateTimeForKidAccess);

    app.use('/register', registrationRoutes);
    app.use('/api/parents', parents);
    app.use('/api/kid', kid);
    app.use('/api/request', request);

    app.use('*', (req, res) => {
      res.status(404).json({error: 'Not found'});
    });
  };



module.exports = constructorMethod;