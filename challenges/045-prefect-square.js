/*
Perfect Square
Given an integer, determine if it is a perfect square.

A number is a perfect square if you can multiply an integer by itself to achieve the number. For example, 9 is a perfect square because you can multiply 3 by itself to get it.

Tests:
Passed:1. isPerfectSquare(9) should return true.
Passed:2. isPerfectSquare(49) should return true.
Passed:3. isPerfectSquare(1) should return true.
Passed:4. isPerfectSquare(2) should return false.
Passed:5. isPerfectSquare(99) should return false.
Passed:6. isPerfectSquare(-9) should return false.
Passed:7. isPerfectSquare(0) should return true.
Passed:8. isPerfectSquare(25281) should return true.
*/

function isPerfectSquare(n) {
  const squareRoot = Math.sqrt(n);
  return Math.floor(squareRoot) === squareRoot;
}
