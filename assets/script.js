// Assignment code here

// // Prompt for Password Length (between 8 and 128 characters)
// var passwordLength = prompt("Select an amount of characters between 8 and 128");
// if (passwordLength > 128 || passwordLength < 8 || passwordLength == null){
//   alert("Must include number between 8 and 128");
// } else {
//   // add code to include in password;
//   var num = [0,1,2,3,4,5,6,7,8,9]
// }

// // Prompt for including UPPERCASE characters
// var passwordUppercase = confirm("Would you like to include Uppercase characters?")
// if (passwordUppercase == null) {
  
// } else {
//   // add code to include in password;
//   var uppercase = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z] 
// }

// // Prompt for including lowercase characters
// var passwordLowercase = confirm("Would you like to include lowercase characters?")
// if (passwordLowercase == null) {
//   // add code to not include in password;
// } else {
//   // add code to include in password;
//   var lowercase = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"]
// }

// // Prompt for including numbers
// var passwordNumeric = confirm("Would you like to include numeric characters?")
// if (passwordUppercase == null) {
//   // add code to not include in password;
// } else {
//   // add code to include in password;
// }

// // Prompt for including special characters
// var passwordSpecial = confirm("Would you like to include special characters?")
// if (passwordUppercase == null) {
//   // add code to not include in password;
// } else {
//   // add code to include in password;
// }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate").click();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
