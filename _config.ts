import lume from "lume/mod.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import lang_typescript from "npm:highlight.js/lib/languages/typescript";
import {calendars} from "./.lume/lib/data.ts";

const site = lume({
  dest: "./docs",
  emptyDest: false,
  src: "./.lume",
});

site.use(
  codeHighlight({
    languages: {
      typescript: lang_typescript,
    },
  })
);

site.data("calendars", calendars);

site.ignore("README.md");

export default site;
