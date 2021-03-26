// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
if (encode === true) {
    let result = [];

let curr = input.toUpperCase();
console.log(curr);

for (let i = 0; i < curr.length; i++) {

let col = 0;
let row = 0;
let arr = [col, row];
let val = curr.charCodeAt(i);
//col 1
if (val >= 65 && val < 70) {
  col = val - 64;
  row = 1;
  result.push(col);
  result.push(row);
  //col 2
} else if (val > 69 && val <= 74 && val != 74 && val != 73) {
  col = val - 69;
  row = 2;
  result.push(col);
  result.push(row);
} else if ( val === 75) {
  col = 5
  row = 2;
  result.push(col);
  result.push(row);
}
else if (val === 74 || val === 73) {
  col = 4;
  row = 2;
  result.push(col);
  result.push(row);
}
//col 3
 else if (val >= 75 && val <= 80) {
  col = val - 75;
  row = 3;
  result.push(col);
  result.push(row);
  //col 4
} else if (val > 80 && val <= 85) {
  col = val - 80;
  row = 4;
  result.push(col);
  result.push(row);
  //col 5
} else if (val > 85 && val <= 90) {
  col = val - 85;
  row = 5;
  result.push(col);
  result.push(row);
} else if (val === 32) {
  result.push(" ");
}


}
return result.join("");
}

else if (encode === false) {

//splits the input if spaces are included
let inputSpaces = input.split(' ');
//rejoins the input together, but adds an additional space to allow for easier filtering
let inputEven = inputSpaces.join('  ');

let biNum = inputEven.match(/.{1,2}/g);
console.log(biNum);
let alpha = [
  {letter:'a', val: 11}, {letter:'b', val: 21}, {letter:'c', val: 31}, {letter:'d', val: 41}, {letter:'e', val: 51},
  {letter:'f', val: 12}, {letter:'g', val: 22}, {letter:'h', val: 32}, {letter:'(i/j)', val: 42}, {letter:'k', val: 52}, 
  {letter:'l', val: 13}, {letter:'m', val: 23}, {letter:'n', val: 33}, {letter:'o', val: 43}, {letter:'p', val: 53},
  {letter:'q', val: 14}, {letter:'r', val: 24}, {letter:'s', val: 34}, {letter:'t', val: 44}, {letter:'u', val: 54},
  {letter:'v', val: 15}, {letter:'w', val: 25}, {letter:'x', val: 35}, {letter:'y', val: 45}, {letter:'z', val: 55}
];

let result = [];

for (let i = 0; i<biNum.length; i++) {

if(biNum[i].length < 2) {
  return false;
}
if (biNum[i] === '  ') {
  result.push(' ');
}
  let decoder = alpha.filter(currNum => currNum.val == biNum[i]);
  console.log(decoder);
  let currLet = decoder.map(a => a.letter);
  console.log(currLet);
  result.push(currLet);
}
console.log(result);
return result.join('');
  } 
}
  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
