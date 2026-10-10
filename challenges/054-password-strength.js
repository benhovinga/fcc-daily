/*
P@ssw0rd Str3ngth!
Given a password string, return "weak", "medium", or "strong" based on the strength of the password.

A password is evaluated according to the following rules:

It is at least 8 characters long.
It contains both uppercase and lowercase letters.
It contains at least one number.
It contains at least one special character from this set: !, @, #, $, %, ^, &, or *.
Return "weak" if the password meets fewer than two of the rules. Return "medium" if the password meets 2 or 3 of the rules. Return "strong" if the password meets all 4 rules.

Tests:
Passed:1. checkStrength("123456") should return "weak".
Passed:2. checkStrength("pass!!!") should return "weak".
Passed:3. checkStrength("Qwerty") should return "weak".
Passed:4. checkStrength("PASSWORD") should return "weak".
Passed:5. checkStrength("PASSWORD!") should return "medium".
Passed:6. checkStrength("PassWord%^!") should return "medium".
Passed:7. checkStrength("qwerty12345") should return "medium".
Passed:8. checkStrength("S3cur3P@ssw0rd") should return "strong".
Passed:9. checkStrength("C0d3&Fun!") should return "strong".
*/

function checkStrength(password) {
  let rulesMet = 0;

  // Rule 1: At least 8 characters long
  if (password.length >= 8)
    rulesMet++;
  
  // Rule 2: Both upper and lower case letters
  if (/[A-Z]/.test(password) && /[a-z]/.test(password))
    rulesMet++;
  
  // Rule 3: Contains at least one number
  if (/[0-9]/.test(password))
    rulesMet++;
  
  // Rule 4: Contains at least one special character
  if (/[!@#$%\^&\*]/.test(password))
    rulesMet++;

  if (rulesMet < 2)
    return "weak";
  else if (rulesMet < 4)
    return "medium";
  else
    return "strong";
}
