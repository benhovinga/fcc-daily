/*
Jbelmud Text
Given a string, return a jumbled version of that string where each word is transformed using the following constraints:

The first and last letters of the words remain in place
All letters between the first and last letter are sorted alphabetically.
The input strings will contain no punctuation, and will be entirely lowercase.

Tests:
Passed:1. jbelmu("hello world") should return "hello wlord".
Passed:2. jbelmu("i love jumbled text") should return "i love jbelmud text".
Passed:3. jbelmu("freecodecamp is my favorite place to learn to code") should return "faccdeeemorp is my faiortve pacle to laern to cdoe".
Passed:4. jbelmu("the quick brown fox jumps over the lazy dog") should return "the qciuk borwn fox jmpus oevr the lazy dog".
*/

function jbelmu(text) {
  return text
    .split(" ")
    .map((word) => {
      if (word.length < 4) return word;
      return (
        word.at(0) +
        Array.from(word.slice(1, -1)).toSorted().join("") +
        word.at(-1)
      );
    })
    .join(" ");
}
