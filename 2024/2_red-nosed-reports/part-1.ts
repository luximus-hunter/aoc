// Read the input file and split it into lines
const input = await Deno.readTextFile("./input.txt");
const reports = input.split("\r\n").map((line) => line.split(" ").map(Number));

// Check function
const isSafe = (report: number[]) => {
  // Check id the report is sorted in ascending or descending order
  const ascending =
    report.join(",") === [...report].sort((a, b) => a - b).join(",");
  const descending =
    report.join(",") === [...report].sort((a, b) => b - a).join(",");
  const sorted = ascending || descending;

  const jumps = report
    .map((value, index) => report[index + 1] - value)
    .slice(0, -1);
  const jumpsAreSafe = jumps.every(
    (jump) => Math.abs(jump) >= 1 && Math.abs(jump) <= 3,
  );

  // Return if the report is safe
  return sorted && jumpsAreSafe;
};

// Loop over each report
const safe = reports.reduce(
  (total, report) => (isSafe(report) ? total + 1 : total),
  0,
);

// Print the result
console.log("Safe: ", safe);
