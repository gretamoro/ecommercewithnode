const photoService = require('../services/photoService');
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

self.post = function (req, res) {
  const body = req.body;
  if ((body.url && body.producto && body.precio) != '') {
    photoService.pushArray(body)
    return res.json({
      complete: true
    });
  }else {
    return res.json({
      complete: false
    })
  }
}

module.exports = self;
