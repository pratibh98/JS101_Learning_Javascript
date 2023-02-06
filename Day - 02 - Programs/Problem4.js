//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let input_username = "Naruto";
let input_password = "Kurama";

let username = "Naruto";
let password = "Kurama";

if(input_username==username){
  if(input_password==password){
    console.log("The user can login!");
  }else{
    console.log("Sorry incorrect Password!!");
  }
}else{
   console.log("Sorry incorrect Username!!");
}