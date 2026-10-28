/*
Battle of Words
Given two sentences representing your team and an opposing team, where each word from your team battles the corresponding word from the opposing team, determine which team wins using the following rules:

The given sentences will always contain the same number of words.
Words are separated by a single space and will only contain letters.
The value of each word is the sum of its letters.
Letters a to z correspond to the values 1 through 26. For example, a is 1, and z is 26.
A capital letter doubles the value of the letter. For example, A is 2, and Z is 52.
Words battle in order: the first word of your team battles the first word of the opposing team, and so on.
A word wins if its value is greater than the opposing word's value.
The team with more winning words is the winner.
Return "We win" if your team is the winner, "We lose" if your team loses, and "Draw" if both teams have the same number of wins.

Tests:
Passed:1. battle("hello world", "hello word") should return "We win".
Passed:2. battle("Hello world", "hello world") should return "We win".
Passed:3. battle("lorem ipsum", "kitty ipsum") should return "We lose".
Passed:4. battle("hello world", "world hello") should return "Draw".
Passed:5. battle("git checkout", "git switch") should return "We win".
Passed:6. battle("Cheeseburger with fries", "Cheeseburger with Fries") should return "We lose".
Passed:7. battle("We must never surrender", "Our team must win") should return "Draw".
*/

function battle(ourTeam, opponent) {
  function calculateWord(word) {
    let sum = 0;
    for (let i = 0; i < word.length; i++) {
      const charValue = word.charCodeAt(i);
      if (charValue > 96) // lowercase
        sum += charValue - 96;
      else // uppercase
        sum += (charValue - 64) * 2;
    }
    return sum;
  }

  const ourWords = ourTeam.split(" ");
  const theirWords = opponent.split(" ");
  
  if (ourWords.length !== theirWords.length)
    throw new ValueError("Teams do not have the same number of words");
  
  let ourWins = 0;
  let theirWins = 0;

  for (let i = 0; i < ourWords.length; i++) {
    const ourWordValue = calculateWord(ourWords[i])
    const theirWordValue = calculateWord(theirWords[i])

    if (ourWordValue > theirWordValue)
      ourWins++;
    else if (ourWordValue < theirWordValue)
      theirWins++;
  }

  if (ourWins === theirWins)
    return "Draw";
  else if (ourWins > theirWins)
    return "We win"
  else
    return "We lose"
}
