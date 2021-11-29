// Assignment code here
function generatePassword() {
  var pwLength = window.prompt("Enter amount of characters(8-128):");
  if (pwLength >= 8 && pwLength <= 128){
    return "success";
  } else {
    return "failed";
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
generateBtn.addEventListener("click", writePassword);
