type Data = Lume.Data & {
  title: string;
  day: number;
  year: number;
  aocLink: string;
  partOne?: string;
  partOneLink?: string;
  partTwo?: string;
  partTwoLink?: string;
};

export const layout = "layouts/main.vto";

import { codeToHtml } from "../../lib/highlighter.ts";

export default (data: Data, helpers: Lume.Helpers) => {
  const hasPartOne = data.partOne !== undefined;
  const hasPartTwo = data.partTwo !== undefined;

  if (data.partOne) {
    data.partOne = codeToHtml(data.partOne);
  }
  if (data.partTwo) {
    data.partTwo = codeToHtml(data.partTwo);
  }

  return (
    <>
      <header class="text-center mb-4">
        <h3 class="text-3xl italic">
          Day {data.day}, {data.year}
        </h3>
        <h1 class="text-5xl font-extrabold">{data.title}</h1>
      </header>

      <nav class="max-w-[500px] flex gap-2 mx-auto mt-4 mb-12">
        <a
          class="block border border-color-dark flex-1 p-2 rounded-lg text-center hover:bg-dark hover:text-light"
          role="button"
          href="/"
        >
          Back to the calendar
        </a>
        <a
          class="block border border-color-dark flex-1 p-2 rounded-lg text-center hover:bg-dark hover:text-light"
          role="button"
          href={data.aocLink}
        >
          Advent of Code page
        </a>
      </nav>

      <h2 class="text-4xl font-bold text-center mb-2">Solution for Part One</h2>
      {hasPartOne
        ? (
          <>
            <h4 class="text-xl italic text-center mb-2 underline">
              <a href={data.partOneLink}>
                Part one on Github
              </a>
            </h4>
            <div dangerouslySetInnerHTML={{ __html: data.partOne as string }} />
          </>
        )
        : <p class="text-center">No solution provided yet.</p>}

      <h2 class="text-4xl font-bold text-center mt-12 mb-2">
        Solution for Part Two
      </h2>
      {hasPartTwo
        ? (
          <>
            <h4 class="text-xl italic text-center mb-2 underline">
              <a href={data.partTwoLink}>
                Part two on Github
              </a>
            </h4>
            <div dangerouslySetInnerHTML={{ __html: data.partTwo as string }} />
          </>
        )
        : <p class="text-center">No solution provided yet.</p>}
    </>
  );
};
