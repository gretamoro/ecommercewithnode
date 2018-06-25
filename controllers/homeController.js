const photoService = require('../services/photoService');
const userlogService = require('../services/userlogService');

let self = {}

self.get = function (req, res) {
  const images = photoService.getImg();
  if (userlogService.getUserData(req.body) == true) {
    return res.json({
        data: 'true'
      })
  }else {
    return res.render('index', {
      photos: images
    })
  }
}

self.post = function (req, res) {
  userlogService.getUserData(req.body);
  return res.redirect('/');
}

module.exports = self;
