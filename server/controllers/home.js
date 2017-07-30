var Home = require('../models/home')

module.exports.doSome = function (d) {
  return new Promise(function(resolve, reject) {
    Home.doSome(d)
    .then(function(result){
      resolve(result)
    })
  })
}
