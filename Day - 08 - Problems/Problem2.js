//Problem 2: Print Prime Numbers from 1 to given limit

for(let i=2;i<=15;i++){
  let count=0;
  for(let j=2;j<i;j++){
    if(i%j==0){
      count =1;
    }
  }if(count==0){
    console.log(i)
  }
}