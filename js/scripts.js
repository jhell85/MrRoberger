// ----------BackEnd----------
function numberCounter(number) {
  let counter = parseInt(number) + 1;
  let completedArray = [];
  for (let number = 0; number < counter; number++) {
    numberArray = number.toString().split("");
    completedArray.push(checkNumber(numberArray, number));
  }
  return completedArray;
}

function checkNumber(numberArray, number) {
  let mutatedNumber;
  let two = false;
  for (let i = 0; i < numberArray.length; i++) {
    intNumber = parseInt(numberArray[i]);
    console.log(
      `number:${number}: i:${i}  numberArray.length:${numberArray.length} two:${two}`
    );
    if (intNumber === 3) {
      return `<li>${number}: Won't you be my neighbor?</li>`;
    } else if (intNumber === 2 && two === false) {
      mutatedNumber = `<li>${number}: Boop!</li>`;
      two = true;
    } else if (intNumber === 1 && two === false) {
      mutatedNumber = `<li>${number}: Beep!</li>`;
    }
    if (numberArray.length === i + 1) {
      if (!mutatedNumber) {
        return `<li>${number}</li>`;
      } else {
        return mutatedNumber;
      }
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
    robotArray = numberCounter(number);
    printText(robotArray);
  });
});

function printText(robotArray) {
  robotString = `<ins>2</ins>`
  robotArray.forEach(element => {
    robotString += element;
  });
  $("#list").t(robotString);
}
