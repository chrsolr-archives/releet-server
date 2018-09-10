'use strict';

const express = require('express');
const body_parser = require('body-parser');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const { IS_PRODUCTION, PORT } = require('./settings').server;

const _setRootRoutes = Symbol('_setRootRoutes');

class ExpressConfig {
  constructor(app = express()) {
    this.app = app;
    this.api = express.Router();
  }

  async initialize() {
    try {
      if (IS_PRODUCTION === false) {
        this.app.use(morgan('dev'));
      }

      this.app.use(body_parser.urlencoded({ extended: true }));
      this.app.use(body_parser.json());

      this.app.use('/libs', express.static(path.resolve('./node_modules')));
      this.app.use('/scripts', express.static(path.resolve('./public/scripts')));
      this.app.use('/views', express.static(path.resolve('./public/views')));

      this.app.use('/api', this.api);
      this.app.use(cors());

      this[_setRootRoutes]();

      this.app.listen(PORT, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.info('Releet server running at port:', PORT);
        }
      });
    } catch (e) {
      console.error(e);
    }
  }

  async setApiRoute({method, route, handler}) {
    try {
      this.api[method](route, handler);
    } catch (e) {
      console.error(e);
    }
  }

  async [_setRootRoutes]() {
    try {
      this.app.get('/', (req, res) => res.sendFile(path.resolve('./public/views/index.html')));
      this.app.get('/*', (req, res) => res.sendFile(path.resolve('./public/views/index.html')));
    } catch (e) {
      console.error(e);
    }
  }
}

module.exports = new ExpressConfig();
