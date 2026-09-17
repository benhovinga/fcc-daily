/*
Slug Generator
Given a string, return a URL-friendly version of the string using the following constraints:

All letters should be lowercase.
All characters that are not letters, numbers, or spaces should be removed.
All spaces should be replaced with the URL-encoded space code %20.
Consecutive spaces should be replaced with a single %20.
The returned string should not have leading or trailing %20.

Tests:
Passed:1. generateSlug("helloWorld") should return "helloworld".
Passed:2. generateSlug("hello world!") should return "hello%20world".
Passed:3. generateSlug(" hello-world ") should return "helloworld".
Passed:4. generateSlug("hello  world") should return "hello%20world".
Passed:5. generateSlug("  ?H^3-1*1]0! W[0%R#1]D  ") should return "h3110%20w0r1d".
*/

function generateSlug(str) {
  return str
    .trim()
    .toLowerCase()
    .replaceAll(/[^\w\d\s]/g, "")
    .replaceAll(/\s+/g, "%20");
}
