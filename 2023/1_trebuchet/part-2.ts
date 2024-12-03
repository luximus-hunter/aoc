// Read the input file and split it into lines
const input = await Deno.readTextFile("./input.txt");
const lines = input.trim().split("\r\n");

// Regex to match numbers, both as digits and strings
const regex = /\d{1}|one|two|three|four|five|six|seven|eight|nine/g;
const stingRegex = /one|two|three|four|five|six|seven|eight|nine/g;

// Replace number strings with digits, still as strings
const numberToDigit = (numberString: string): string => {
  // Map of number strings to digits
  // These have extra characters to allow for other numbers to be replaced
  const numberMap: { [key: string]: string } = {
    one: "on1ne",
    two: "tw2wo",
    three: "thre3hree",
    four: "fou4our",
    five: "fiv5ive",
    six: "si6ix",
    seven: "seve7even",
    eight: "eigh8ight",
    nine: "nin9ine",
  };

  // Return the digit if it exists in the map, otherwise return the string
  return numberMap[numberString] || numberString;
};

// Replace number strings with digits
const lineToDigitArray = (numberString: string): string[] => {
  // Replace number strings with digits
  let replaced = numberString.replace(
    stingRegex,
    (match) => numberToDigit(match),
  );

  // Replace any remaining number strings with digits
  while (replaced.match(stingRegex)) {
    replaced = replaced.replace(stingRegex, (match) => numberToDigit(match));
  }

  // Return the array of digits
  return replaced.match(regex) || [];
};

// Process each line
const results = lines.map((line) => {
  // Get all numbers as an array
  const numbers = lineToDigitArray(line);

  // Get the first and last number and concatenate them
  const result = numbers[0] + numbers[numbers.length - 1];

  // Return the result as a number
  return Number(result);
});

// Sum all results
const result = results.reduce((acc, result) => acc + result, 0);

// Log the result
console.log("Sum:", result);
