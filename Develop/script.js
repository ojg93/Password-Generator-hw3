// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const captials = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowers = "abcdefghijklmnopqrstuvwxyz";
const specials = "!#$%&@*"
const number = "123456789"

// Make GeneratePassword function Prompts
function generatePassword() {
  var Passwordlength = window.prompt("Please choose between 8 and 128 characters?");
  var Lowercase = window.prompt("Please choose at least 1 lower case character a to z");
  var Uppercase = window.prompt("Please choose at leat 1 uppecase characters A to Z ");  
  var Numeric = window.prompt ("Please choose at least 1 numeric value between 1 and 9");
  var SpecialCharcters = window.prompt("Please choose from these special characaers: !, #, $, %, &, @, *");
}


var randomFunctions = {
  lower: getRandomlower,
  upper: getRandomupper,
  number: getRandomnumber,
  symbol: Specialcharacter
}

// DOM Elements
const resultEl = document.getElementById("result")
//Generate Lowercase Function
function getRandomlower() {
  return String.fromCharCode(math.floor(math.random() * 26) + 97)
}

//Generate Uppercase Function
function getRandomupper() {
  return String.fromCharCode(math.floor(math.random() * 26) + 65)
}

//Generate Numeric Function
function getRandomnumber() {
  return String.fromCharCode(math.floor(math.random() * 10) + 48)
}

//Generate Special Character Function
function Specialcharacter() {
var Specialcharacters = "!#$%&@*";
return Specialcharacters [Math.floor(Math.random() * SpecialCharcters.length)];
}