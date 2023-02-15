// Assignment code here

var num = [0,1,2,3,4,5,6,7,8,9]
// Declare Prompts in a function
function generatePrompts() {
  var passwordLength = prompt("Select an amount of characters between 8 and 128");
  if (passwordLength > 128 || passwordLength < 8 || passwordLength == null || passwordLength != num){
    alert("Must include number between 8 and 128");
  // ADD CODE TO DISPLAY PASSWORD LENGTH PROMPT AGAIN UNTIL IT MATCHES THE REQUIREMENTS:
  } else {
    // ADD CODE THAT WILL PUT CHOSEN VALUE INTO X:
    alert("Password will be x characters long");
    // ADD CODE THAT WILL SET PASSWORD TO X AMOUNT OF CHARACTERS:
  }
  var passwordUppercase = confirm("Would you like to include Uppercase characters?");
  if (passwordUppercase == null) {
    alert("Password will not contain Uppercase characters.");
    // ADD CODE TO EXCLUDE UPPERCASE CHARACTERS FROM PASSWORD:
  } else {
    alert("Password will contain Uppercase characters.");
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
    alert("Password will contain numbers.");
    // ADD CODE TO EXCLUDE NUMBERS FROM PASSWORD:
  } else {
    alert("Password will not contain numbers.");
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

// Call the prompt function
generatePrompts();

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
