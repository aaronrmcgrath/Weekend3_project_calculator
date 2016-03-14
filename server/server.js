//Server Application ---: /server/app.js

var express = require('express');
var app = express();
// var index = require('./routes/index.js');
var bodyParser = require('body-parser');
var path = require("path");
var answer = 0;
var data = {};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use('/', index);

app.set('port', (process.env.PORT || 5000));

app.post('/operand/:id/', function(req,res){
    // console.log(req.params);

    if(req.params.id == 'addition'){
      console.log('Look, we are Adding!');
      // console.log(data);
      // var answer = 99;
    } else if (req.params.id == 'subtraction'){
      console.log('Look, we are Subtracting!');
    } else if (req.params.id == 'multiplication'){
      console.log('Look, we are Multiplying!');
    } else if (req.params.id == 'division'){
      console.log('Look, we are Dividing!');
    }
});

// app.get('/addition/answer', function(req, res) {
//
// });

app.get('/*', function(req,res){
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, '/public/', file));
});

// app.listen(app.get('port'), function(){
//     console.log('Listening on port: ' , app.get('port'));
// });

var server = app.listen(5000, function(){
  var port = server.address().port;
    console.log('Listening on port:', port);
});
