import "jsr:@std/dotenv/load";
import { getParts } from "./parts.ts";
import { Calendar } from "./types.ts";

const root = Deno.cwd();
const yearRegex = /^\d{4}$/;
const repositoryUrl = "https://github.com/" + Deno.env.get("GITHUB_REPO");

const calendars: Calendar[] = [];
for (const dir of Deno.readDirSync(root)) {
  if (dir.isDirectory && yearRegex.test(dir.name)) {
    calendars.push({
      year: parseInt(dir.name, 10),
      folderPath: [root, dir.name].join("/"),
      days: [],
    });
  }
}

for (const calendar of calendars) {
  for (const dir of Deno.readDirSync(calendar.folderPath)) {
    if (dir.isDirectory) {
      const name = dir.name;
      const title = name
        .split("_")[1]
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
      const day = parseInt(name.split("_")[0], 10);
      const aocLink = `https://adventofcode.com/${calendar.year}/day/${day}`;
      const folderPath = [calendar.folderPath, name].join("/");
      const { partOne, partTwo } = getParts(folderPath);
      const partOneLink = partOne
        ? `${repositoryUrl}/tree/main/${calendar.year}/${name}/part-1.ts`
        : undefined;
      const partTwoLink = partTwo
        ? `${repositoryUrl}/tree/main/${calendar.year}/${name}/part-2.ts`
        : undefined;

      calendar.days.push({
        title,
        day,
        aocLink,
        folderPath,
        partOne,
        partOneLink,
        partTwo,
        partTwoLink,
      });
    }
  }
}

export { calendars };
