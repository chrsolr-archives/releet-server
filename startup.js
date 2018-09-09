'use strict';

const express = require('./configurations/express.config');
const { browse } = require('./routes/xa-routes');

(async (app) => {
  await app.initialize();
  await app.setApiRoute(browse);
})(express);
