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

const passlength = ''
const captials = "ABCDEFGHIJKLMNOPQRSTUVWXYZx"
const lowers = "abcdefghijklmnopqrstuvwxyz";
const specials = "!#$%&@*";
const number = "123456789";



// Make GeneratePassword function Prompts
function generatePassword() {
  
  var finalPassword = "";
  var allowedChars = "";
  
  
  var Passwordlength = window.prompt(        
    "How many characters would you like. Please choose between 8 and 128 characters?");
    if (isNaN(Passwordlength))
    window.prompt ("please choose correct characters");
    // only want to pass in a number
    // check out isNAN
    console.log(Passwordlength);
    

    if (Passwordlength < 8 || Passwordlength > 128)
    window.prompt ("please choose correct amount of characters")
  
    
  
    var Lowercase = confirm("Would you like lowercase letters, yes or no?");
    console.log(Lowercase);
    if (Lowercase) {
      allowedChars += lowers;
    }

    var Uppercase = window.confirm("Would you like uppcase characters, yes or no?");
    console.log(Uppercase);
    if (Uppercase) {
      allowedChars += captials
    }  
  
    var Numeric = window.confirm("Would you like to included a numbers, yes or no?");
    console.log(Numeric);
    if (Numeric) {
      allowedChars += number
    }
  
    var SpecialCharacters = window.confirm("Would you like special characters, yes or no?");
    console.log(SpecialCharacters);
    if (SpecialCharacters) {
      allowedChars += specials

    }
      console.log(allowedChars)
    // need all letters from user options to go into allowedchars

    







     for (let i = 0; i < Passwordlength; i++) {
      const randomNumber = (Math.floor(Math.random() * allowedChars.length ));
      const randomLetter = allowedChars[randomNumber]
    console.log(randomLetter)
      
    finalPassword += randomLetter

    }

    

      
    return finalPassword;
  }