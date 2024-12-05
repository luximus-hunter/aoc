import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import { calendars } from "./.lume/lib/data.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import typography from "npm:@tailwindcss/typography";

const site = lume({
  dest: "./docs",
  emptyDest: false,
  src: "./.lume",
});

site.use(
  tailwindcss({
    options: {
      plugins: [typography],
    },
  })
);
site.use(postcss());
site.use(jsx());

site.data("calendars", calendars);

site.ignore("README.md");

export default site;
