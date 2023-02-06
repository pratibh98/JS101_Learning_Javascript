//Problem 3 : Given an array of numbers find the average of all the even numbers.

let arr =[1,2,3,4,5,6,7,8,9,10];
let sum=0, Avg=0;
let y="";

for(let i=0;i<arr.length;i++){
  if(i%2==1){
    y=y+arr[i]+" ";
    sum=sum+arr[i];
    Avg++;
  }
}
console.log(y);
console.log("Avg : ",sum/Avg);