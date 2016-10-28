// back-end logic
function pingPongFun(userInput){
var result = [];
for (var i = 1; i <= userInput; i++){
  if ((i % 15) === 0){
    result.push ("ping-pong");
  } else if ((i % 5) === 0){
    result.push ("pong");
  } else if ((i % 3) === 0){
    result.push ("ping");
  } else
    result.push (i);
}
return result;
}

// front-end logic
$(document).ready(function() {
  $("form#ppForm").submit(function(event) {
    $("#result").empty();
    var userInput = parseInt($("input#enterNumber").val());
    var result = pingPongFun(userInput);
    result.forEach(function(output) {
    $("#result").append("<li>" + output + "</li>");
    event.preventDefault();
  });
});
});
