let self = {}

const userData = {
  user: 'Juani',
  password: 'juanikpo23'
}

self.isLogged = false;

self.getUserData = function (data) {
  console.log(data);
  if (data.user == userData.user && data.password == userData.password ) {
    self.isLogged = true;
    return true
  }else {
    self.isLogged = false;
    return false
  }
}

module.exports = self;
