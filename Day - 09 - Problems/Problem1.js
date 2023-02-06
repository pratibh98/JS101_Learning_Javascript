//Problem 1 : Given a string count the number of words in that string

var  a = "Hello Welcome To Masai";  
let charCount = 0;  
          
for(let i=0;i<a.length;i++){
  charCount = charCount + a[i].length;
}console.log(charCount)