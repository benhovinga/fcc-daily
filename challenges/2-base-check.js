/*
Base Check
Given a string representing a number, and an integer base from 2 to 36, determine whether the number is valid in that base.

The string may contain integers, and uppercase or lowercase characters.
The check should be case-insensitive.
The base can be any number 2-36.
A number is valid if every character is a valid digit in the given base.

Example of valid digits for bases:
Base 2: 0-1
Base 8: 0-7
Base 10: 0-9
Base 16: 0-9 and A-F
Base 36: 0-9 and A-Z

Tests:
Passed:1. isValidNumber("10101", 2) should return true.
Passed:2. isValidNumber("10201", 2) should return false.
Passed:3. isValidNumber("76543210", 8) should return true.
Passed:4. isValidNumber("9876543210", 8) should return false.
Passed:5. isValidNumber("9876543210", 10) should return true.
Passed:6. isValidNumber("ABC", 10) should return false.
Passed:7. isValidNumber("ABC", 16) should return true.
Passed:8. isValidNumber("Z", 36) should return true.
Passed:9. isValidNumber("ABC", 20) should return true.
Passed:10. isValidNumber("4B4BA9", 16) should return true.
Passed:11. isValidNumber("5G3F8F", 16) should return false.
Passed:12. isValidNumber("5G3F8F", 17) should return true.
Passed:13. isValidNumber("abc", 10) should return false.
Passed:14. isValidNumber("abc", 16) should return true.
Passed:15. isValidNumber("AbC", 16) should return true.
Passed:16. isValidNumber("z", 36) should return true.
*/

function isValidNumber(n, base) {
  const CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const baseChars = Array.from(CHARS.slice(0, base));
  return Array.from(n.toUpperCase()).every(char => baseChars.includes(char));
}
