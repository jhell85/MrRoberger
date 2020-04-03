// ----------BackEnd----------
function numberCounter(number) {
  let counter = parseInt(number) + 1;
  let completedArray = [];
  for (let number = 0; number < counter; number++) {
    numberArray = number.toString().split("");
    console.log(number);
    completedArray.push(checkNumber(numberArray));

    
    
  }
  console.log(completedArray);
}
function checkNumber(numberArray) {
  for (let i = 0; i < numberArray.length; i++) {
    intNumber = parseInt(numberArray[i]);
  let two = false;
  let one = false;
  if (intNumber === 3) {
    console.log(
      `inside 3 number:${number}: i:${i}  numberArray.length:${numberArray.length} two:${two} one:${one}`
    );

    if (two === true || one === true) {
      completedArray.pop();
      completedArray.push(`<li>${number}: Won't you be my neighbor?</li>`);
      return;
    } else {
      completedArray.push(`<li>${number}: Won't you be my neighbor?</li>`);
      return;
    }
  } else if (intNumber === 2) {
    if (two === false && one === true) {
      completedArray.pop();
      completedArray.push(`<li>${number}: Boop</li>`);
      one === false;
      two === true;
    } else if (two === false) completedArray.push(`<li>${number}: Boop</li>`);
    two = true;
  } else if (intNumber === 1 && two === false) {
    completedArray.push(`<li>${number}: Beep</li>`);
  } else if (numberArray.length === i + 1) {
    return`<li>${number}</li>`;
  }
}
}

// ----------FrontEnd -----------
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let number = $("input").val();
    $(".form-div").fadeOut(3000);
    $("img").fadeOut(2000);
    numberCounter(number);
  });
});

function printText() {
  $("#list").t(`
 <ins>3</ins>
 <li>Coffee</li>
 <li>Tea</li>
 <li>Milk</li>`);
}
