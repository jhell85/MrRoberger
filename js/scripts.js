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
    if (intNumber === 3) {
      return `<div class="text-left">${number}: Won't you be my neighbor?</div>`;
    } else if (intNumber === 2 && two === false) {
      mutatedNumber = `<div class="text-left">${number}: Boop!</div>`;
      two = true;
    } else if (intNumber === 1 && two === false) {
      mutatedNumber = `<div class="text-left">${number}: Beep!</div>`;
    }
    if (numberArray.length === i + 1) {
      if (!mutatedNumber) {
        return `<div class="text-left">${number}</div>`;
      } else {
        return mutatedNumber;
      }
    }
  }
}

// ----------FrontEnd -----------
$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    let number = $("input").val();
    $(".form-div").fadeOut(2000);
    $("img").fadeOut(2000);
    robotArray = numberCounter(number);

    addColumns(robotArray, number);
  });
});

function addColumns(array, number) {
  let columns = Math.ceil(number / 25);
  let counter = 1;
  while (counter < columns + 1) {
    if (counter === 1) {
      let columnedArray = array.slice(0, 26);
      array.splice(0, 26);
      printText(columnedArray, counter);
    } else {
      let columnedArray = array.slice(0, 25);
      array.splice(0, 25);
      printText(columnedArray, counter)
    }
    counter++;
  }
}

function printText(array, number) {
  $("#list").append(`<div id="column${number}" class="col col-md-3"></div>`);
  console.log(array);

  let stringArray = "";
  array.forEach((element) => {
    stringArray += element;
  });
  $(`#column${number}`).t(stringArray);
}
