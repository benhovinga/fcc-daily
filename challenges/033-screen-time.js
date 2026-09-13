/*
Screen Time
Given an input array of seven integers, representing a week's time, where each integer is the amount of hours spent on your phone that day, determine if it is too much screen time based on these constraints:

If any single day has 10 hours or more, it's too much.
If the average of any three days in a row is greater than or equal to 8 hours, it’s too much.
If the average of the seven days is greater than or equal to 6 hours, it's too much.

Tests:
Passed:1. tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7]) should return false.
Passed:2. tooMuchScreenTime([7, 8, 8, 4, 2, 2, 3]) should return false.
Passed:3. tooMuchScreenTime([5, 6, 6, 6, 6, 6, 6]) should return false.
Passed:4. tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4]) should return true.
Passed:5. tooMuchScreenTime([1, 2, 3, 10, 2, 1, 0]) should return true.
Passed:6. tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4]) should return true.
Passed:7. tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6]) should return true.
*/

function tooMuchScreenTime(hours) {
  function average(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length
  }

  const dailyMax = 10;
  const threeDayAvgMax = 8;
  const sevenDayAvgMax = 6;

  for (let i = 0; i < hours.length; i++) {
    if (hours[i] >= dailyMax)
      return true;

    if (i >= 2 && average(hours.slice(i - 2, i + 1)) >= threeDayAvgMax)
      return true;

    if (i >= 6 && average(hours.slice(i - 6, i + 1)) >= sevenDayAvgMax)
      return true;
  }

  return false;
}
