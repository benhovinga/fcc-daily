/*
Character Battle
Given two strings representing your army and an opposing army, each character from your army battles the character at the same position from the opposing army using the following rules:

Characters a-z have a strength of 1-26, respectively.
Characters A-Z have a strength of 27-52, respectively.
Digits 0-9 have a strength of their face value.
All other characters have a value of zero.
Each character can only fight one battle.
For each battle, the stronger character wins. The army with more victories, wins the war. Return the following values:

"Opponent retreated" if your army has more characters than the opposing army.
"We retreated" if the opposing army has more characters than yours.
"We won" if your army won more battles.
"We lost" if the opposing army won more battles.
"It was a tie" if both armies won the same number of battles.

Tests:
Passed:1. battle("Hello", "World") should return "We lost".
Passed:2. battle("pizza", "salad") should return "We won".
Passed:3. battle("C@T5", "D0G$") should return "We won".
Passed:4. battle("kn!ght", "orc") should return "Opponent retreated".
Passed:5. battle("PC", "Mac") should return "We retreated".
Passed:6. battle("Wizards", "Dragons") should return "It was a tie".
Passed:7. battle("Mr. Smith", "Dr. Jones") should return "It was a tie".
*/

function battle(myArmy, opposingArmy) {
  if (myArmy.length > opposingArmy.length)
    return "Opponent retreated";
  else if (myArmy.length < opposingArmy.length)
    return "We retreated";

  function calculateStrength(char) {
    if (/[A-Z]/.test(char))
      return char.charCodeAt(0) - 38;
    else if (/[a-z]/.test(char))
      return char.charCodeAt(0) - 96;
    else if (/[0-9]/.test(char))
      return +char;
    return 0;
  }
  
  const battles = Array.from(myArmy).map((myChar, i) => {
    const myStrength = calculateStrength(myChar);
    const theirStrength = calculateStrength(opposingArmy[i]);
    if (myStrength > theirStrength)
      return 1;
    else if (myStrength < theirStrength)
      return -1;
    return 0;
  });

  const victories = battles.filter(b => b > 0).length;
  const losses = battles.filter(b => b < 0).length;

  if (victories > losses)
    return "We won";
  else if (victories < losses)
    return "We lost";
  return "It was a tie";
}

