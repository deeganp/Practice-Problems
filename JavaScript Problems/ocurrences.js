// write a function in javascript that takes an array of strings and a string of a letter and returns
//  the string that the letter appears most in, if no strings contain the letter, return -1

function findStringWithMostOccurrences(strings, letter) {
    let maxOccurrences = 0;
    let result = -1;
  
    for (const str of strings) {
      const occurrences = (str.match(new RegExp(letter, 'g')) || []).length;
      if (occurrences > maxOccurrences) {
        maxOccurrences = occurrences;
        result = str;
      }
    }
  
    return result;
  }