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


function writePassword() {

  // Setting up all possible characters 
  var lowerCase = ("abcdefghijklmnopqrstuvwxyz");
  var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  var numeric = ("1234567890");
  var special = ("!@#$%^&*()?~/|:'><");


  // User prompt for length of password
  var length = prompt("Please input your desired password length. Choose between 8 and 128 characters");

  // Make sure the user chooses an integer between 8 to 128
  if (
    parseInt(length) < 8 ||
    parseInt(length) > 128 ||
    isNaN(length) ||
    length === "null" ||
    length === null
  ) {
    alert("Password length has to be Between 8 and 128 characters. Please input a number between 8 and 128. Click Generate to try again")
    return
  }

  // Asking the user what they want their password components to consist of

  var containsLower = confirm("Would you like your password to contain lowercase letters?")
  var containsUpper = confirm("Would you like your password to contain uppercase letters?")
  var containsNumbers = confirm("Would you like your password to contain numbers?")
  var containsSpecial = confirm("Would you like your password to contain special characters?")

  // Make sure that the user selects at least one of the character options, otherwise the password is invalid.
  var valid = 0;

  if (containsLower == true || containsUpper == true || containsNumbers == true || containsSpecial == true) {
    valid = 1;
  }

  if (valid == 0) {
    alert("You have not selected any character types, Please provide valid choices. Click Generate to try again")
    return
  }

  // Random number generation

  var password = "";
  var pSelection = "";
  function generate() {
    for (var i = 0; i <= length; i++) {
      password = password + pSelection.charAt(Math.floor(Math.random() * Math.floor(pSelection.length - 1)));
    }
  }

  // LowerCase only
  if (containsLower && !containsUpper && !containsNumbers && !containsSpecial) {
    pSelection = lowerCase;
    generate();
  }
  // LowerCase and UpperCase
  else if (containsLower && containsUpper && !containsNumbers && !containsSpecial) {
    pSelection = lowerCase + upperCase;
    generate();
  }

  //LowerCase and UpperCase and Numbers
  else if (containsLower && containsUpper && containsNumbers && !containsSpecial) {
    pSelection = lowerCase + upperCase + numeric;
    generate();
  }
  // Everything
  else if (containsLower && containsUpper && containsNumbers && containsSpecial) {
    pSelection = lowerCase + upperCase + numeric + special;
    generate();
  }
  //Lowercase and Numbers
  else if (containsLower && !containsUpper && containsNumbers && !containsSpecial) {
    pSelection = lowerCase + numeric;
    generate();
  }
  //Lowercase and Numbers and Special
  else if (containsLower && !containsUpper && containsNumbers && containsSpecial) {
    pSelection = lowerCase + numeric + special;
    generate();
  }
  // Lowercase and Special
  else if (containsLower && !containsUpper && !containsNumbers && containsSpecial) {
    pSelection = lowerCase + special;
    generate();
  }
  // Uppercase Only
  else if (!containsLower && containsUpper && !containsNumbers && !containsSpecial) {
    pSelection = upperCase;
    generate();
  }
  // UpperCase and Numbers
  else if (!containsLower && containsUpper && containsNumbers && !containsSpecial) {
    pSelection = upperCase + numeric;
    generate();
  }

  // Uppercase and Numbers and Special
  else if (!containsLower && containsUpper && containsNumbers && containsSpecial) {
    pSelection = upperCase + numeric + special;
    generate();
  }
  // Uppercase and Special
  else if (!containsLower && containsUpper && !containsNumbers && containsSpecial) {
    pSelection = upperCase + special;
    generate();
  }
  // Numbers Only
  else if (!containsLower && !containsUpper && containsNumbers && !containsSpecial) {
    pSelection = numeric;
    generate();
  }
  // Numbers and Special
  else if (!containsLower && !containsUpper && containsNumbers && containsSpecial) {
    pSelection = numeric + special;
    generate();
  }
  // Special Only
  else if (!containsLower && !containsUpper && !containsNumbers && containsSpecial) {
    pSelection = special;
    generate();
  }
  document.getElementById("password").innerHTML = password;
  console.log(password);

}