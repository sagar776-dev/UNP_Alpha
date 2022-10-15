const express = require('express');
//const { app } = require('..');
const registrationRoutes = require('./registration');
const parents = require('./parents');

// router.get('/', (req, res) => res.send('It works.'));
// router.get('/registration/', (req, res) => res.send());

const constructorMethod = (app) => {

    app.use('/register', registrationRoutes);
    app.use('/parents', parents);

    app.use('*', (req, res) => {
      res.status(404).json({error: 'Not found'});
    });
  };



module.exports = constructorMethod;