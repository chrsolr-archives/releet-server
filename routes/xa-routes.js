'use strict';

const { urls } = require('../configurations/settings');

exports.browse = {
  method: 'get',
  route: '/game',
  cb: (req, res) => {
    return res.status(200).send({
      name: urls.browse_url('a', 1)
    });
  }
};
