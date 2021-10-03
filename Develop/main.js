
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

var Functions = {
    upper: getUppercase,
    lower: getLowercase,
    number: getNumber,
    symbol: getSymbol
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
            
        } else{
            alert("Please choose a number between 8 and 128. Please click 'Generate Password' again.");
        };
        password = generatePassword(
            upper, lower, number, symbol, length

            );
        var passwordText = document.querySelector("#password");

        passwordText.value = password;

        // console.log(+length.value, getUppercase(), getLowercase(), getNumber(), getSymbol());    
        
        function generatePassword(lower, upper, number, symbol, length){
            
            var generatePassword = '';
            
            var typesCount= upper + lower + number + symbol;
            // console.log("typesCount: ", typesCount);
            
            var typesArray= [{upper}, {lower}, {number}, {symbol}].filter
            (item => Object.values(item)[0]);
            
            // console.log("typesArray: ", typesArray);
            
            if(typesCount === 0){
                return '';
            }
            
            for(let i = 0;  i < length; i += typesCount) {
                typesArray.forEach(type => {
                    var funcName = Object.keys(type)[0];
                    // console.log('funcName: ', funcName);
                    generatePassword += Functions[funcName]();
                });
            }
            var finalPassword = generatePassword;
            
            return finalPassword;
        }
        
    });