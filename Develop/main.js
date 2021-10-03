
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
generateBtn.addEventListener("click", function() {
    var length = prompt("How many characters would you like your password to be? Min:8 and Max:128")
    console.log(length);
    
    var uppercase= confirm("Would you like uppercase letters?")
    console.log(uppercase);

    var lowercase= confirm("Would you like lowercase letters?");
    console.log(lowercase);
   
    var number= confirm("Would you like numbers?");
    console.log(number);
   
    var symbol= confirm("Would you like symbols?");
    console.log(symbol);

});

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);