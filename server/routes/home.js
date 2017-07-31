var express = require('express');
var router = express.Router();
var Home = require('../controllers/home');
var formidable = require('formidable');
var fs = require('fs');

var storage = multer.diskStorage({
  destination: 'public/upload/',
  filename: function (req, file, cb) {
    //cb(null, file.originalname.replace(path.extname(file.originalname), "") + '-' + Date.now() + path.extname(file.originalname))
    Home.doUpload(file.originalname)
    .then(function(result){
      cb(null, file.originalname)
    })
  }
})

var upload = multer({ storage: storage })

router.post('/upload-file', upload.single('file'), function(req,res,next){
    console.log('Uploade Successful ', req.file, req.body);
});

// METHOD'S
// GET
router.post('/file', uploadFile)
router.post('/do-some', doSome)
router.post('/do-delete', doDelete)

router.get('/do-cierra', doCierra)
router.get('/get-data', getData)

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

function getData (req, res) {
  Home.getData()
  .then(function(result){
    res.json(result)
  })
}

function doDelete (req, res) {
  var d = req.body
  Home.doDelete(d)
  .then(function (result){
    res.json(result)
  })
}

module.exports = router;
