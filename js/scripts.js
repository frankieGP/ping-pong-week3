$(document).ready(function(){
  $("form#pingpong").submit(function(event) {

    var userInput = $("input#enterNumber").val()
    event.preventDefault();
  $("#resultDisplay").text(userInput);
  });
});
