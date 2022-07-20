/** Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )*/

function alphabetPosition(text) {
  let result = "";
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	text.split("").map(char => {
    for(var i = 0; i < text.length; i++){
      if(char.toLowerCase() === alphabet[i]){
        result += (i+1).toString();
        result += " ";
      }
    }
  });
  return result;
}

//fail to do so

/**function alphabetPosition(text) {                       
  return text
    .toUpperCase()                                  // since the alphabet is in uppercase at 65, the string has to be upperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)               // "A" has charCode of 65 in UTF-16, thus it needs to be subtracted by 64
    .join(' ');                                         
} */