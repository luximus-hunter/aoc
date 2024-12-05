// import { folderPaths } from "./lib/pages.ts";
// import { getParts } from "./lib/parts.ts";

// const rootDir = Deno.cwd();

// export default function* () {
//   for (const path of folderPaths) {
//     yield {
//       url: `./${path}/index.html`,
//       title: path,
//       content: `# ${path}`,
//       ...getParts(rootDir + path),
//     };
//   }
// }

import { calendars } from "./lib/data.ts";

export default function* () {
  for (const calendar of calendars) {
    for (const problem of calendar.days) {
      yield {
        url: `./${problem.folderPath}/index.html`,
        title: problem.title,
        content: `# ${problem.title}`,
        partOne: problem.partOne,
        partTwo: problem.partTwo,
      };
    }

    yield {
      url: `./${calendar.year}/index.html`,
      title: calendar.year,
      content: `# ${calendar.year}`,
      days: calendar.days,
    };
  }
}