'use strict';

const express = require('./configurations/express.config');

(async (app) => {
  app.initialize();
})(express);
