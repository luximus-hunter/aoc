type Data = Lume.Data & {
  title: string;
  aocLink: string;
  partOne?: string;
  partOneLink?: string;
  partTwo?: string;
  partTwoLink?: string;
};

export const layout = "layouts/main.vto";

export default (data: Data, helpers: Lume.Helpers) => {
  return (
    <div class="prose">
      <h1>{data.title}</h1>
      <a href={data.aocLink}>Advent of Code page</a>
      <a href="/">&larr; Back to the calendar</a>
      <h2>Solution for part one</h2>
      {data.partOneLink !== undefined && (
        <p>
          Part one on <a href={data.partOneLink}>Github</a>
        </p>
      )}
      <pre>
        <code>{data.partOne}</code>
      </pre>
      <h2>Solution for part two</h2>
      {data.partTwoLink !== undefined && (
        <p>
          Part two on <a href={data.partTwoLink}>Github</a>
        </p>
      )}
      <pre>
        <code>{data.partTwo}</code>
      </pre>
    </div>
  );
};
