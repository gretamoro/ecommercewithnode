const userlogService = require('../services/userlogService');

let self = {};

self.get = function (req, res) {
  return res.render('cargar', {
    user: 'Juani'
  })
}

module.exports = self;
