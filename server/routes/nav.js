var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	if(req.session.usuario) {
		res.redirect('inicio')
	} else {
		res.redirect('/login')
	}
});

router.get('/', function(req, res) {
  res.redirect('inicio')
});

router.get('/login', function(req, res) {
	if(req.session.usuario) {
		res.redirect('inicio')
	} else {
		res.render('doSesion')
	}
});

router.get('/inicio', function(req, res) {
  if(req.session.usuario) {
		res.render('inicio', {usuario:true, url : 'http://localhost:3003/'})
	} else {
		res.redirect('/login')
	}
});

router.get('/subir/archivo', function(req, res) {
  if(req.session.usuario) {
		res.render('upload', {usuario:true, url : 'http://localhost:3003/'})
	} else {
		res.redirect('/login')
	}
});

module.exports = router;
