import "jsr:@std/dotenv/load";
import { parseArgs } from "jsr:@std/cli/parse-args";

// Get the session cookie from the environment variables
const SESSION = Deno.env.get("AOC_SESSION");

// Check if the session cookie is set
if (!SESSION) {
  console.error("A session cookie is required to fetch the input data.");
  console.info("Please set the AOC_SESSION environment variable.");
  Deno.exit(1);
}

// Gather the date and day of the year
const date = new Date();
let year = date.getFullYear();
let day = date.getDate();

// See if the user provided a year and day
const flags = parseArgs(Deno.args, {
  string: ["day", "year"],
});

if (flags.year) year = Number(flags.year);
if (flags.day) day = Number(flags.day);

// Check if the year and day are valid
if (year < 2015 || year > date.getFullYear()) {
  console.error("Invalid year.");
  Deno.exit(1);
}

if (day < 1 || day > 25) {
  console.error("Invalid day.");
  Deno.exit(1);
}

// Generate the URL to fetch the input data
const dayInfoUrl = `https://adventofcode.com/${year}/day/${day}`;
const inputUrl = `${dayInfoUrl}/input`;

// Fetch the day info and input data concurrently
const fetchOptions = {
  headers: {
    cookie: `session=${SESSION}`,
  },
};

const [dayInfoRes, inputRes] = await Promise.all([
  fetch(dayInfoUrl, fetchOptions),
  fetch(inputUrl, fetchOptions),
]);

// Check if the request was successful
if (!dayInfoRes.ok || !inputRes.ok) {
  console.error("Failed to fetch data.");
  console.error(`Day info status: ${dayInfoRes.status}`);
  console.error(`Input status: ${inputRes.status}`);
  Deno.exit(1);
}

// Read the response bodies as text
const info = await dayInfoRes.text();
const input = await inputRes.text();

// Extract the task title from the day info
function extractTaskTitle(html: string): string | null {
  const match = html.match(/<h2>--- Day \d+: (.+) ---<\/h2>/);
  return match ? match[1].toLowerCase().replace(/\s+/g, "-") : null;
}

// Check if the task title was extracted
const title = extractTaskTitle(info);

if (!title) {
  console.error("Failed to extract the task title.");
  Deno.exit(1);
}

// Set the folder name
const folder = `./${year}/${day}_${title}`;

// Check if the folder already exists
try {
  Deno.statSync(folder).isDirectory;
  console.error("The folder already exists.");
  Deno.exit(1);
} catch {
  // Do nothing, the folder does not exist
}

// Create the folder if it does not exist
await Deno.mkdir(folder, { recursive: true });

// Write the input data to a file
Deno.writeTextFile(`${folder}/input.txt`, input.trim());

// Create the scaffold files
Deno.writeTextFile(`${folder}/part-1.ts`, "");
Deno.writeTextFile(`${folder}/part-2.ts`, "");

// Log the success message
console.info(`Scaffold created for ${year} day ${day} - ${title}`);
console.info(`Open the task at ${dayInfoUrl}`);
