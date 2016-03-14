//Server Application ---: /server/app.js

var express = require('express');
var app = express();
// var index = require('./routes/index.js');
var bodyParser = require('body-parser');
var path = require("path");
var answer = 0;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use('/', index);

app.set('port', (process.env.PORT || 5000));


app.post('/operand/addition/', function(req,res){
    answer = parseInt(req.body.numX) + parseInt(req.body.numY);
    // console.log(req.params);
      // var data = new Equation(parseInt(req.body.numX), parseInt(req.body.numY));
    console.log('Look, we are Adding!');
    console.log('SERVER-SIDE Answer: ', answer);
    res.send({response: answer});
});

app.post('/operand/subtraction/', function(req,res){
    answer = parseInt(req.body.numX) - parseInt(req.body.numY);
    // console.log(req.params);
      // var data = new Equation(parseInt(req.body.numX), parseInt(req.body.numY));
    console.log('Look, we are Adding!');
    console.log('SERVER-SIDE Answer: ', answer);
    res.send({response: answer});
});

app.post('/operand/multiplication/', function(req,res){
    answer = parseInt(req.body.numX) * parseInt(req.body.numY);
    // console.log(req.params);
      // var data = new Equation(parseInt(req.body.numX), parseInt(req.body.numY));
    console.log('Look, we are Adding!');
    console.log('SERVER-SIDE Answer: ', answer);
    res.send({response: answer});
});

app.post('/operand/division/', function(req,res){
    answer = parseInt(req.body.numX) / parseInt(req.body.numY);
    // console.log(req.params);
      // var data = new Equation(parseInt(req.body.numX), parseInt(req.body.numY));
    console.log('Look, we are Adding!');
    console.log('SERVER-SIDE Answer: ', answer);
    res.send({response: answer});
});

app.get('/*', function(req,res){
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, '/public/', file));
});

// app.listen(app.get('port'), function(){
//     console.log('Listening on port: ' , app.get('port'));
// });

var server = app.listen((app.get("port")), function(){
  var port = server.address().port;
    console.log('Listening on port:', port);
});





//END _-_-_-_|



//OLD CODE (I'm a digital pack-rat, actually I'm just a pack-rat!)



// var data = {};
// var Equation = function(numX, numY){
//   this.numX = numX,
//   this.numY = numY
//  }

// app.post('/operand/:id/', function(req,res){
//     // console.log(req.params);
//
//     if(req.params.id == 'addition'){
//       var data = new Equation(parseInt(req.body.numX), parseInt(req.body.numY));
//       console.log('Look, we are Adding!');
//       console.log(data);
//       console.log(data.numX, data.numY);
//       answer = data.numX + data.numY;
//       console.log('SERVER-SIDE Answer: ', answer);
//       res.send({response: answer});
//
//     } else if (req.params.id == 'subtraction'){
//       var data = new Equation(parseInt(req.body.numX), parseInt(req.body.numY));
//       answer = data.numX - data.numY;
//       console.log('Look, we are Subtracting!');
//       console.log('SERVER-SIDE Answer: ', answer);
//       res.send({response: answer});
//
//     } else if (req.params.id == 'multiplication'){
//       var data = new Equation(parseInt(req.body.numX), parseInt(req.body.numY));
//       answer = data.numX * data.numY;
//       console.log('Look, we are Multiplying!');
//       console.log('SERVER-SIDE Answer: ', answer);
//       res.send({response: answer});
//
//     } else if (req.params.id == 'division'){
//       var data = new Equation(parseInt(req.body.numX), parseInt(req.body.numY));
//       answer = data.numX / data.numY;
//       console.log('Look, we are Dividing!');
//       console.log('SERVER-SIDE Answer: ', answer);
//       res.send({response: answer});
//     }
// });


// app.get('/answer', function (req, res) {
//   res.send({response: answer});
//   console.log('Server "GET": ', answer);
// });
