/*
HTML Tag Stripper
Given a string of HTML code, remove the tags and return the plain text content.

The input string will contain only valid HTML.
HTML tags may be nested.
Remove the tags and any attributes.
For example, '<a href="#">Click here</a>' should return "Click here".

Tests:
Passed:1. stripTags('<a href="#">Click here</a>') should return "Click here".
Passed:2. stripTags('<p class="center">Hello <b>World</b>!</p>') should return "Hello World!".
Passed:3. stripTags('<img src="cat.jpg" alt="Cat">') should return an empty string ("").
Passed:4. stripTags('<main id="main"><section class="section">section</section><section class="section">section</section></main>') should return sectionsection.
*/

function stripTags(html) {
  return html.replaceAll(/<[^>]*>/g, "");
}
