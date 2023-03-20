// Assignment Code + Event listener when button is pressed
document.querySelector("#generate").addEventListener("click", writePassword);

// Const object to hold various arrays
const characterSet = {
  lowerAlphabet: "abcdefghijklmnopqrstuvwxyz",
  upperAlphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "1234567890",
  specialCharacter: "`~!@#$%^&*()-_=+\|]}[{;:,<.>/?",
};

// Function in #password input
function generatePassword() {
  var passwordCharacters = "";

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
  if (lowercaseSelect) {passwordCharacters += characterSet.lowerAlphabet}
  var uppercaseSelect = confirm("Would you like to include Uppercase letters?")
  if (uppercaseSelect) {passwordCharacters += characterSet.upperAlphabet}
  var numberSelect = confirm("Would you like to include Numbers?")
  if (numberSelect) {passwordCharacters += characterSet.number}
  var specialSelect = confirm("Would you like to include Special characters?")
  if (specialSelect) {passwordCharacters += characterSet.specialCharacter}

  // Validate at least one character type selection
  while (lowercaseSelect === false && uppercaseSelect === false && numberSelect === false && specialSelect === false) {
    alert ("You must select at least one character type!");
    var lowercaseSelect = confirm("Would you like to include Lowercase letters?");
    if (lowercaseSelect) {passwordCharacters += characterSet.lowerAlphabet};
    var uppercaseSelect = confirm("Would you like to include Uppercase letters?");
    if (uppercaseSelect) {passwordCharacters += characterSet.upperAlphabet};
    var numberSelect = confirm("Would you like to include Numbers?");
    if (numberSelect) {passwordCharacters += characterSet.number};
    var specialSelect = confirm("Would you like to include Special characters?");
    if (specialSelect) {passwordCharacters += characterSet.specialCharacter};
  }; 

  // Repeat back the character type list
  alert(`Your password will include characters from this list: \n${passwordCharacters}`)

  // Empty string to push to
  var randomPassword = "";

    // password generation
  for (i = 0; i < passwordLength; i++) {
    randomPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  };
  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}