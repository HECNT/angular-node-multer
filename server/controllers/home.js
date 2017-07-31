var Home = require('../models/home')

module.exports.doSome = function (d) {
  return new Promise(function(resolve, reject) {
    Home.doSome(d)
    .then(function(result){
      resolve(result)
    })
  })
}

module.exports.getData = function () {
  return new Promise(function(resolve, reject) {
    Home.getData()
    .then(function(result){
      resolve(result)
    })
  })
}

module.exports.doUpload = function (d) {
  return new Promise(function(resolve, reject) {
    Home.doUpload(d)
    .then(function(result){
      resolve(result)
    })
  })
}

module.exports.doDelete = function (d) {
  return new Promise(function(resolve, reject) {
    Home.doDelete(d)
    .then(function(result){
      resolve(result)
    })
  })
}
