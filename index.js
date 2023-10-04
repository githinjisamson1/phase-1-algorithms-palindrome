function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord ? true : false;
}

/* 
  Add your pseudocode here

  declare function isPalindrome with word parameter
  reverse word and store in variable reversedWord
  IF word is equal to word reversed:
    return true
  ELSE word is not equal to word reversed:
    return false

*/

/*
  Add written explanation of your solution here
  
  we declare a function isPalindrome
  isPalindrome takes a word parameter
  we reverse word using a combination of split, reverse and join
  split converts word into an array
  reverse writes the newly formed array backwards
  join removes spaces in-between 
  we then use a ternary operator to check whether word is a palindrome
  this is done by comparing word and the reversed string
  if the comparison evaluates to true, true is returned
  if the comparison evaluates to false, false is returned

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("input"));
}

module.exports = isPalindrome;
