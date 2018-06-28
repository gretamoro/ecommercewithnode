const photoService = require('../services/photoService');
const userlogService = require('../services/userlogService');

let self = {}

self.get = function (req, res) {
  const images = photoService.getImg();
  if (userlogService.isLogged == true) {
    console.log('true');
    return res.redirect('/cargar')
  }else {
    console.log('false');
    return res.render('index', {
      photos: images
    })
  }
}

self.post = function (req, res) {
  if (userlogService.getUserData(req.body) == true) {
    console.log('true');
    return res.json({
        data: true
    })
  }else {
    console.log('false');
    return res.json({
        data: false
    })
  }

}

module.exports = self;
