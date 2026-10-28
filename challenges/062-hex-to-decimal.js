/*
Hex to Decimal
Given a string representing a hexadecimal number (base 16), return its decimal (base 10) value as an integer.

Hexadecimal is a number system that uses 16 digits:

0-9 represent values 0 through 9.
A-F represent values 10 through 15.
Here's a partial conversion table:

Hexadecimal	Decimal
0	0
1	1
...	...
9	9
A	10
...	...
F	15
10	16
...	...
9F	159
A0	160
...	...
FF	255
100	256
The string will only contain characters 0–9 and A–F.

Tests:
Passed:1. hexToDecimal("A") should return 10.
Passed:2. hexToDecimal("15") should return 21.
Passed:3. hexToDecimal("2E") should return 46.
Passed:4. hexToDecimal("FF") should return 255.
Passed:5. hexToDecimal("A3F") should return 2623.
*/

function hexToDecimal(hex) {
  const HEX_VALUES = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  const HEX_SIZE = 16;
  let sum = 0;
  hex = hex.toUpperCase();

  for (let i = 0; i < hex.length; i++) {
    if (i !== 0)
      sum *= HEX_SIZE;

    const value = HEX_VALUES.indexOf(hex[i]);
    if (value < 0) 
      throw new ValueError("Unknown character " + hex[i]);
    
    sum += value;
  }
  return sum;
}

// Using built-in parseInt function with radix of 16
function hexToDecimalBuiltin(hex) {
  return parseInt(hex, 16);
}
