/*
3 Strikes
Given an integer between 1 and 10,000, return a count of how many numbers from 1 up to that integer whose square contains at least one digit 3.

Tests:
Passed:1. squaresWithThree(1) should return 0.
Passed:2. squaresWithThree(10) should return 1.
Passed:3. squaresWithThree(100) should return 19.
Passed:4. squaresWithThree(1000) should return 326.
Passed:5. squaresWithThree(10000) should return 4531.
*/

function squaresWithThree(n) {
  let count = 0;
  for (let i = 1; i <= n; i++)
    if (Array.from((i ** 2).toString()).some(char => char === '3'))
      count++;
  return count;
}
