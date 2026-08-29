/*
Spoken Duration
Given a number of seconds, return the duration in spoken English.

Break the duration into hours, minutes, and seconds.
Skip any zero values.
Use singular or plural as appropriate ("1 hour", "2 hours").
If present, join the last two units with "and", and the second and third to last units with a comma ("1 hour, 2 minutes and 3 seconds").

Tests:
Passed:1. getSpokenDuration(3723) should return "1 hour, 2 minutes and 3 seconds".
Passed:2. getSpokenDuration(7295) should return "2 hours, 1 minute and 35 seconds".
Passed:3. getSpokenDuration(8521) should return "2 hours, 22 minutes and 1 second".
Passed:4. getSpokenDuration(435) should return "7 minutes and 15 seconds".
Passed:5. getSpokenDuration(14455) should return "4 hours and 55 seconds".
Passed:6. getSpokenDuration(72000) should return "20 hours".
Passed:7. getSpokenDuration(1) should return "1 second".
*/

function getSpokenDuration(seconds) {
  function plural(str, num) {
    return num > 1 ? str + "s" : str;
  }

  const SECONDS_PER_HOUR = 3600;
  const SECONDS_PER_MINUTE = 60;

  let remainingSeconds = Math.floor(seconds);

  const hours = Math.floor(remainingSeconds / SECONDS_PER_HOUR);
  remainingSeconds = remainingSeconds % SECONDS_PER_HOUR;

  const minutes = Math.floor(remainingSeconds / SECONDS_PER_MINUTE);
  remainingSeconds = remainingSeconds % SECONDS_PER_MINUTE;

  const durations = [];

  if (hours > 0)
    durations.push(`${hours} ${plural("hour", hours)}`);
  if (minutes > 0)
    durations.push(`${minutes} ${plural("minute", minutes)}`);
  if (remainingSeconds > 0)
    durations.push(`${remainingSeconds} ${plural("second", remainingSeconds)}`);
  
  if (durations.length == 0)
    return "0 seconds";
  else if (durations.length == 1)
    return durations[0];
  else if (durations.length == 2)
    return durations.join(" and ");
  else
    return durations.slice(0, -1).join(", ") + " and " + durations.at(-1)
}
