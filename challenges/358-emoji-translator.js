/*
Emoji Translator
Given a string of emojis, return the phrase using the following table:

Emoji	Word
👶	"baby"
🐱	"cat"
🐕	"dog"
🐟	"fish"
🥵	"hot"
🧊	"ice"
🪨	"rock"
🦈	"shark"
🍲	"soup"
⭐	"star"
Return the words separated by spaces.

Tests:
Passed:1. getEmojiPhrase("🪨⭐") should return "rock star".
Passed:2. getEmojiPhrase("🥵🐕") should return "hot dog".
Passed:3. getEmojiPhrase("👶🦈") should return "baby shark".
Passed:4. getEmojiPhrase("⭐🐟") should return "star fish".
Passed:5. getEmojiPhrase("🧊🧊👶") should return "ice ice baby".
Passed:6. getEmojiPhrase("🐱🐟🍲") should return "cat fish soup".
*/

function getEmojiPhrase(str) {
  const emojiList = {
    "👶": "baby",
    "🐱": "cat",
    "🐕": "dog",
    "🐟": "fish",
    "🥵": "hot",
    "🧊": "ice",
    "🪨": "rock",
    "🦈": "shark",
    "🍲": "soup",
    "⭐": "star"
  };

  const emojis = Object.keys(emojiList);
  const words = Object.values(emojiList);
  const chars = Array.from(str);

  return chars.map((char) => words.at(emojis.indexOf(char))).join(" ");
}
