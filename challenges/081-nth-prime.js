/*
Nth Prime
A prime number is a positive integer greater than 1 that is divisible only by 1 and itself. The first five prime numbers are 2, 3, 5, 7, and 11.

Given a positive integer n, return the nth prime number. For example, given 5 return the 5th prime number: 11.

Tests:
Passed:1. nthPrime(5) should return 11.
Passed:2. nthPrime(10) should return 29.
Passed:3. nthPrime(16) should return 53.
Passed:4. nthPrime(99) should return 523.
Passed:5. nthPrime(1000) should return 7919.
*/

function nthPrime(n) {
  let i = 2;
  let foundPrimes = 0;
  let lastPrime = 0;
  
  while (true) {
    const iSqrt = Math.sqrt(i);
    let isPrime = true;

    for (let j = 2; j <= iSqrt; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      lastPrime = i;
      foundPrimes++;
    }

    if (foundPrimes === n) break;

    i++;
  }

  return lastPrime;
}
