'use strict';

const settings = {
  server: {
    DB_URL: process.env.DB_URL,
    PORT: (process.env.PORT || 3000),
    SECRET: (process.env.SECRET || 'TOP_SECRET'),
    IS_PRODUCTION: (process.env.IS_PRODUCTION || false)
  }
};

module.exports = settings;
