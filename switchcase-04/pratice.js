let people = 20;
switch (true) {
    case (people>0 && people <10):
        console.log(20);
        break;
    case (people >= 10 && people < 30):
        console.log(50);
        break;
    case (people >= 30 && people < 60):
        console.log(130);
        break;

    default:
        console.log(60);
}

