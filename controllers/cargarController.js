const userlogService = require('../services/userlogService');

let self = {};

self.get = function (req, res) {
  if (userlogService.isLogged == true) {
    return res.render('cargar', {
      user: 'Juani'
    })
  }else {
    return res.redirect('/')
  }

}

module.exports = self;
