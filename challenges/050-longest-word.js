/*
Longest Word
Given a sentence, return the longest word in the sentence.

Ignore periods (.) when determining word length.
If multiple words are ties for the longest, return the first one that occurs.

Tests:
Passed:1. getLongestWord("coding is fun") should return "coding".
Passed:2. getLongestWord("Coding challenges are fun and educational.") should return "educational".
Passed:3. getLongestWord("This sentence has multiple long words.") should return "sentence".
*/

function getLongestWord(sentence) {
  const re = /[^.\s]+/g;
  const words = sentence.match(re);
  return words.reduce((longest, word) => { 
    return word.length > longest.length ? word : longest
  }, "");
}
