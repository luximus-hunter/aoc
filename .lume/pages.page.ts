import { folderPaths } from "./lib/pages.ts";
import { getParts } from "./lib/parts.ts";

const rootDir = Deno.cwd();

export default function* () {
  for (const path of folderPaths) {
    yield {
      url: `./${path}/index.html`,
      title: path,
      content: `# ${path}`,
      ...getParts(rootDir + path),
    };
  }
}
