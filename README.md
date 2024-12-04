# Advent of Code

Advent of Code solutions

_Started December 1st, 2024_

## Repo Structure

- Each year has its own folder, which is further split up into days.
- Each day will be formatted `day-number_task-name`.
- The following files will always be present in a problem:
  - `input.txt` - This will not be commited.
  - `part-1.ts`
  - `part-2.ts`

## Getting Started

To start working on Advent of Code puzzles, use the scaffold task from Deno:

```bash
deno task scaffold
```

This will fetch the input for that day, and create the files for solving the
problem. It will also provide a link to the problem on the Advent of Code
website.

If you want to fetch from a specific day or year, you can do that the following
way:

```bash
deno task scaffold --day=2 --year=2024
```

Both parameters are optional.

## Links

- [Advent of Code](https://adventofcode.com/).
- [Solve AoC with Deno for rewards](https://deno.com/blog/advent-of-code-2024)
  (2024).
