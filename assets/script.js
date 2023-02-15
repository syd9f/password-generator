// Assignment code here
// var passwordLength = prompt("Select an amount of characters between 8 and 128");
// if (passwordLength > 128 || passwordLength < 8 || passwordLength == null){
//   window.alert("Must include number between 8 and 128");
//   } else {
//   // code to include in password;
//   }

// var passwordUppercase = confirm("Would you like to include Uppercase characters?")
// if (passwordUppercase == null) {
//   // code to not include in password;
// } else {
//   // code to include in password;
// }

// var passwordLowecase = confirm("Would you like to include lowercase characters?")
// if (passwordUppercase == null) {
//   // code to not include in password;
// } else {
//   // code to include in password;
// }
// var passwordNumeric = confirm("Would you like to include numeric characters?")
// if (passwordUppercase == null) {
//   // code to not include in password;
// } else {
//   // code to include in password;
// }
// var passwordSpecial = confirm("Would you like to include special characters?")
// if (passwordUppercase == null) {
//   // code to not include in password;
// } else {
//   // code to include in password;
// }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
