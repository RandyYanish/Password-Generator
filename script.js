// Assignment Code + Event listener when button is pressed
document.querySelector("#generate").addEventListener("click", writePassword);

// Various Arrays
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialCharacter = ["!", "@", "#", "$", "%", "&", "*", "<", ">", "?"]

// Function in #password input
function generatePassword() {
 var passwordLength = prompt("How long would you like your password to be?\n(8-128 characters long)");

  // Validate password length
  while (passwordLength <= 7 || passwordLength >= 129) {
    alert("Password must be between 8 and 128 characters long!");
    var passwordLength = prompt("How long would you like your password to be?\n(8-128 characters long)");
  } 

  // Repeat back the length of the password
  alert(`Your password will have ${passwordLength} characters!`)

  // Prompts for criteria: lowercase, uppercase, numeric, special characters
  var lowercaseSelect = confirm("Would you like to include Lowercase letters?")
  var uppercaseSelect = confirm("Would you like to include Uppercase letters?")
  var numberSelect = confirm("Would you like to include Numbers?")
  var specialSelect = confirm("Would you like to include Special characters?")

  // Validate at least one character type selection
  while (lowercaseSelect === false && uppercaseSelect === false && numberSelect === false && specialSelect === false) {
    alert ("You must select at least one character type!")
    var lowercaseSelect = confirm("Would you like to include Lowercase letters?")
    var uppercaseSelect = confirm("Would you like to include Uppercase letters?")
    var numberSelect = confirm("Would you like to include Numbers?")
    var specialSelect = confirm("Would you like to include Special characters?")
  } 

  // Empty string to push to
  var randomPassword = "";

  // Filter out unselected character types


    // password generation
  for (let i = randomPassword.length; i == passwordLength) {
    let rand = Math.floor(Math.random() * choice.length)
  }
}


// password displayed  (either in alert or written on the page)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
