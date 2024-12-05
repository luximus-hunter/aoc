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
  for (let i = 0; i < pages.length - 1; i++) {
    const left = pages[i];
    const right = pages[i + 1];

    if (!rules.some(([first, second]) => first === left && second === right)) {
      return false;
    }
  }

  return true;
};

// Define a function that sorts the pages correctly based on the sorting rules
const sortCorrectly = (pages: string[], rules: string[][]): string[] => {
  // Keep going until the pages are sorted correctly
  while (!isSortedCorrectly(pages, rules)) {
    // Iterate over each pair of pages
    for (let i = 0; i < pages.length - 1; i++) {
      const left = pages[i];
      const right = pages[i + 1];

      // Check if the pair is not sorted correctly
      if (
        !rules.some(([first, second]) => first === left && second === right)
      ) {
        // Swap the pages
        const leftIndex = pages.indexOf(left);
        const rightIndex = pages.indexOf(right);

        pages[leftIndex] = right;
        pages[rightIndex] = left;
      }
    }
  }

  // Return the sorted pages
  return pages;
};

// Get the page combinations that are not sorted correctly
const unsortedPageCombinations = pageCombinations.filter(
  (pages) => !isSortedCorrectly(pages, sortingRules),
);

// Sort the pages in each unsorted page combination
const sortedPageCombinations = unsortedPageCombinations.map((pages) =>
  sortCorrectly(pages, sortingRules)
);

// Get the total sum of the middle values of each page combination
const sumOfMiddleValues = sortedPageCombinations.reduce((acc, pages) => {
  const middleIndex = Math.floor(pages.length / 2);
  return acc + Number(pages[middleIndex]);
}, 0);

// Output the result
console.log("Sum of middle values:", sumOfMiddleValues);
