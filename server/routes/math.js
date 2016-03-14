//Math ---: /server/public/routes/math.js

var express = require('express');
var router = express.Router();

//Catches the addition post and runs logic to add numX and numY returning the result
router.post('/addition/', function(req,res){
    answer = parseInt(req.body.numX) + parseInt(req.body.numY);
    // console.log(req.params);
      // var data = new Equation(parseInt(req.body.numX), parseInt(req.body.numY));
    console.log('Look, we are Adding!');
    console.log('SERVER-SIDE Answer: ', answer);
    res.send({response: answer});
});

//Catches the subtraction post and runs logic to subtract numX and numY returning the result
router.post('/subtraction/', function(req,res){
    answer = parseInt(req.body.numX) - parseInt(req.body.numY);
    // console.log(req.params);
      // var data = new Equation(parseInt(req.body.numX), parseInt(req.body.numY));
    console.log('Look, we are Adding!');
    console.log('SERVER-SIDE Answer: ', answer);
    res.send({response: answer});
});

//Catches the multiplication post and runs logic to multiply numX and numY returning the result
router.post('/multiplication/', function(req,res){
    answer = parseInt(req.body.numX) * parseInt(req.body.numY);
    // console.log(req.params);
      // var data = new Equation(parseInt(req.body.numX), parseInt(req.body.numY));
    console.log('Look, we are Adding!');
    console.log('SERVER-SIDE Answer: ', answer);
    res.send({response: answer});
});

//Catches the division post and runs logic to divides numX and numY returning the result
router.post('/division/', function(req,res){
    answer = parseInt(req.body.numX) / parseInt(req.body.numY);
    // console.log(req.params);
      // var data = new Equation(parseInt(req.body.numX), parseInt(req.body.numY));
    console.log('Look, we are Adding!');
    console.log('SERVER-SIDE Answer: ', answer);
    res.send({response: answer});
});

module.exports = router;
