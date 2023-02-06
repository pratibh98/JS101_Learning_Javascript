//Problem 2 : Given a character in lower case print the upper case character


let char = "h";
let LC=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y",'z']; //LC-lower_case

let UP = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; //UP-Upper_case
for(let i=0; i<LC.length;i++){

  if(char== LC[i]){
    console.log("Lower Case : ",LC[i]);
    char= UP[i];
  }
}console.log("Upper Case : ",char);