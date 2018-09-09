'use strict';

const base_url = 'http://www.xboxachievements.com';
const settings = {
  server: {
    DB_URL: process.env.DB_URL,
    PORT: (process.env.PORT || 3000),
    SECRET: (process.env.SECRET || 'TOP_SECRET'),
    IS_PRODUCTION: (process.env.IS_PRODUCTION || false)
  },
  urls: {
    base_url,
    browse_url: (letter, page) => `${base_url}/browsegames/xbox-one/${letter}/${page}`
  }
};

module.exports = settings;
