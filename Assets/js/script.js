// HTML elements
var html_btn_Generate = document.querySelector(".btn");
var html_pw_Text = document.querySelector("#password");

//Charater Arrays
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "[", "{", "]", "}", "|", ";", ":", "'", "<", ".", ">", "/", "?"];

//funtion to generate the selected password
function generatePassword(length, Characters) {

  //create empty string to save password to.
  var password = "";
  //repeat for each character of the required length
  for (var i = 0; i < length; i++) {
    //select a random character from the selected characters
    var selectedChar = Math.floor(Math.random() * Characters.length);
    //add the new character to the end of the password string
    password = password.concat(Characters[selectedChar]);
  }
  return password;
}


//event handler on button press
//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
html_btn_Generate.addEventListener("click", function () 
{

    //WHEN prompted for password criteria - THEN I select which criteria to include in the password

    //get desired password length
    do {
      //WHEN prompted for the length of the password
      var pwLength = window.prompt("How long would you like the password to be? (min 8, max 128)");
      //Check for cancel button and exit if pressed
      if (pwLength === null) { return null; }
      var validInput = false;
      pwLength = parseInt(pwLength);
      //Check for invalid input
      //THEN I choose a length of at least 8 characters and no more than 128 characters
      if (typeof pwLength !== null && pwLength >= 8 && pwLength <= 128) {
        validInput = true;
      }
      else {
        window.alert("invalid length: must be a number between 8 and 128");
      }
    }
    while (!validInput) //loop until valid input received

    //get desired charaters
      //WHEN asked for character types to include in the password
      //THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
      //WHEN I answer each prompt
      //THEN my input should be validated and at least one character type should be selected
      //array off included charactors
    do {
      var charArr = [];

      //prompt - include lowercase? (if chosen: add lowercase characters to Character Array)
      if (window.confirm("Click OK to confirm using lowercase Characters?")) { charArr = charArr.concat(lowercase); }
      //prompt - include upercase? (if chosen: add uppercase characters to Character Array)
      if (window.confirm("Click OK to confirm using UPPERCASE Characters?")) { charArr = charArr.concat(uppercase); }
      //prompt - include numeric? (if chosen: add numeric characters to Character Array)
      if (window.confirm("Click OK to confirm using numerical Characters?")) { charArr = charArr.concat(numeric); }
      //prompt - include Special Chars? (if chosen: add special characters to Character Array)
      if (window.confirm("Click OK to confirm using Special Characters?")) { charArr = charArr.concat(specialChar); }

      if (charArr.length == 0) { window.alert("you must sected atleast one character type"); }
    } while (charArr.length == 0)// repeat until atleast on character set is selected.

    //WHEN all prompts are answered
      //THEN a password is generated that matches the selected criteria
    var password = generatePassword(pwLength, charArr);

    //WHEN the password is generated
      //THEN the password is either displayed in an alert or written to the page
      //update html element.
    html_pw_Text.textContent = password;

})