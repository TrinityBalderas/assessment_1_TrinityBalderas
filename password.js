let password = "TrinityBalderas19!";
let passwordLength = true;
let isAlphaCount = 0;
let isCapAlphaCount = 0
let isNumCount = 0;
let isWhiteSpace = 0;
let isSpecialChar = true;
let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
for (let i = 0; i < password.length; i++){
    let testChar = password.charAt(i)
    if(testChar >= "a" && testChar <= "z"){
        isAlphaCount += 1;
    }
    //Tests for lowercase letters
    else if(testChar >= "A" && testChar <= "Z"){
        isCapAlphaCount += 1;
    } 
    //Tests for uppercase letters
    else if( testChar >= 0 && testChar <= 9){
        isNumCount += 1;
    }
    //Tests for numbers
    
}

if(password.length < 10 || password.length > 20){
    console.log("Error: Your password needs to 10-20 characters long!");
    passwordLength = false;
}
//Tests the length of string password
if(password.indexOf(' ') >= 0){
console.log("Error: Your password cant have any white spaces");
isWhiteSpace += 1;
}
//Tests for white spaces
if(format.test(password) === false){
console.log("Error: Your password needs at least one special character!");
}
//Test for special characters
if (isAlphaCount === 0){
    console.log("Error: Your password needs at least one lowerCase letter!");
}
//Tests the lowercase counter 
if (isCapAlphaCount === 0){
    console.log("Error: Your password needs at least one uppercase letter!");
}
//Tests the uppercase counter 
if (isNumCount === 0){
    console.log("Error: Your password needs at least one number!");
}
//Tests the number counter
if(passwordLength === true && isWhiteSpace === 0 && isSpecialChar === true && isAlphaCount >= 1 && isCapAlphaCount >= 1 && isNumCount >= 1){
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$'               `$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$'                   `$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    console.log("$$$'`$$$$$$$$$$$$$'`$$$$$$!     __          __    !$$$$$$'`$$$$$$$$$$$$$'`$$$");
    console.log("$$$$  $$$$$$$$$$$  $$$$$$$     |  |        |  |    $$$$$$$  $$$$$$$$$$$  $$$$");
    console.log("$$$$. `$' |' |$`  $$$$$$$!     |  |        |  |    !$$$$$$$  '$/ `/ `$' .$$$$");
    console.log("$$$$$. !|  i  i .$$$$$$$$      |  |        |  |     $$$$$$$$. i  i  /! .$$$$$");
    console.log("$$$$$$   `--`--.$$$$$$$$$      |__|        |__|     $$$$$$$$$.--'--'   $$$$$$");
    console.log("$$$$$$L        `$$$$$^^$$                           $$^^$$$$$'        J$$$$$$");
    console.log("$$$$$$$.   .'   ''~   $$$    $.                 .$  $$$   ~''   `.   .$$$$$$$");
    console.log("$$$$$$$$.  ;      .e$$$$$!    $$.             .$$  !$$$$$e,      ;  .$$$$$$$$");
    console.log("$$$$$$$$$   `.$$$$$$$$$$$$     $$$.         .$$$   $$$$$$$$$$$$.'   $$$$$$$$$");
    console.log("$$$$$$$$    .$$$$$$$$$$$$$!     $$`$$$$$$$$'$$    !$$$$$$$$$$$$$.    $$$$$$$$");
    console.log("$JT&yd$     $$$$$$$$$$$$$$$$.    $    $$    $   .$$$$$$$$$$$$$$$$     $by&TL$");
    console.log("                                 $    $$    $                                ");
    console.log("                                 $.   $$   .$                                ");
    console.log("                                 `$        $'                                ");
    console.log("                                  `$$$$$$$$'                                 ");
    console.log("Your password was a success!!!!");
}
//Test to see if all the requirements have been met
