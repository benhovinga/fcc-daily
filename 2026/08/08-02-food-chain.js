/*
Food Chain
Given an array of [predator, prey] pairs, return the food chain from the apex predator down to the bottom.

The apex predator is the animal that is never prey to another animal.
Return the chain as an array of strings.

Tests:
Passed:1. getFoodChain([["cat", "mouse"]]) should return ["cat", "mouse"].
Passed:2. getFoodChain([["wolf", "deer"], ["deer", "grass"]]) should return ["wolf", "deer", "grass"].
Passed:3. getFoodChain([["hawk", "snake"], ["snake", "frog"], ["frog", "fly"]]) should return ["hawk", "snake", "frog", "fly"].
Passed:4. getFoodChain([["rabbit", "grass"], ["fox", "rabbit"], ["eagle", "fox"]]) should return ["eagle", "fox", "rabbit", "grass"].
Passed:5. getFoodChain([["seal", "salmon"], ["herring", "shrimp"], ["orca", "seal"], ["shrimp", "plankton"], ["salmon", "herring"]]) should return ["orca", "seal", "salmon", "herring", "shrimp", "plankton"].
*/

function getFoodChain(pairs) {
  const entries = Object.fromEntries(pairs);
  const predators = Object.keys(entries);
  const prey = Object.values(entries);
  const apex = predators.filter(pred => !prey.includes(pred))[0];
  
  const chain = [apex];

  for (let i = 0; i < pairs.length; i++) {
    chain.push(entries[chain.at(-1)])
  }

  return chain;
}
