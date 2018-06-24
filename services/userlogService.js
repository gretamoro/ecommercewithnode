let self = {}

const userData = {
  user: 'Juani',
  password: 'juanikpo23'
}

self.getUserData = function (data) {
  if (data.user == userData.user && data.password == userData.password ) {
    return true
  }else {
    return false
  }
}

module.exports = self;
