/*
Roman Numeral Parser
Given a string representing a Roman numeral, return its integer value.

Roman numerals consist of the following symbols and values:

Symbol	Value
I	1
V	5
X	10
L	50
C	100
D	500
M	1000
Numerals are read left to right. If a smaller numeral appears before a larger one, the value is subtracted. Otherwise, values are added.

Tests:
Passed:1. parseRomanNumeral("III") should return 3.
Passed:2. parseRomanNumeral("IV") should return 4.
Passed:3. parseRomanNumeral("XXVI") should return 26.
Passed:4. parseRomanNumeral("XCIX") should return 99.
Passed:5. parseRomanNumeral("CDLX") should return 460.
Passed:6. parseRomanNumeral("DIV") should return 504.
Passed:7. parseRomanNumeral("MMXXV") should return 2025.
*/

function parseRomanNumeral(numeral) {
  const symbols = ["I", "V", "X", "L", "C", "D", "M"];
  const values = [1, 5, 10, 50, 100, 500, 1000];
  return Array.from(numeral.toUpperCase()).reduceRight((num, char, i, arr) => {
    const index = symbols.indexOf(char);
    if (index < 0) throw new Error(`Character '${char}' is not a valid Roman Numeral.`);
    const value = values[index];
    const recursiveCheck = (degree) => {
      const j = i + degree;
      if (j >= arr.length || index > symbols.indexOf(arr[j])) 
        return num + value;
      else if (index < symbols.indexOf(arr[j]))
        return num - value;
      else 
        return recursiveCheck(degree + 1);
    };
    return recursiveCheck(1);
  }, 0);
}
