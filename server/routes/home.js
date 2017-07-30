var express = require('express');
var router = express.Router();
var Home = require('../controllers/home');
var formidable = require('formidable');
var fs = require('fs');

// METHOD'S
// GET
router.post('/file', uploadFile)
router.post('/do-some', doSome)

router.get('/do-cierra', doCierra)

function uploadFile (req, res) {
  var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = '/home/desarollo2/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.render('upload');
      });
    });
}

function doSome (req, res) {
  var d = req.body
  Home.doSome(d)
  .then(function(result){
    console.log(result);
    if (result.length == 0) {
      res.json(0)
    } else {
      req.session.usuario = result
      res.json(1)
    }
    //req.session.usuario = result
  })
}

function doCierra (req, res) {
  req.session.usuario = null
  res.json(1)
}

module.exports = router;
