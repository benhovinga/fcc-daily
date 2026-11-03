/*
String Count
Given two strings, determine how many times the second string appears in the first.

The pattern string can overlap in the first string. For example, "aaa" contains "aa" twice. The first two a's and the second two.

Tests:
Passed:1. count('abcdefg', 'def') should return 1.
Passed:2. count('hello', 'world') should return 0.
Passed:3. count('mississippi', 'iss') should return 2.
Passed:4. count('she sells seashells by the seashore', 'sh') should return 3.
Passed:5. count('101010101010101010101', '101') should return 10.
*/

function count(text, pattern) {
  let count = 0;
  let i = -1;
  while(true) {
    i = text.indexOf(pattern, i + 1);
    if (i < 0) break;
    count++;
  }
  return count;
}
