import { getParts } from "./parts.ts";
import { Calendar } from "./types.ts";

const root = Deno.cwd();
const yearRegex = /^\d{4}$/;

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
      const folderPath = [calendar.folderPath, name].join("/");
      const { partOne, partTwo } = getParts(folderPath);
      calendar.days.push({
        title,
        day,
        folderPath,
        partOne,
        partTwo,
      });
    }
  }
}

export { calendars };
