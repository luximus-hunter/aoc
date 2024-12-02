// Read the input file and split it into lines
const input = await Deno.readTextFile("./input.txt");
const lines = input.split("\r\n");

// Initiate variables
const listOne: number[] = [];
const listTwo: number[] = [];
let distance = 0;

// Split each line into two numbers and put them into their respective lists
lines.forEach((line) => {
  const [inputOne, inputTwo] = line.split("   ").map(Number);
  listOne.push(inputOne);
  listTwo.push(inputTwo);
});

// Sort the lists in ascending order
listOne.sort((a, b) => a - b);
listTwo.sort((a, b) => a - b);

// Loop over each combination of numbers in the lists and calculate the distance
for (let i = 0; i < listOne.length; i++) {
  distance += Math.abs(listOne[i] - listTwo[i]);
}

// Print the result
console.log("Distance: ", distance);
