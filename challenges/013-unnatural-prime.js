/*
Unnatural Prime
Given an integer, determine if that number is a prime number or a negative prime number.

A prime number is a positive integer greater than 1 that is only divisible by 1 and itself.
A negative prime number is the negative version of a positive prime number.
1 and 0 are not considered prime numbers.

Tests:
Passed:1. isUnnaturalPrime(1) should return false.
Passed:2. isUnnaturalPrime(-1) should return false.
Passed:3. isUnnaturalPrime(19) should return true.
Passed:4. isUnnaturalPrime(-23) should return true.
Passed:5. isUnnaturalPrime(0) should return false.
Passed:6. isUnnaturalPrime(97) should return true.
Passed:7. isUnnaturalPrime(-61) should return true.
Passed:8. isUnnaturalPrime(99) should return false.
Passed:9. isUnnaturalPrime(-44) should return false.
*/

function isUnnaturalPrime(n) {
  if (n >= -1 && n <= 1) return false;
  const isPos = n > 0 ? true : false;
  for (let i = isPos ? 2 : -2; isPos ? i <= n : i >= n; isPos ? i++ : i--) {
    if (n % i === 0) {
      if (i === n) return true;
      else return false;
    }
  }
}
