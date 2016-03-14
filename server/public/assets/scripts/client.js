
var values = {};

$(document).ready(function(){
  console.log('This works!');

  $('.clear').on('click').empty();

  $('.addition').on('click', calculate);
  $('.subtraction').on('click', calculate);
  $('.multiplication').on('click', calculate);
  $('.division').on('click', calculate);

  });


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

  // console.log('This is value: --->', value);
  // console.log('This is input1.value: ', values.input1);
  // console.log('This is input2.value: ', values.input2);
  // console.log('*** This is equation object: ---->>>', objEquation);

  // $('#calculator').find('input[type=text]').val('');

  $.ajax({
    type: 'POST',
    url: '/operand/' + objEquation.operand + '/',
    data: objEquation,
    success: function(data){
      console.log('Successful ajax POST: ', data);
      $.ajax({
        type: 'GET',
        url: '/answer/',
        success: function(data){
            $('#answer').text(data.response);
            console.log('ANSWER: ',data);
          }
        });
      }
    });
    $('#calculator')[0].reset();
  }





//END
