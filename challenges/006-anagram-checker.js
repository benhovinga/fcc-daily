/*
Anagram Checker
Given two strings, determine if they are anagrams of each other (contain the same characters in any order).

Ignore casing and white space.

Tests:
Passed:1. areAnagrams("listen", "silent") should return true.
Passed:2. areAnagrams("School master", "The classroom") should return true.
Passed:3. areAnagrams("A gentleman", "Elegant man") should return true.
Passed:4. areAnagrams("Hello", "World") should return false.
Passed:5. areAnagrams("apple", "banana") should return false.
Passed:6. areAnagrams("cat", "dog") should return false.
*/

function areAnagrams(str1, str2) {
  const chars = Array.from(str2.toUpperCase())
  return Array.from(str1.toUpperCase()).every(char => chars.includes(char));
}
