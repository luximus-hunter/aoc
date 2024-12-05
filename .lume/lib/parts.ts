export const getParts = (
  dir: string
): { partOne: string | undefined; partTwo: string | undefined } => {
  const partOneFileName = `${dir}/part-1.ts`;
  const partTwoFileName = `${dir}/part-2.ts`;

  let partOne = undefined;
  let partTwo = undefined;

  try {
    partOne = Deno.readTextFileSync(partOneFileName);
  } catch (_e) {
    console.error(
      `Error reading file: ${partOneFileName}, using default content`
    );
  }

  try {
    partTwo = Deno.readTextFileSync(partTwoFileName);
  } catch (_e) {
    console.error(
      `Error reading file: ${partTwoFileName}, using default content`
    );
  }

  return { partOne, partTwo };
};
