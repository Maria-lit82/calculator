
let rownum = 0; 

$(document).ready(function() {
    // alert('DOM fully loaded!');
    $('#history').val(sessionStorage.getItem('historyOfCalculations'));
});

function myfunction() {
  alert("кнопка нажата");
}

$('#equal').on('click', () =>{
  rownum += 1;


  let expression = $("#equation").val();
  console.log("У нас такое выражение: "+expression+"\nРезультат этого выражения равен: ");
  $('#history').val($('#history').val() + "\n" + rownum + ": " + expression);
  $("#equation").val(math.evaluate(expression));
  console.log($("#equation").val());

  // Всё это можно упростить до такого:
  // $('#history').val(rownum + ": " + $('#history').val() + "\n" + rownum + ": " + expression);
  // $("#equation").val(math.evaluate($("#equation").val()));
  // console.log("У нас такое выражение: "+expression+"\nРезультат этого выражения равен: "+$("#equation").val());

  sessionStorage.setItem('historyOfCalculations', $('#history').val());
});

$('#clear').on('click', () => {
  $('#equation').val('');
});

$('#backspace').on('click', () => {
  let len = $('#equation').val().length;
  console.log($('#equation').val(), len);
  $('#equation').val($('#equation').val().substr(0,len-1));
});