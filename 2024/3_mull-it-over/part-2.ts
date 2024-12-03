// Read the input file and split it into lines
const input = await Deno.readTextFile("./input.txt");

// Setup regex for mul(X,Y) where X and Y are max 3 digits
const regex = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g;

let multiplicationEnabled = true;

// Extract all matches of mul(X,Y) from the input
const multiplications = [...input.matchAll(regex)]
  .map(([s]) => {
    // If do() is found, set multiplicationsActive to trueF
    if (s === "do()") {
      multiplicationEnabled = true;
      return null;
    }

    // If don't() is found, set multiplicationsActive to false
    if (s === "don't()") {
      multiplicationEnabled = false;
      return null;
    }

    // If multiplications are not active, return null
    if (!multiplicationEnabled) {
      return null;
    }

    // return the numbers from the string
    return s.split("(")[1].split(")")[0].split(",").map(Number);
  })
  .filter((mul) => mul !== null);

// Calculate the result
const result = multiplications.reduce((acc, [a, b]) => acc + a * b, 0);

// Log the result
console.log("Multiplications:", result);
