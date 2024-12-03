// Read the input file and split it into lines
const input = await Deno.readTextFile("./input.txt");
const lines = input.trim().split("\r\n");

// Regex to match numbers of one digit
const regex = /\d{1}/g;

// Process each line and store the result
const results = lines.map((line) => {
  // Get all matches of the regex
  const matches = line.matchAll(regex);

  // Convert the matches to numbers and store them in an array
  const numbers = [...matches].map(([number]) => number);

  // Get the first and last number and concatenate them
  const result = numbers[0] + numbers[numbers.length - 1];

  // Return the result as a number
  return Number(result);
});

// Sum all results
const sum = results.reduce((acc, result) => acc + result, 0);

// Log the result
console.log("Sum:", sum);
