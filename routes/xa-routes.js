'use strict';

const { base_url } = require('../configurations/settings');

exports.browse = {
  method: 'get',
  route: '/game',
  cb: (req, res) => {
    return res.status(200).send({
      name: base_url
    });
  }
};
