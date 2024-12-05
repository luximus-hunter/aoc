export type Solution = string;

export type Problem = {
  title: string;
  day: number;
  folderPath: string;
  partOne?: Solution;
  partTwo?: Solution;
};

export type Calendar = {
  year: number;
  folderPath: string;
  days: Problem[];
};
