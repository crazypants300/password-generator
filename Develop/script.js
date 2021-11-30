// Assignment code here
var numbers = '1234567890';
var lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
var capitalAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var combinedAlphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

var nums = false;
var lower = false;
var upper = false;
var combined = false;
var special = false;


// if they want special characters, add special characters to the password
function randomGeneratorSpecial(passwordLength) {
  var characterList = "";
  console.log(">>" + characterList);
  if (nums === true) {
    characterList += numbers;
    console.log(characterList);
  }
  if (lower === true) {
    characterList += lowerAlphabet;
    console.log(characterList);
  }
  if (upper === true) {
    characterList += capitalAlphabet;
    console.log(characterList);
  }
  if (combined === true) {
    characterList += combinedAlphabet;
    console.log(characterList);
  }
  if (special === true) {
    characterList += specialCharacters;
    console.log(characterList);
  }
  // cut the current password in half to add special characters and keep desired password length
  var result = "";

  for (var i = 0; i < passwordLength; i++) {
    // math.floor makes sure the number isnt a decimal
    // then pick random characters from the list and add it to the password
    console.log(">> inside loop" + characterList);
    result += characterList.charAt(Math.floor(Math.random() * passwordLength));
  }
  return result;
}

function generatePassword() {
  var pwLength = window.prompt("Enter amount of characters(8-128):");
  var pwSpecial = window.prompt("Should it contain SPECIAL characters?(yes/no)");
  var pwLower = window.prompt("Should it contain LOWERCASE letters?(yes/no)");
  var pwUpper = window.prompt("Should it contain UPPERCASE letters?(yes/no)");
  var pwNumbers = window.prompt("Should it contain NUMBERS?(yes/no)");

  var currentPassword = "";

  if (pwLength >= 8 && pwLength <= 128){
    //currentPassword = randomGenerator(pwLength);
    if (pwSpecial === "yes" || pwSpecial === "YES") {
      special = true;
      console.log(special.toString());
    }
    if (pwLower === "yes" || pwLower === "YES") {
      lower = true;
      console.log(special.toString());
    }
    if (pwUpper === "yes" || pwUpper === "YES") {
      upper = true;
      console.log(special.toString());
    }
    if (pwNumbers === "yes" || pwNumbers === "YES") {
      nums = true;
      console.log(special.toString());
    }
  } else {
    return invalidResponse("Please select a number between 8 and 128.");
  }
  return randomGeneratorSpecial(pwLength);
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
