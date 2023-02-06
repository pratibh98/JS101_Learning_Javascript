//Problem 1 : Given an array print the position (starting with 1) and the element in a single line.

let arr=["Naruto","Suske","Itachi","Kakashi"];
let n=(arr.length);
let a="";
for(let i=0;i<n;i++){
    a = a+arr[i]+" ";
    console.log(i+1,arr[i]);
}

