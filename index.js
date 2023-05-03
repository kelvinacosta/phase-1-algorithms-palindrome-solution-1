//Create a function to reverse the word
function reverse(word){
  return word.split('').reverse().join('')
}

function isPalindrome(word) {
  // Write your algorithm here
  //Creates a function that returs true if word isPalindrome 
  const reverseWord = reverse(word)

  return reverseWord === word
}

/* 
  Add your pseudocode here
  create function 
  make a test with a if statement 
  if word is equal to the reverse word return true 
  else return false 
  
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
