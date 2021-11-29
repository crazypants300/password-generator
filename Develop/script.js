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

function randomGeneratorSpecial(length) {
  var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var result = length;
  for (var i = 0; i < length.length; i++) {
    result += specialCharacters.charAt(Math.floor(Math.random() * length.length)) 
  }
  return result;
}

function generatePassword() {
  var pwLength = window.prompt("Enter amount of characters(8-128):");
  if (pwLength >= 8 && pwLength <= 128){
    pwSpecial = window.prompt("Should it contain special characters?(yes/no)");
    if (pwSpecial === "yes" || pwSpecial === "YES") {
      return randomGeneratorSpecial(randomGenerator(pwLength));
    } else {
      // creates a random string equal to the length they inputed
      return randomGenerator(pwLength);
    }
  } else {
    return invalidResponse("Please select a number between 8 and 128.");
  }
}

function invalidResponse(str) {
  window.alert(str); 
  return generatePassword();
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
