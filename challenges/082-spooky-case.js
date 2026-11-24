/*
SpOoKy~CaSe
Given a string representing a variable name, convert it to "spooky case" using the following constraints:

Replace all underscores (_), and hyphens (-) with a tilde (~).
Capitalize the first letter of the string, and every other letter after that. Ignore the tilde character when counting. Make all other letters lowercase.
For example, given hello_world, return HeLlO~wOrLd.

Tests:
Passed:1. spookify("hello_world") should return "HeLlO~wOrLd".
Passed:2. spookify("Spooky_Case") should return "SpOoKy~CaSe".
Passed:3. spookify("TRICK-or-TREAT") should return "TrIcK~oR~tReAt".
Passed:4. spookify("c_a-n_d-y_-b-o_w_l") should return "C~a~N~d~Y~~b~O~w~L".
Passed:5. spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts") should return "ThE~hAuNtEd~HoUsE~iS~fUlL~oF~gHoStS".
*/

function spookify(boo) {
  let toUpper = true;
  return Array.from(boo.toLowerCase()).map(char => {
    if (char === "-" || char === "_") {
      return "~"
    }
    if (toUpper) {
      toUpper = !toUpper;
      return char.toUpperCase();
    }
    toUpper = !toUpper;
    return char
  }).join("");
}
