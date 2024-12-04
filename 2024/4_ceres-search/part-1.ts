// Read the input file and split it into lines
const input = await Deno.readTextFile("./input.txt");
const lines: string[][] = input
  .split("\n")
  .map((line) => line.trim().split(""));

// Get the max row and column
const maxRow = lines.length;
const maxCol = lines[0].length;

// The target to search for
const target = "XMAS";

const isOutOfBounds = (row: number, col: number): boolean => {
  return row < 0 || col < 0 || row >= maxRow || col >= maxCol;
};

const isLetterMatch = (row: number, col: number, letter: string): boolean => {
  return !isOutOfBounds(row, col) && lines[row][col] === letter;
};

const StartLetterIsPartOfTarget = (row: number, col: number): number => {
  // Object to store if the target is part of the direction
  const isTarget = {
    right: true,
    bottom: true,
    left: true,
    top: true,
    topRight: true,
    bottomRight: true,
    bottomLeft: true,
    topLeft: true,
  };

  // Split the target into letters
  const letters = target.split("");

  // Loop through the letters of the target
  letters.forEach((letter, index) => {
    // Right
    if (!isLetterMatch(row, col + index, letter)) {
      isTarget.right = false;
    }
    // Bottom
    if (!isLetterMatch(row + index, col, letter)) {
      isTarget.bottom = false;
    }
    // Left
    if (!isLetterMatch(row, col - index, letter)) {
      isTarget.left = false;
    }
    // Top
    if (!isLetterMatch(row - index, col, letter)) {
      isTarget.top = false;
    }
    // Top-right
    if (!isLetterMatch(row - index, col + index, letter)) {
      isTarget.topRight = false;
    }
    // Bottom-right
    if (!isLetterMatch(row + index, col + index, letter)) {
      isTarget.bottomRight = false;
    }
    // Bottom-left
    if (!isLetterMatch(row + index, col - index, letter)) {
      isTarget.bottomLeft = false;
    }
    // Top-left
    if (!isLetterMatch(row - index, col - index, letter)) {
      isTarget.topLeft = false;
    }
  });

  // Get all directions that are part of the target (filter by true)
  const partOfNumberOfTargets = Object.values(isTarget).filter(
    (value) => value,
  );

  // Return the amount of directions that are part of the target
  return partOfNumberOfTargets.length;
};

// Count the amount of targets found
const amountOfTargets = lines.reduce(
  (acc, line, row) =>
    acc +
    line
      .map((cell, col) => {
        if (cell !== target[0]) return 0;
        return StartLetterIsPartOfTarget(row, col);
      })
      .reduce((acc, x) => acc + x, 0),
  0,
);

// Print the amount of targets found
console.log(`Targets: ${amountOfTargets}`);
