/**
 * @deprecated Project pages are now dynamic: src/app/[slug]/page.tsx
 * Reads projects.jsonc only to validate syntax.
 */
const fs = require("fs");
const path = require("path");
const { parse } = require("jsonc-parser");

const projectsPath = path.join(
  __dirname,
  "../../public/assets/data/projects.jsonc"
);
const projectData = parse(fs.readFileSync(projectsPath, "utf-8"));

if (!projectData || typeof projectData !== "object") {
  console.error("projects.jsonc is empty or invalid");
  process.exit(1);
}

const keys = Object.keys(projectData);
console.log(`projects.jsonc OK — ${keys.length} project(s): ${keys.join(", ")}`);
console.log("Detail routes: /" + keys.join(", /"));
