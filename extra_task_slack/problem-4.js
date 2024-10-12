// An airplane altitude currently is 1000ft and its altitude reduces each second by 10ft. Write a program which will print “Flight arrived” when the airplane altitude reaches 0ft.

function airplane(){
    let currentfeet=1000;
    let second=10;
    while(currentfeet>=0){
        if(currentfeet==0){
            console.log(`Flight arrived ${currentfeet}`);
        }
        // console.log("The current feet :"+currentfeet);
        currentfeet-=10;
    }
}
airplane();