// Assignment code here

// Declare Prompts in a function
function generatePrompts() {
  var passwordLength = prompt("Select an amount of characters between 8 and 128");
  while (passwordLength > 128 || passwordLength < 8 || passwordLength == null || isNaN(passwordLength)) {
    alert("Must include number between 8 and 128");
    var passwordLength = prompt("Select an amount of characters between 8 and 128");
  }
  alert("Password will be " + passwordLength + " characters long");

  var passwordUppercase = confirm("Would you like to include Uppercase characters?");
  if (passwordUppercase == false) {
    alert("Password will not contain Uppercase characters.");
  } else {
    alert("Password will contain Uppercase characters.");
  }

  var passwordLowercase = confirm("Would you like to include lowercase characters?");
  if (passwordLowercase == false) {
    alert("Password will not contain lowercase characters.");
  } else {
    alert("Password will contain lowercase characters.");
  }

  var passwordNumeric = confirm("Would you like to include numeric characters?");
  if (passwordNumeric == false) {
    alert("Password will not contain numbers.");
  } else {
    alert("Password will contain numbers.");
  }

  var passwordSpecial = confirm("Would you like to include special characters?");
  if (passwordSpecial == false) {
    alert("Password will not contain special characters.");
  } else {
    alert("Password will contain special characters.");
  }

  while (passwordUppercase == false && passwordLowercase == false && passwordNumeric == false && passwordSpecial == false) {
    alert("You must include at least one option to generate password")
    var passwordUppercase = confirm("Would you like to include Uppercase characters?");
    var passwordLowercase = confirm("Would you like to include lowercase characters?");
    var passwordNumeric = confirm("Would you like to include numeric characters?");
    var passwordSpecial = confirm("Would you like to include special characters?");
  }

}

// Generate Password

function generatePassword() {
  var charset = '';
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numeric = "0123456789";
  var special = "~@#$%^&*()-+?><,.";

  console.log(charset)
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
