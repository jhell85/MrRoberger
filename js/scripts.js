// ----------BackEnd----------
function numberCounter(number){
 let counter = parseInt(number)
 let completedArray = []
 for (let number = 0; number < counter; number++) {
   numberArray = number.toString().split("")
   console.log(numberArray.length);
   
   for (let i = 0; i < numberArray.length; i++) {
    intNumber = parseInt(numberArray[i])
    if (intNumber === 3){
      completedArray.push(`<li>${number}: Won't you be my neighbor?</li>`)
    } else if (numberArray.length === (i+2)) {
      completedArray.push(`<li>${number}</li>`)
    }
   }
 }
 console.log(completedArray);
 
}

// ----------FrontEnd -----------
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let number = $("input").val()
    $(".form-div").fadeOut(3000)
    $("img").fadeOut(2000)
    numberCounter(number)
  });
});


function printText() {
  $('#list').t(`
 <ins>3</ins>
 <li>Coffee</li>
 <li>Tea</li>
 <li>Milk</li>`)
}