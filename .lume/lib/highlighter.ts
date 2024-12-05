import { getHighlighter } from "https://deno.land/x/shiki/shiki/mod.ts";

export const highlighter = await getHighlighter({
  theme: "nord",
});

export const codeToHtml = (code: string) => {
  return highlighter.codeToHtml(code, {
    lang: "typescript",
  });
};
