//Problem 4: Print the average of even numbers from 1 to 100 (both included)

let num=1;
let sum=0,avg;
while(num<=100){
  if(num%2==0){
    console.log(num);      
  }
  sum=sum+num;  
  num++;
}
avg=(sum/num);
console.log();
console.log("Avg: ",avg);