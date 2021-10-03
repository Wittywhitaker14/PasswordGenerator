
// Assignment code here
function getUppercase(){
    return String.fromCharCode(Math.floor(Math.random() *26) + 65);
}
function getLowercase(){
    return String.fromCharCode(Math.floor(Math.random() *26) + 97);
}
function getNumber(){
    return String.fromCharCode(Math.floor(Math.random() *10) + 48)
}
function getSymbol(){
    var symbols = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
generateBtn.addEventListener("click", function() {
    var length = prompt("How many characters would you like your password to be? Min:8 and Max:128")
    // console.log(length)
    if(length>=8 && length<=128){
       
        var upper= confirm("Would you like uppercase letters?")
            // console.log(upper)
            if(upper === 'true'){
                getUppercase();
            } else {''};
            
        var lower= confirm("Would you like lowercase letters?")
            if(lower === 'true'){
                getLowercase();
            } else{''};
        
        var number= confirm("Would you like numbers?")
            if(number === 'true'){
                getNumber();
            } else{''};
   
        var symbol= confirm("Would you like symbols?")
            if(symbol === 'true'){
                getSymbol();
            } else{''};

        console.log(+length.value, getUppercase(), getLowercase(), getNumber(), getSymbol());    

        var typesCount= upper + lower + number + symbol;
        console.log("typesCount: ", typesCount);

        var typesArray= [{upper}, {lower}, {number}, {symbol}].filter
        (item => Object.values(item)[0]);
        console.log("typesArray: ", typesArray);

    } else{
        alert("Please choose a number between 8 and 128. Please click 'Generate Password' again.")
    };

});

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);