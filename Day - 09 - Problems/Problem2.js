//Problem 2 : Given an array of string count the overall total number of characters

var  a = ["Hello", "Welcome", "To", "Masai"];  
let charCount = 0;  
          
for(let i=0;i<a.length;i++){
  charCount = charCount + a[i].length;
}console.log(charCount)