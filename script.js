
var generateBtn = document.querySelector("#generate");
var upperCase = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
]
var lowerCase = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
]
var symbols = [
  '@','%','+','/',"'",'!','#','$','^','?',':',',','-','_','.',
]
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']


function generatePassword() {



  var passwordLength = parseInt(
    window.prompt("How many characters would you like your password to be?", 10)
  )
  if (passwordLength < 8) {
    window.alert("Number must be greater than 8 or less than 128")
    return null
  }
  if (passwordLength > 128) {
    window.alert("Number must be greater than 8 or less than 128")
    return null
  }
  var everything = [];

  var useUpperCase = window.confirm("Would you like to include Uppercase Letters?");
  if (useUpperCase == true) {
    console.log("yes");
    everything = everything.concat(upperCase);
  }
  var useLowerCase = window.confirm("Would you like to include Lowercase Letters?");
  if (useLowerCase == true) {
    console.log("yes");
    everything = everything.concat(lowerCase)
  }
  var useNumbers = window.confirm("Would you like to include Numbers Letters?");
  if (useNumbers == true) {
    console.log("yes");
    everything = everything.concat(numbers)
  }
  var useSymbols = window.confirm("Would you like to include Symbols Letters?");
  if (useSymbols == true) {
    console.log("yes");
    everything = everything.concat(symbols)
  }
  if (everything.length == 0) {
    window.alert("please select at least one character type");
    return null;
  }


  var index = 0;
  var password = "";

  for (let i = 0; i < passwordLength; i++) {

    index = Math.floor(Math.random() * everything.length);
    
    password = password + everything[index];
  }
  return password;

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
