//QUE : Write a function which takes in a string and returns counts of each character in the string.

// function charCount(str) {
//   var result = {};
//   const regex = new RegExp(/[a-z0-9]/);
//   for (var i = 0; i < str.length; i++) {
//     var char = str[i].toLowerCase();
//     if (!regex.test(char)) {
//       continue;
//     }
//     if (result[char] > 0) {
//       result[char]++;
//     } else {
//       result[char] = 1;
//     }
//   }

//   return result;
//   //make object to return  at end
//   //loop over the string  for each character (letter/number)
//   //if the char (letter/number) is keyin object add 1 to count
//   //return the object
// }

// function charCount(str) {
//   var result = {};
//   const regex = new RegExp(/[a-z0-9]/);
//   for (var char of str) {
//     var char = char.toLowerCase();
//     if (!regex.test(char)) {
//       continue;
//     }
//     result[char] = ++result[char] || 1;
//   }

//   return result;
//   //make object to return  at end
//   //loop over the string  for each character (letter/number)
//   //if the char (letter/number) is keyin object add 1 to count
//   //return the object
// }

function charCount(str) {
  var result = {};

  for (var char of str) {
    char = char.toLowerCase();
    if (!isAlphaNumeric(char)) {
      continue;
    }
    char = char.toLowerCase();
    result[char] = ++result[char] || 1;
  }

  return result;
  //make object to return  at end
  //loop over the string  for each character (letter/number)
  //if the char (letter/number) is keyin object add 1 to count
  //return the object
}

function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // 0-9
    !(code > 64 && code < 91) && //A-Z
    !(code > 96 && code < 123) // a-z
  ) {
    return false;
  } else {
    return true;
  }
}

console.log(charCount("S2wsssouvik! Hey!@#$$%"));
