// Assignment code here
var passwordLength = prompt("Select an amount of characters between 8 and 128");
if (passwordLength > 128 || passwordLength < 8 || passwordLength == null){
   window.alert("Must include number between 8 and 128");
   } else {
  include in password;
   }
// var passwordUppercase = confirm("Would you like to include Uppercase characters?")
// var passwordLowecase = confirm("Would you like to include lowercase characters?")
// var passwordNumeric = confirm("Would you like to include numeric characters?")
// var passwordSpecial = confirm("Would you like to include special characters?")


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
