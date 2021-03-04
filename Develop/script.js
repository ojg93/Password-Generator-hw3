// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Dom Elements
const resultEL = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')



// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  const length = lengthEl.value
  console.log(length)
}

const captials = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowers = "abcdefghijklmnopqrstuvwxyz"
const specials = "!#$%&@*"
const number = "123456789"

// Make GeneratePassword function Prompts
function generatePassword() {
  var Passwordlength = window.prompt("Please choose between 8 and 128 characters?");
  var Lowercase = window.prompt("Would you like lowercase letters, yes or no?");
  var Uppercase = window.prompt("Would you like uppcase characters, yes or no?");  
  var Numeric = window.prompt ("Would you like to included number from 1 and 9, yes or no");
  var SpecialCharcters = window.prompt("Would you like special characters, yes or no");
}



var randomFunctions = {
  lower: getRandomlower,
  upper: getRandomupper,
  number: getRandomnumber,
  symbol: Specialcharacter
}



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