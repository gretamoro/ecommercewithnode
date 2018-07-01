const userlogService = require('../services/userlogService');

let self = {};

self.put = function (req, res) {
  userlogService.isLogged = false;
  return res.sendStatus(200);
}

module.exports = self;
