var express = require('express');
var router = express.Router();
var path = require('path');
var addition = require('../modules/addition.js');

router.get('/*', function(req,res){
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, '../public/', file));
});

module.exports = router;
