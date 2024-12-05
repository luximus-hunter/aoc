import { calendars } from "./lib/data.ts";

export default function* () {
  for (const calendar of calendars) {
    for (const problem of calendar.days) {
      yield {
        url: `./${calendar.year}/${problem.day}/index.html`,
        layout: "layouts/problem.tsx",
        content: `# ${problem.title}`,
        title: problem.title,
        day: problem.day,
        year: calendar.year,
        aocLink: problem.aocLink,
        partOne: problem.partOne,
        partOneLink: problem.partOneLink,
        partTwo: problem.partTwo,
        partTwoLink: problem.partTwoLink,
      };
    }
  }
}
