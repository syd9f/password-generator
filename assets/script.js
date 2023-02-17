// Assignment code here

// Declare Prompts in a function
function generatePrompts() {
  var passwordLength = prompt("Select an amount of characters between 8 and 128");
  if (passwordLength > 128 || passwordLength < 8 || passwordLength == null){
    alert("Must include number between 8 and 128");
  // ADD CODE TO DISPLAY PASSWORD LENGTH PROMPT AGAIN UNTIL IT MATCHES THE REQUIREMENTS:
  } else {
    alert("Password will be " + passwordLength + " characters long");
  }
  var passwordUppercase = confirm("Would you like to include Uppercase characters?");
  if (passwordUppercase == null) {
    alert("Password will not contain Uppercase characters.");
    // ADD CODE TO EXCLUDE UPPERCASE CHARACTERS FROM PASSWORD:
  } else {
    alert("Password will contain Uppercase characters.");
    // ADD CODE TO INCLUDE UPPERCASE CHARACTERS IN PASSWORD:
  }
  var passwordLowercase = confirm("Would you like to include lowercase characters?");
  if (passwordLowercase == null) {
    alert("Password will not contain lowercase characters.");
    // ADD CODE TO EXCLUDE LOWERCASE CHARACTERS FROM PASSWORD:
  } else {
    alert("Password will contain lowercase characters.");
    // ADD CODE TO INCLUDE LOWERCASE CHARACTERS IN PASSWORD:
  }
  var passwordNumeric = confirm("Would you like to include numeric characters?");
  if (passwordNumeric == null) {
    alert("Password will not contain numbers.");
    // ADD CODE TO EXCLUDE NUMBERS FROM PASSWORD:
  } else {
    alert("Password will contain numbers.");
    // ADD CODE TO INCLUDE NUMBERS IN PASSWORD
  }
  var passwordSpecial = confirm("Would you like to include special characters?");
  if (passwordSpecial == null) {
    alert("Password will not contain special characters.");
    // ADD CODE TO EXCLUDE SPECIAL CHARACTERS FROM PASSWORD:
  } else {
    alert("Password will contain special characters.");
    // ADD CODE TO INCLUDE SPECIAL CHARACTERS IN PASSWORD:
  }
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
