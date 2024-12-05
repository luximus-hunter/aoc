// Read the input file and split it into lines
const input = await Deno.readTextFile("./input.txt");
const sortingRules = input
  .split("\n\n")[0]
  .trim()
  .split("\n")
  .map((line) => line.split("|"));
const pageCombinations = input
  .split("\n\n")[1]
  .trim()
  .split("\n")
  .map((line) => line.split(","));

// Define a function that checks if the pages are correctly sorted based on the sorting rules
const isSortedCorrectly = (pages: string[], rules: string[][]): boolean => {
  // rules: [["A", "B"], ["C", "B"], ["C", "A"]], where the left number should come before the right number
  // pages: ["A", "B", "C"] (this would be incorrect, as "C" should come before "B" and "A")
  for (let i = 0; i < pages.length - 1; i++) {
    const left = pages[i];
    const right = pages[i + 1];

    // Check if the current pair of pages is not sorted correctly
    if (!rules.some(([first, second]) => first === left && second === right)) {
      return false;
    }
  }

  return true;
};

// Sort the pages in each page combination
const sortedPageCombinations = pageCombinations.filter((pages) =>
  isSortedCorrectly(pages, sortingRules)
);

// Get the total sum of the middle values of each page combination
const sumOfMiddleValues = sortedPageCombinations.reduce((acc, pages) => {
  const middleIndex = Math.floor(pages.length / 2);
  return acc + Number(pages[middleIndex]);
}, 0);

// Output the result
console.log("Sum of middle values:", sumOfMiddleValues);
