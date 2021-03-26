// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6 

const caesarModule = (function () {
  // you can add any code you want within this function scope

  

  function caesar(input, shift, encode = true) {
    // your solution code here
    
let upper = input.toUpperCase();

  if (!shift) {return false}
if (shift > 25 || shift < -25){return false}
    function mod(n, p)
{
    if ( n < 0 )
        n = p - Math.abs(n) % p;

    return n % p;
}
    let result = '';

    for (let i = 0; i < upper.length; i++) { 
      let code = upper.charCodeAt(i);
      
      if (code >= 65 && code <= 65 + 26 - 1) {

        code -= 65;
        code = mod(code + shift, 26);
        code += 65;

    } else if (code === 32) {
        result + upper[i];
    } 
              
    result += String.fromCharCode(code);
    }
return result.toLowerCase();
  }
  return {
    caesar
  };
})();

module.exports = caesarModule.caesar;
