export type Solution = string;

export type Problem = {
  title: string;
  day: number;
  aocLink: string;
  folderPath: string;
  partOne?: Solution;
  partOneLink?: string;
  partTwo?: Solution;
  partTwoLink?: string;
};

export type Calendar = {
  year: number;
  folderPath: string;
  days: Problem[];
};

export type Page = {
  year: number;
  day: number;
  title: string;
};

export type Pages = Page[][];
