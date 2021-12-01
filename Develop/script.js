// Assignment code here
// initialized variables for different character libraries
var numbers = '1234567890';
var lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
var capitalAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// initialized variables to check if they want to use the respective character library
var nums = false;
var lower = false;
var upper = false;
var special = false;

// initialized variable for password length (the user decides this, 8 is the lowest they can choose)
var pwLength = 8;

// function to add each respective character type to the password until the password is the correct length
function randomGeneratorSpecial(passwordLength) {
  var result = "";
  // keep doing the code until password is the requested length
  while(result.length < passwordLength) {
    if (nums === true) {
      // check again if the password is the correct length to avoid extra characters being added
      if (result.length < passwordLength) {
        // takes the current password and adds a random number from our number list to it
        // math.floor converts math.random decimal to an integer
        result += numbers.charAt(Math.floor(Math.random() * passwordLength));
      }
    }
    if (lower === true) {
      // check again if the password is the correct length to avoid extra characters being added
      if (result.length < passwordLength) {
        // takes the current password and adds a random lowercase letter from our lowercase list to it
        result += lowerAlphabet.charAt(Math.floor(Math.random() * passwordLength));
      }
    }
    if (upper === true) {
      // check again if the password is the correct length to avoid extra characters being added
      if (result.length < passwordLength) {
        // takes the current password and adds a random uppercase letter from our uppercase list to it
       result += capitalAlphabet.charAt(Math.floor(Math.random() * passwordLength));
      }
    }
    if (special === true) {
      // check again if the password is the correct length to avoid extra characters being added
      if (result.length < passwordLength) {
        // takes the current password and adds a random special character from our special characters list to it
        result += specialCharacters.charAt(Math.floor(Math.random() * passwordLength));
      }
    }
  }
  // returns the current checked password
  return result;
}

function generatePassword() {
  // get password length
  pwLength = window.prompt("Enter amount of characters(8-128):");
  // reinitialize variables in case the user wants a different type of password
  nums = false; 
  lower = false; 
  upper = false; 
  special = false;
  // check if the password length inputed is between 8 - 128
  if (pwLength >= 8 && pwLength <= 128){
    // keeps asking them until what characters the user wants in the password until at least one option is selected
    while (special === false && lower === false && upper == false && nums === false){
      var pwSpecial = window.prompt("Should it contain SPECIAL characters?(yes/no)");
      // if the user wants special characters, set the special value to true
      if (pwSpecial === "yes" || pwSpecial === "YES") {
        special = true;
      } else {
        special = false;
      }
      console.log("Special:" + special.toString());
      var pwLower = window.prompt("Should it contain LOWERCASE letters?(yes/no)");
      // if the user wants lowercase characters, set the lower value to true
      if (pwLower === "yes" || pwLower === "YES") {
        lower = true;
      } else {
        lower = false;
      }
      console.log("Lower:" + lower.toString());
      var pwUpper = window.prompt("Should it contain UPPERCASE letters?(yes/no)");
      // if the user wants uppercase characters, set the upper value to true
      if (pwUpper === "yes" || pwUpper === "YES") {
        upper = true;
      } else {
        upper = false;
      }
      console.log("Upper:" + upper.toString());
      var pwNumbers = window.prompt("Should it contain NUMBERS?(yes/no)");
      // if the user wants numbers, set the nums value to true
      if (pwNumbers === "yes" || pwNumbers === "YES") {
        nums = true;
      } else {
        nums = false;
      }
      console.log("Numbers:" + nums.toString());
    }
  }  else {
    // if they do not input a number between 8 and 128 restart the function and tell the user to input a correct number
    return invalidResponse("Please select a number between 8 and 128.");
  }
  // if they choose a valid length and at least one type of character go to the password generator function 
  return randomGeneratorSpecial(pwLength);
}

// function to alert the user they inputed an incorrect value for the password length (or any reason inputed into the function) then start the generate password function
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
