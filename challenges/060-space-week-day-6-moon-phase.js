/*
Space Week Day 6: Moon Phase
For day six of Space Week, you will be given a date in the format "YYYY-MM-DD" and need to determine the phase of the moon for that day using the following rules:

Use a simplified lunar cycle of 28 days, divided into four equal phases:

"New": days 1 - 7
"Waxing": days 8 - 14
"Full": days 15 - 21
"Waning": days 22 - 28
After day 28, the cycle repeats with day 1, a new moon.

Use "2000-01-06" as a reference new moon (day 1 of the cycle) to determine the phase of the given day.
You will not be given any dates before the reference date.
Return the correct phase as a string.
Note: Day 1 represents the day of the new moon, meaning 0 days have passed since the last new moon.

Tests:
Passed:1. moonPhase("2000-01-12") should return "New".
Passed:2. moonPhase("2000-01-13") should return "Waxing".
Passed:3. moonPhase("2014-10-15") should return "Full".
Passed:4. moonPhase("2012-10-21") should return "Waning".
Passed:5. moonPhase("2022-12-14") should return "New".
*/

function moonPhase(dateString) {
  const ONE_DAY = 86400000;
  const REF_DATE = Date.parse("2000-01-06");

  const date = Date.parse(dateString);
  const dateDelta = date - REF_DATE;
  const totalDays = dateDelta / ONE_DAY;
  const cycleDay = (totalDays % 28);

  if (cycleDay < 7)
    return "New";
  else if (cycleDay < 14)
    return "Waxing";
  else if (cycleDay < 21)
    return "Full";
  else if (cycleDay < 28)
    return "Waning";
}
