// Read the input file and split it into lines
const input = await Deno.readTextFile("./input.txt");
const grid = input.split("\n").map((line) => line.split(""));

// the guard is the first of any of the following characters: ^, v, <, >
const guard = grid
  .map((row) => row.find((cell) => "^v<>".includes(cell)))
  .find((cell) => cell);

if (!guard) {
  throw new Error("No guard found");
}

let guardPosition = {
  x: grid.findIndex((row) => row.includes(guard)),
  y: grid[grid.findIndex((row) => row.includes(guard))].indexOf(guard),
};

const moveGuard = (position: { x: number; y: number }) => {
  const nextPosition = { ...position };
  const direction = grid[position.x][position.y]; // ^, v, <, >

  const nextPositionOutOfBounds = nextPosition.x < 0 ||
    nextPosition.x >= grid.length ||
    nextPosition.y < 0 ||
    nextPosition.y >= grid[0].length;

  if (direction === "^") {
    nextPosition.x--;
  } else if (direction === "v") {
    nextPosition.x++;
  } else if (direction === "<") {
    nextPosition.y--;
  } else if (direction === ">") {
    nextPosition.y++;
  }

  // check if the next position is a wall
  if (
    !nextPositionOutOfBounds &&
    grid[nextPosition.x][nextPosition.y] === "#"
  ) {
    // rotate the guard 90 degrees to the right
    const directions = ["^", ">", "v", "<"];
    const currentIndex = directions.indexOf(direction);
    const nextIndex = (currentIndex + 1) % directions.length;
    grid[position.x][position.y] = directions[nextIndex];
  } else {
    // move the guard
    grid[nextPosition.x][nextPosition.y] = direction;
    grid[position.x][position.y] = "X";
    guardPosition = { ...nextPosition };
  }
};

const isGuardInsideBounds = () =>
  grid.some((row) => row.includes("^")) ||
  grid.some((row) => row.includes("v")) ||
  grid.some((row) => row.includes("<")) ||
  grid.some((row) => row.includes(">"));

while (isGuardInsideBounds()) {
  moveGuard(guardPosition);
}

// count the number of cells visited by the guard
const visitedCells = grid.flat().filter((cell) => cell === "X");

console.log(visitedCells.length);
