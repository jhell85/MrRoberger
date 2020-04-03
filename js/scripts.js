$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let number = $("input").val()
    console.log(number);
    $(".form-div").fadeOut(3000)
    $("img").fadeOut(3000)
    
  });
});
