'use strict';

const settings = {
  server: {
    DB_URL: process.env.DB_URL,
    PORT: (process.env.PORT || 3000),
    secrets: (process.env.SECRET || 'TOP_SECRET')
  }
};

module.exports = settings;
