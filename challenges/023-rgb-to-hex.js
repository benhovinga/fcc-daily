/*
RGB to Hex
Given a CSS rgb(r, g, b) color string, return its hexadecimal equivalent.

Here are some example outputs for a given input:

Input	Output
"rgb(255, 255, 255)"	"#ffffff"
"rgb(1, 2, 3)"	"#010203"
Make any letters lowercase.
Return a # followed by six characters. Don't use any shorthand values.

Tests:
Passed:1. rgbToHex("rgb(255, 255, 255)") should return "#ffffff".
Passed:2. rgbToHex("rgb(1, 11, 111)") should return "#010b6f".
Passed:3. rgbToHex("rgb(173, 216, 230)") should return "#add8e6".
Passed:4. rgbToHex("rgb(79, 123, 201)") should return "#4f7bc9".
*/

function rgbToHex(rgb) {
  const re = /rgb\((\d{1,3})\D*(\d{1,3})\D*(\d{1,3})\)/gi;
  return "#" + [...rgb.matchAll(re)][0]
    .filter((_, i) => i != 0)
    .map(c => Number.parseInt(c).toString(16).padStart(2, "0"))
    .join("");
}
