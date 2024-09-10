let age=3;
switch (true) {
    case (age < 5):
      console.log("Free");
      break;
    case (age >= 5 && age < 12):
      console.log("10");
      break;
    case (age >= 13 && age < 64):
      console.log("20");
      break;
    case (age >= 65):
      console.log("15");
      break;
    default:
      console.log("Invalid age");
  }

  

