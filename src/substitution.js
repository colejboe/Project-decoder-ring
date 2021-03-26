// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {

if (!alphabet) {return false}
if (alphabet.length != 26) {return false}
let counter = 0;
for (let i = 0; i < alphabet.length; i++) {
  for (let j = 0; i < alphabet.length; i++) {
if (alphabet[j] == alphabet[i]) {counter +=1}
  }}
 if(counter > 1) {return false}


 let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 let alphaUp = alphabet.toUpperCase();
 let word = input.toUpperCase();
 
 let result = '';


if (encode === true) {

for (let i = 0; i < word.length; i++) {

  if (word[i] === ' ') {
    result += ' ';
  }
  currLet = alpha.indexOf(word.charAt(i));

  result += alphaUp.charAt(currLet);
  
}
return result.toLowerCase();

} else if (encode === false) {
  
  for (let i = 0; i < word.length; i++) {
  
    if (word[i] === ' ') {
      result += ' ';
    }
    currLet = alphaUp.indexOf(word.charAt(i));
  
    result += alpha.charAt(currLet);
    
  }
  return result.toLowerCase();



}






    
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
