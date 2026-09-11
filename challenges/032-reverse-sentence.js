/*
Reverse Sentence
Given a string of words, return a new string with the words in reverse order. For example, the first word should be at the end of the returned string, and the last word should be at the beginning of the returned string.

In the given string, words can be separated by one or more spaces.
The returned string should only have one space between words.

Tests:
Passed:1. reverseSentence("world hello") should return "hello world".
Passed:2. reverseSentence("push commit git") should return "git commit push".
Passed:3. reverseSentence("npm  install  sudo") should return "sudo install npm".
Passed:4. reverseSentence("import    default   function  export") should return "export function default import".
*/

function reverseSentence(sentence) {
  return sentence.split(" ").filter(w => w).reverse().join(" ");
}
