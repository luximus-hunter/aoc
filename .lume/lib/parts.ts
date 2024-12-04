export const getParts = (dir: string): { partOne: string; partTwo: string } => {
  const partOneFileName = `${dir}/part-1.ts`;
  const partTwoFileName = `${dir}/part-2.ts`;

  let partOne = "//TODO - Implement part 1";
  let partTwo = "//TODO - Implement part 2";

  try {
    partOne = Deno.readTextFileSync(partOneFileName);
  } catch (_e) {
    console.error(`Error reading file: ${partOneFileName}`);
  }

  try {
    partTwo = Deno.readTextFileSync(partTwoFileName);
  } catch (_e) {
    console.error(`Error reading file: ${partTwoFileName}`);
  }

  return { partOne, partTwo };
};
