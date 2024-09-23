//  Write a program to create an array of 5 exam scores. Calculate and print the average of the scores.
let exam_score=[10,20,30,40,50];
console.log(exam_score);
let len=exam_score.length
let sum=0;
for(let i=0;i<len;i++){
    sum+=exam_score[i];
}
let avg=sum/len;
console.log(avg);



