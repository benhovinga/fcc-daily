/*
Complementary DNA
Given a string representing a DNA sequence, return its complementary strand using the following rules:

DNA consists of the letters "A", "C", "G", and "T".
The letters "A" and "T" complement each other.
The letters "C" and "G" complement each other.
For example, given "ACGT", return "TGCA".

Tests:
Passed:1. complementaryDNA("ACGT") should return "TGCA".
Passed:2. complementaryDNA("ATGCGTACGTTAGC") should return "TACGCATGCAATCG".
Passed:3. complementaryDNA("GGCTTACGATCGAAG") should return "CCGAATGCTAGCTTC".
Passed:4. complementaryDNA("GATCTAGCTAGGCTAGCTAG") should return "CTAGATCGATCCGATCGATC".
*/

function complementaryDNA(strand) {
  let compStrand = "";
  for(let i = 0; i < strand.length; i++) {
    switch(strand[i]) {
      case "A":
        compStrand += "T";
        break;
      case "T":
        compStrand += "A";
        break;
      case "C":
        compStrand += "G";
        break;
      case "G":
        compStrand += "C";
        break;
    }
  }
  return compStrand;
}
