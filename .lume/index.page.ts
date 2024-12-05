import { calendars } from "./lib/data.ts";

export default function* () {
  yield {
    url: `/`,
    layout: "layouts/home.tsx",
    title: "Advent of Code 2020",
    pages: calendars
      .map((calendar) =>
        calendar.days
          .filter((day) => day.partOne || day.partTwo)
          .map((day) => ({
            year: calendar.year,
            day: day.day,
            title: day.title,
          }))
      )
      .sort((a, b) => b[0].year - a[0].year)
      .map((calendar) => calendar.sort((a, b) => b.day - a.day)),
  };
}
