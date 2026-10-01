/*
Phone Number Formatter
Given a string of eleven digits, return the string as a phone number in this format: "+D (DDD) DDD-DDDD".

Tests:
Passed:1. formatNumber("05552340182") should return "+0 (555) 234-0182".
Passed:2. formatNumber("15554354792") should return "+1 (555) 435-4792".
*/

function formatNumber(number) {
  const re = /(\d)(\d{3})(\d{3})(\d{4})/;
  const match = number.match(re);
  return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}`;
}
