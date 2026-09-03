/*
Mile Pace
Given a number of miles ran, and a time in "MM:SS" (minutes:seconds) it took to run those miles, return a string for the average time it took to run each mile in the format "MM:SS".

Add leading zeros when needed.

Tests:
Passed:1. milePace(3, "24:00") should return "08:00".
Passed:2. milePace(1, "06:45") should return "06:45".
Passed:3. milePace(2, "07:00") should return "03:30".
Passed:4. milePace(26.2, "120:35") should return "04:36".
*/

function milePace(miles, duration) {
  const [minutes, seconds] = duration
    .split(":")
    .map(str => Number.parseInt(str));
  const paceMin = Math.floor(minutes / miles);
  const remainingSec = Math.round((minutes / miles - paceMin) * 60);
  const paceSec = Math.round(seconds / miles) + remainingSec;
  return `${paceMin.toString().padStart(2, "0")}:${paceSec.toString().padStart(2, "0")}`;
}
