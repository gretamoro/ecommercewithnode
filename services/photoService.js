let self = {}

let defaultImages = [{
  url: 'https://cdn-images-1.medium.com/max/1600/1*vB-b9hlZjeHhZRaMA47SZg.jpeg',
  producto: 'Bento de pescado',
  precio: 600
},{
  url: 'https://cotoacademy.com/wp-content/uploads/2016/06/%E5%BC%81%E5%BD%93.jpg',
  producto: 'Bento Panda',
  precio: 800
},{
  url: 'https://i.ytimg.com/vi/SIctv-Txoo0/maxresdefault.jpg',
  producto: 'Bento Osito',
  precio: 800
},{
  url: 'https://res.cloudinary.com/sublimeninetynine/image/upload/c_scale,w_900/v1470653828/japanese%20food/japanese-food-art-sublime99-17.jpg',
  producto: 'Bento Pikachu',
  precio: 1000
},{
  url: 'http://youbentmywookie.com/wookie/gallery/1211_product_bento/product_bento_8.JPG',
  producto: 'Bento Joystick',
  precio: 950
},{
  url: 'https://res.cloudinary.com/sublimeninetynine/image/upload/c_scale,w_900/v1470653825/japanese%20food/japanese-food-art-sublime99-22.jpg',
  producto: 'Bento gatitos',
  precio: 1100
}];

self.pushArray = function (data) {
  defaultImages.unshift({
    url: data.url,
    producto: data.producto,
    precio: data.precio
  })
  return defaultImages
}

self.getImg = function () {
  return defaultImages
}

module.exports = self;
