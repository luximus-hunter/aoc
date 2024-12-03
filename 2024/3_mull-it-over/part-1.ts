// Read the input file and split it into lines
const input = await Deno.readTextFile("./input.txt");

// Setup regex for mul(X,Y) where X and Y are max 3 digits
const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;

// Extract all matches of mul(X,Y) from the input
const multiplications = [...input.matchAll(regex)].map(([, a, b]) => [
  Number(a),
  Number(b),
]);

// Calculate the result
const result = multiplications.reduce((acc, [a, b]) => acc + a * b, 0);

// Log the result
console.log("Multiplications:", result);
