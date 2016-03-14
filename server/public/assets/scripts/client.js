//Client ---: /client/client.js

var values = {};

//jQuery that has the listeners for the click events
$(document).ready(function(){
  console.log('This works!');

  $('.clear').on('click', clearCalc);

  $('.addition').on('click', calculate);
  $('.subtraction').on('click', calculate);
  $('.multiplication').on('click', calculate);
  $('.division').on('click', calculate);

});

//Captures the inputs and the operand and puts them in an the object: objEquation
//From there sends a POST to the server to run the logic on the inputs
var calculate = function(event){
  event.preventDefault();

  $.each($("#calculator").serializeArray(), function(i, field){
    values[field.name] = field.value;
  });

  var objEquation = {
    'numX' : values.input1,
    'numY' : values.input2,
    'operand' : $(this).data().operand
  }
  console.log(objEquation);

  $.ajax({
    type: 'POST',
    url: '/math/' + objEquation.operand,
    data: objEquation,
    success: function(data){
      console.log('Successful ajax POST: ', data);
      $('#answer').text(data.response);
    }
  });
}


//Clears the calculator
function clearCalc(){
  values = {};
  // console.log('Here is values after clear: ', values);
  $('.answer').text('0');
  $('#calculator').find('input[type=number]').val('');
  // console.log('CLICK!');
}



//END_-_-_-_-|
