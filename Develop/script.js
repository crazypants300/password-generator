// Assignment code here
var numbers = '1234567890';
var lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
var capitalAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

var nums = false;
var lower = false;
var upper = false;
var special = false;

var pwLength = 8;

function passwordChecker(currentPassword) {
  if (nums === true && currentPassword.includes(numbers) === true) {
  } else {
    return (randomGeneratorSpecial(pwLength));
  }
  if (lower === true && currentPassword.includes(numbers) === true) {
    console.log("lower present")
  } else {
    return (randomGeneratorSpecial(pwLength));
  }
  if (upper === true && currentPassword.includes(numbers) === true) {
    console.log("upper present")
  } else {
    return (randomGeneratorSpecial(pwLength));
  }
  if (special === true && currentPassword.includes(numbers) === true) {
    console.log("special present")
  } else {
    return (randomGeneratorSpecial(pwLength));
  }
  return currentPassword;
}

// if they want special characters, add special characters to the password
function randomGeneratorSpecial(passwordLength) {
  var result = "";
  var characterList = "";
  while(result.length < passwordLength) {
    console.log(">>" + characterList);
    if (nums === true) {
      if (result.length < passwordLength) {
        result += numbers.charAt(Math.floor(Math.random() * passwordLength));
      }
    }
    if (lower === true) {
      if (result.length < passwordLength) {
        result += lowerAlphabet.charAt(Math.floor(Math.random() * passwordLength));
      }
    }
    if (upper === true) {
      if (result.length < passwordLength) {
       result += capitalAlphabet.charAt(Math.floor(Math.random() * passwordLength));
      }
    }
    if (special === true) {
      if (result.length < passwordLength) {
        result += specialCharacters.charAt(Math.floor(Math.random() * passwordLength));
      }
    }
    // cut the current password in half to add special characters and keep desired password length
  }
/*
  for (var i = 0; i < passwordLength; i++) {
    // math.floor makes sure the number isnt a decimal
    // then pick random characters from the list and add it to the password
    console.log(">> inside loop" + characterList);
    result += characterList.charAt(Math.floor(Math.random() * passwordLength));
  }
  */
  return result;
}

function generatePassword() {
  pwLength = window.prompt("Enter amount of characters(8-128):");
  nums = false; 
  lower = false; 
  upper = false; 
  special = false;
  if (pwLength >= 8 && pwLength <= 128){
    while (special === false && lower === false && upper == false && nums === false){
      var pwSpecial = window.prompt("Should it contain SPECIAL characters?(yes/no)");
      if (pwSpecial === "yes" || pwSpecial === "YES") {
        special = true;
      } else {
        special = false;
      }
      console.log("Special:" + special.toString());
      var pwLower = window.prompt("Should it contain LOWERCASE letters?(yes/no)");
      if (pwLower === "yes" || pwLower === "YES") {
        lower = true;
      } else {
        lower = false;
      }
      console.log("Lower:" + lower.toString());
      var pwUpper = window.prompt("Should it contain UPPERCASE letters?(yes/no)");
      if (pwUpper === "yes" || pwUpper === "YES") {
        upper = true;
      } else {
        upper = false;
      }
      console.log("Upper:" + upper.toString());
      var pwNumbers = window.prompt("Should it contain NUMBERS?(yes/no)");
      if (pwNumbers === "yes" || pwNumbers === "YES") {
        nums = true;
      } else {
        nums = false;
      }
      console.log("Numbers:" + nums.toString());
    }
  }  else {
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
