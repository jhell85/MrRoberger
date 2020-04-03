$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let number = $("input").val()
    console.log(number);
    $(".form-div").fadeOut(3000)
    $("img").fadeOut(2000, printText())
  });
});

function printText() {
  $('#t').t(`<div id="t">
 <ins>3</ins>hell world on a pause</ins>
</div>`)
}