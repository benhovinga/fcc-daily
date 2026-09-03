/*
Message Decoder
Given a secret message string, and an integer representing the number of letters that were used to shift the message to encode it, return the decoded string.

A positive number means the message was shifted forward in the alphabet.
A negative number means the message was shifted backward in the alphabet.
Case matters, decoded characters should retain the case of their encoded counterparts.
Non-alphabetical characters should not get decoded.

Tests:
Passed:1. decode("Xlmw mw e wigvix qiwweki.", 4) should return "This is a secret message."
Passed:2. decode("Byffi Qilfx!", 20) should return "Hello World!"
Passed:3. decode("Zqd xnt njzx?", -1) should return "Are you okay?"
Passed:4. decode("oannLxmnLjvy", 9) should return "freeCodeCamp"
*/

function decode(message, shift) {
  const alphaLength = 26;
  return Array.from(message).map(char => {
    const code = char.charCodeAt(0);
    let shifted = code - shift;
    if (code >= 65 && code <= 90) { // Uppercase
      if (shifted > 90) shifted -= alphaLength;
      else if (shifted < 65) shifted += alphaLength;
      return String.fromCharCode(shifted);
    } else if (code >= 97 && code <= 122) { // Lowercase
      if (shifted > 122) shifted -= alphaLength;
      else if (shifted < 97) shifted += alphaLength;
      return String.fromCharCode(shifted);
    }
    return char; // Symbols
  }).join("");
}
