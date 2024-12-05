import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import { calendars } from "./.lume/lib/data.ts";

const site = lume({
  dest: "./docs",
  emptyDest: false,
  src: "./.lume",
});

site.use(jsx());

site.data("calendars", calendars);

site.ignore("README.md");

export default site;
