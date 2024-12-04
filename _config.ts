import lume from "lume/mod.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import lang_typescript from "npm:highlight.js/lib/languages/typescript";

const site = lume({
  dest: "./docs",
  emptyDest: false,
  src: "./.lume",
});

// site.use(blog());

site.use(
  codeHighlight({
    languages: {
      typescript: lang_typescript,
    },
  }),
);

site.copy("./index.html");
site.ignore("README.md");

export default site;
