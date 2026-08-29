/*
Golf Handicap Calculator
Given an array of golf scores and a corresponding array of course par values, return the golfer's handicap index using the following method:

Calculate the differential for each round by subtracting the par from the score, then return the average of all differentials rounded to one decimal place.

Tests:
Passed:1. calculateHandicap([72, 72, 72], [72, 72, 72]) should return 0.
Passed:2. calculateHandicap([80, 76, 78, 78], [72, 72, 72, 72]) should return 6.
Passed:3. calculateHandicap([42, 45, 46, 44], [36, 36, 36, 36]) should return 8.3.
Passed:4. calculateHandicap([85, 80, 76, 79, 82], [72, 72, 72, 71, 71]) should return 8.8.
Passed:5. calculateHandicap([41, 50, 48, 52, 46, 49], [35, 37, 35, 37, 35, 37]) should return 11.7.
*/

function calculateHandicap(scores, pars) {
  if (scores.length !== pars.length)
    throw new Error("Scores and pars must have the same number of items.");
  return Math.round(scores.reduce((total, score, i) => total + score - pars[i], 0) / scores.length * 10) / 10;
}
