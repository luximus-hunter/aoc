// Read the input file and split it into lines
const input = await Deno.readTextFile("./input.txt");
const lines = input.split("\r\n");

// Initiate variables
const listOne: number[] = [];
const listTwo: number[] = [];
let similarity = 0;

// Split each line into two numbers and put them into their respective lists
lines.forEach((line) => {
  const [inputOne, inputTwo] = line.split("   ").map(Number);
  listOne.push(inputOne);
  listTwo.push(inputTwo);
});

// Check the similarity between the two lists
listOne.forEach((numOne) => {
  // Count how many times the number appears in the second list
  const appearingTimes = listTwo.filter((numTwo) => numTwo === numOne).length;

  // Add the similarity to the total
  similarity += numOne * appearingTimes;
});

// Print the result
console.log("Similarity: ", similarity);
