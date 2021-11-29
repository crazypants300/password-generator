// Assignment code here
function randomGenerator(length) {
  var pass = Math.random().toString(16).substr(2, length);
  // if the length of the generated string is less than the
  // the length the user has specified, make the string longer
  while(pass.length < length) {
    var pass = pass +  Math.random().toString(16).substr(2, length - pass.length);
  }
  return pass;
}

function generatePassword() {
  var pwLength = window.prompt("Enter amount of characters(8-128):");
  if (pwLength >= 8 && pwLength <= 128){
    // creates a random string equal to the length they inputed
    return randomGenerator(pwLength);
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
