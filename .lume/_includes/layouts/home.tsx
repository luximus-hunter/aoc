import { Pages } from "../../lib/types.ts";

type Data = Lume.Data & {
  title: string;
  pages: Pages;
};

export const layout = "layouts/main.vto";

export default (data: Data, helpers: Lume.Helpers) => {
  return (
    <>
      <header class="text-center mb-4">
        <h1 class="text-5xl font-extrabold">{data.title}</h1>
      </header>
      <nav class="max-w-[500px] flex gap-2 mx-auto mt-4 mb-12">
        <a
          class="block border border-color-dark flex-1 p-2 rounded-lg text-center hover:bg-dark hover:text-light"
          role="button"
          href="https://adventofcode.com/"
        >
          Advent of Code
        </a>
      </nav>
      <article class="flex gap-4 flex-col w-fit mx-auto">
        {data.pages.map((calendar) =>
          calendar.map((problem) => (
            <a
              class="text-xl italic text-center mb-2 underline"
              href={`/${problem.year}/${problem.day}`}
            >
              Day {problem.day} {problem.year}: {problem.title}
            </a>
          ))
        )}
      </article>
    </>
  );
};
