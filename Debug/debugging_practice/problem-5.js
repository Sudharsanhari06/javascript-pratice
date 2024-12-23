checkNumber(-5);
checkNumber(0);
checkNumber(10);//function only one parameter
function checkNumber(num) {
  if (num < 0)//remove the semi colon // change the lessthan operator
  console.log("Negative");
  else if (num > 0) {// change the greatorthan operator
    console.log("positive");
  } else {
    console.log("Zero");
  }
}