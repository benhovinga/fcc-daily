/*
Spam Detector
Given a phone number in the format "+A (BBB) CCC-DDDD", where each letter represents a digit as follows:

A represents the country code and can be any number of digits.
BBB represents the area code and will always be three digits.
CCC and DDDD represent the local number and will always be three and four digits long, respectively.
Determine if it's a spam number based on the following criteria:

The country code is greater than 2 digits long or doesn't begin with a zero (0).
The area code is greater than 900 or less than 200.
The sum of first three digits of the local number appears within last four digits of the local number.
The number has the same digit four or more times in a row (ignoring the formatting characters).
Tests:
Passed:1. isSpam("+0 (200) 234-0182") should return false.
Passed:2. isSpam("+091 (555) 309-1922") should return true.
Passed:3. isSpam("+1 (555) 435-4792") should return true.
Passed:4. isSpam("+0 (955) 234-4364") should return true.
Passed:5. isSpam("+0 (155) 131-6943") should return true.
Passed:6. isSpam("+0 (555) 135-0192") should return true.
Passed:7. isSpam("+0 (555) 564-1987") should return true.
Passed:8. isSpam("+00 (555) 234-0182") should return false.
*/

function isSpam(number) {
  const [_, countryCode, areaCode, localA, localB] = number.match(/\+([0-9]+) \(([0-9]{3})\) ([0-9]{3})-([0-9]{4})/);

  if (countryCode.length > 2 || countryCode[0] !== "0") return true;

  const areaCodeInt = parseInt(areaCode);
  if (areaCodeInt > 900 || areaCodeInt < 200 ) return true;

  const digitSum = Array.from(localA).reduce((acc, digit) => acc + parseInt(digit), 0);
  if (localB.includes(digitSum.toString())) return true;

  const repeating = Array.from(countryCode + areaCode + localA + localB).reduce((acc, digit) => {
    console.log(acc)
    if (digit === acc[0])
      return [acc[0], acc[1] + 1];
    else if (acc[1] > 3)
      return acc;
    else
      return [digit, 1];
  }, ["", 0]);
  if (repeating[1] > 3) return true;

  return false;
}
