/*
Hex Generator
Given a named CSS color string, generate a random hexadecimal (hex) color code that is dominant in the given color.

The function should handle "red", "green", or "blue" as an input argument.
If the input is not one of those, the function should return "Invalid color".
The function should return a random six-character hex color code where the input color value is greater than any of the others.
Example of valid outputs for a given input:
Input	Output
"red"	"FF0000"
"green"	"00FF00"
"blue"	"0000FF"

Tests:
Passed:1. generateHex("yellow") should return "Invalid color".
Passed:2. generateHex("red") should return a six-character string.
Passed:3. generateHex("red") should return a valid six-character hex color code.
Passed:4. generateHex("red") should return a valid hex color with a higher red value than other colors.
Passed:5. Calling generateHex("red") twice should return two different hex color values where red is dominant.
Passed:6. Calling generateHex("green") twice should return two different hex color values where green is dominant.
Passed:7. Calling generateHex("blue") twice should return two different hex color values where blue is dominant.
*/

function generateHex(color) {
  const max = 255;
  const randomColor = () => Math.floor(Math.random() * max);
  const colors = [randomColor(), randomColor(), randomColor()];
  switch (color) {
    case "red":
      colors[0] = max;
      break;
    case "green":
      colors[1] = max;
      break;
    case "blue":
      colors[2] = max;
      break;
    default:
      return "Invalid color";
  }
  return colors.map(c => c.toString(16).padStart(2, "0")).join("");
}
