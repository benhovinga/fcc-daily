/*
Sentence Capitalizer
Given a paragraph, return a new paragraph where the first letter of each sentence is capitalized.

All other characters should be preserved.
Sentences can end with a period (.), one or more question marks (?), or one or more exclamation points (!).

Tests:
Passed:1. capitalize("this is a simple sentence.") should return "This is a simple sentence.".
Passed:2. capitalize("hello world. how are you?") should return "Hello world. How are you?".
Passed:3. capitalize("i did today's coding challenge... it was fun!!") should return "I did today's coding challenge... It was fun!!".
Passed:4. capitalize("crazy!!!strange???unconventional...sentences.") should return "Crazy!!!Strange???Unconventional...Sentences.".
Passed:5. capitalize("there's a space before this period . why is there a space before that period ?") should return "There's a space before this period . Why is there a space before that period ?".
*/

function capitalize(paragraph) {
  const re = /[.!?]+\s*/gm;
  const indices = [...paragraph.matchAll(re)].map(match => match.index + match[0].length);
  indices.unshift(0);
  return Array.from(paragraph).map((char, i) => {
    if (indices.includes(i))
      return char.toUpperCase();
    return char;
  }).join("");
}
