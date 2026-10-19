/*
Space Week Day 2: Exoplanet Search
For the second day of Space Week, you are given a string where each character represents the luminosity reading of a star. Determine if the readings have detected an exoplanet using the transit method. The transit method is when a planet passes in front of a star, reducing its observed luminosity.

Luminosity readings only comprise of characters 0-9 and A-Z where each reading corresponds to the following numerical values:
Characters 0-9 correspond to luminosity levels 0-9.
Characters A-Z correspond to luminosity levels 10-35.
A star is considered to have an exoplanet if any single reading is less than or equal to 80% of the average of all readings. For example, if the average luminosity of a star is 10, it would be considered to have a exoplanet if any single reading is 8 or less.

Tests:
Passed:1. hasExoplanet("665544554") should return false.
Passed:2. hasExoplanet("FGFFCFFGG") should return true.
Passed:3. hasExoplanet("MONOPLONOMONPLNOMPNOMP") should return false.
Passed:4. hasExoplanet("FREECODECAMP") should return true.
Passed:5. hasExoplanet("9AB98AB9BC98A") should return false.
Passed:6. hasExoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE") should return true.
*/

function hasExoplanet(readings) {
  let sum = 0;
  let lowest = 35;

  Array.from(readings).forEach(char => {
    const num = parseInt(char, 36);
    sum += num;
    if (num < lowest)
      lowest = num;
  });

  const average = sum / readings.length;
  if (lowest <= average * 0.8)
    return true;
  return false;
}
