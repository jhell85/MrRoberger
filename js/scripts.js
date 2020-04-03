$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let number = $("input").val()
    console.log(number);
    
  });
});
