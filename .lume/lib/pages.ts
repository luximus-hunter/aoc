const years: string[] = [];
const pagesList: {
  [key: string]: string[];
} = {};
const folderPaths: string[] = [];

const rootDir = Deno.cwd();

for (const dirEntry of Deno.readDirSync(rootDir)) {
  if (dirEntry.isDirectory && /^\d{4}$/.test(dirEntry.name)) {
    years.push(dirEntry.name);
  }
}

for (const year of years) {
  const ps: string[] = (pagesList[year] = []);
  for (const dirEntry of Deno.readDirSync(`.\\${year}`)) {
    ps.push(dirEntry.name);
  }
}

for (const year of years) {
  for (const page of pagesList[year]) {
    folderPaths.push(`./${year}/${page}`);
  }
}

export { folderPaths, pagesList, years };
