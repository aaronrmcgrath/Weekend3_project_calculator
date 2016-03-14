// var equation = {
//   numX: 0,
//   numY: 0,
//   operand: ''
// };

// var numX = null;
// var numY = null;
// var operand = '';

var values = {};

$(document).ready(function(){
  console.log('This works!');

  $('.addition').on('click', function(event){
    event.preventDefault();

    $.each($("#calculator").serializeArray(), function(i, field){
        values[field.name] = field.value;
    });

    // var value = $('#calculator').serializeArray();
    // equation.numX = value[0];
    // equation.numY = value[1];
    // equation.operand = $('button').className;

    // console.log('This is value: --->', value);
    console.log('This is input1.value: ', values.input1);
    console.log('This is input2.value: ', values.input2);
    console.log('*** This is equation object: ---->>>', values);

    // console.log('numX : ', numX);
    // console.log('numY :', numY);
    // console.log('operand :', operand);

    // $('#calculator').find('input[type=text]').val('');

    $.ajax({
      type: 'POST',
      url: '/operand/addition',
      data: values,
      success: function(data){
        console.log('Successful ajax POST: ', data);
        $.ajax({
          type: 'GET',
          url: '/addition/answer',
          success: function(data){
              $('#answer').text(data);
            }
          });
        }
      });
    });

    $('.subtraction').on('click', function(event){
      event.preventDefault();
      var value = $('#calculator').serializeArray();
      console.log('This is value: --->', value);
      console.log('This is input1.value: ', value[0].value);
      console.log('This is input2.value: ', value[1].value);

      // $('#calculator').find('input[type=text]').val('');

      $.ajax({
        type: 'POST',
        url: '/operand/subtraction',
        data: value,
        success: function(data){
          console.log('Successful ajax POST: ', data);
          $.ajax({
            type: 'GET',
            url: '/subtraction/answer',
            success: function(data){
                $('#answer').text(data);
              }
            });
          }
        });
      });

      $('.multiplication').on('click', function(event){
        event.preventDefault();
        var value = $('#calculator').serializeArray();
        console.log('This is value: --->', value);
        console.log('This is input1.value: ', value[0].value);
        console.log('This is input2.value: ', value[1].value);

        // $('#calculator').find('input[type=text]').val('');

        $.ajax({
          type: 'POST',
          url: '/operand/multiplication',
          data: value,
          success: function(data){
            console.log('Successful ajax POST: ', data);
            $.ajax({
              type: 'GET',
              url: '/multiplication/answer',
              success: function(data){
                  $('#answer').text(data);
                }
              });
            }
          });
        });

        $('.division').on('click', function(event){
          event.preventDefault();
          var value = $('#calculator').serializeArray();
          console.log('This is value: --->', value);
          console.log('This is input1.value: ', value[0].value);
          console.log('This is input2.value: ', value[1].value);

          // $('#calculator').find('input[type=text]').val('');

          $.ajax({
            type: 'POST',
            url: '/operand/division',
            data: value,
            success: function(data){
              console.log('Successful ajax POST: ', data);
              $.ajax({
                type: 'GET',
                url: '/division/answer',
                success: function(data){
                    $('#answer').text(data);
                  }
                });
              }
            });
          });


  });







//END
