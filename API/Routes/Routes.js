'use strict';
const express = require('express');
module.exports = function(app) {
  const accountDataController = require('../Controllers/AccountDataController');
  const apiRoutes =  express.Router();
  app.get('/',function(req,res){
    res.send('We are happy to see you using Chat Bot Webhook');
  });
  // registerUser Route
  app.route('/')
  app.get(accountDataController.processRequest);
};

