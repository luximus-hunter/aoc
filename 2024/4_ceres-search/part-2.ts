// Read the input file and split it into lines
const input = await Deno.readTextFile("./input.txt");
const lines: string[][] = input
  .split("\n")
  .map((line) => line.trim().split(""));

// Function to check if the given index is part of the target
const StartLetterIsPartOfTarget = (row: number, col: number): boolean => {
  // Make a 3x3 grid around the index
  const grid: string[][] = [
    [
      lines[row - 1]?.[col - 1],
      lines[row - 1]?.[col],
      lines[row - 1]?.[col + 1],
    ],
    [lines[row]?.[col - 1], lines[row]?.[col], lines[row]?.[col + 1]],
    [
      lines[row + 1]?.[col - 1],
      lines[row + 1]?.[col],
      lines[row + 1]?.[col + 1],
    ],
  ];

  // Return if the grid is not complete
  if (grid.flat().length !== 3 * 3) return false;

  // Starting at the top
  const startsFromTop = grid[0][0] === "M" && // M.M
    grid[0][2] === "M" && // .A.
    grid[1][1] === "A" && // S.S
    grid[2][0] === "S" &&
    grid[2][2] === "S";
  // Starting at the left
  const startsFromLeft = grid[0][0] === "M" && // M.S
    grid[0][2] === "S" && // .A.
    grid[1][1] === "A" && // M.S
    grid[2][0] === "M" &&
    grid[2][2] === "S";
  // Starting at the right
  const startsFromRight = grid[0][0] === "S" && // S.M
    grid[0][2] === "M" && // .A.
    grid[1][1] === "A" && // S.M
    grid[2][0] === "S" &&
    grid[2][2] === "M";
  // Starting at the bottom
  const startsFromBottom = grid[0][0] === "S" && // S.S
    grid[0][2] === "S" && // .A.
    grid[1][1] === "A" && // M.M
    grid[2][0] === "M" &&
    grid[2][2] === "M";

  // Return if any of the starts are true
  return startsFromTop || startsFromLeft || startsFromRight || startsFromBottom;
};

// Count the amount of targets found
const amountOfTargets = lines.reduce(
  (acc, line, row) =>
    acc +
    line.reduce(
      (acc, _, col) => acc + (StartLetterIsPartOfTarget(row, col) ? 1 : 0),
      0,
    ),
  0,
);

// Print the amount of targets found
console.log(`Targets: ${amountOfTargets}`);
