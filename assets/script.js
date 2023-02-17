// Assignment code here
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var special = "~@#$%^&*()-+?><,."

// Declare Prompts in a function
function generatePrompts() {
  var passwordLength = prompt("Select an amount of characters between 8 and 128");

  if (passwordLength > 128 || passwordLength < 8 || passwordLength == null){
    alert("Must include number between 8 and 128");
    var passwordLength = prompt("Select an amount of characters between 8 and 128");
  } else {
    alert("Password will be " + passwordLength + " characters long");
  }
  
  var passwordUppercase = confirm("Would you like to include Uppercase characters?");

  if (passwordUppercase == null) {
    alert("Password will not contain Uppercase characters.");
  } else {
    alert("Password will contain Uppercase characters.");
  }

  var passwordLowercase = confirm("Would you like to include lowercase characters?");
  if (passwordLowercase == null) {
    alert("Password will not contain lowercase characters.");
  } else {
    alert("Password will contain lowercase characters.");
  }

  var passwordNumeric = confirm("Would you like to include numeric characters?");
  if (passwordNumeric == null) {
    alert("Password will not contain numbers.");
  } else {
    alert("Password will contain numbers.");
  }

  var passwordSpecial = confirm("Would you like to include special characters?");
  if (passwordSpecial == null) {
    alert("Password will not contain special characters.");
  } else {
    alert("Password will contain special characters.");
  }
}

// Generate Password

function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePrompts);
