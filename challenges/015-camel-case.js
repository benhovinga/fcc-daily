/*
camelCase
Given a string, return its camel case version using the following rules:

Words in the string argument are separated by one or more characters from the following set: space ( ), dash (-), or underscore (_). Treat any sequence of these as a word break.
The first word should be all lowercase.
Each subsequent word should start with an uppercase letter, with the rest of it lowercase.
All spaces and separators should be removed.

Tests:
Passed:1. toCamelCase("hello world") should return "helloWorld".
Passed:2. toCamelCase("HELLO WORLD") should return "helloWorld".
Passed:3. toCamelCase("secret agent-X") should return "secretAgentX".
Passed:4. toCamelCase("FREE cODE cAMP") should return "freeCodeCamp".
Passed:5. toCamelCase("ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk") should return "yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk".
*/

function toCamelCase(s) {
  return s
    .replaceAll(/[-_]/g, " ")
    .split(" ")
    .filter(w => Boolean(w))
    .map((w, i) => {
      let word = w.toLowerCase();
      if (i !== 0)
        word = word[0].toUpperCase() + word.slice(1);
      return word;
    })
    .join("");
}
