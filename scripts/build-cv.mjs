// Renders the CV to cv/CV-Aisyah_Mahla_Nurussalamah.pdf using headless Chrome/Edge.
// Usage: npm run cv   (set CHROME_PATH to override the browser binary)
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import {
  cvHeader,
  cvSummary,
  cvInternship,
  cvWork,
  cvOrganization,
  cvEducation,
  cvSkills,
} from "./cv-data.js";

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const entry = (e) => `
  <div class="entry">
    <div class="row"><b>${esc(e.title)}</b><i>${esc(e.period)}</i></div>
    <div class="role"><i>${esc(e.role)}</i></div>
    ${
      e.bullets
        ? `<ul>${e.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>`
        : ""
    }
  </div>`;

const section = (title, body) =>
  `<h2>${title}</h2>${body}`;

const html = `<!doctype html>
<html><head><meta charset="utf-8"><title>CV - Aisyah Mahla Nurussalamah</title>
<style>
  @page { size: Letter; margin: 0.65in 0.7in 0.6in; }
  body { font-family: Calibri, Carlito, sans-serif; font-size: 10pt; color: #000; line-height: 1.3; margin: 0; }
  h1 { font-size: 18pt; text-align: center; margin: 0; line-height: 1.15; }
  .contact { text-align: center; font-size: 10pt; margin-bottom: 14px; }
  .contact a { color: #000; }
  h2 { font-size: 11pt; margin: 14px 0 6px; padding-bottom: 1px; border-bottom: 1px solid #000; text-transform: uppercase; }
  p { margin: 0; text-align: justify; }
  .entry { margin-bottom: 8px; break-inside: avoid; }
  .row { display: flex; justify-content: space-between; font-size: 9.5pt; }
  .role { font-size: 9.5pt; }
  ul { margin: 1px 0 0; padding-left: 20px; }
  li { margin: 0; }
  .skills p { text-align: left; margin-bottom: 3px; }
</style></head><body>
  <h1>${esc(cvHeader.name)}</h1>
  <div class="contact">${cvHeader.contact.map(esc).join(" | ")} | <a href="${cvHeader.portfolioUrl}">Portofolio</a></div>
  ${section("Professional Summary", `<p>${esc(cvSummary)}</p>`)}
  ${section("Internship Experience", cvInternship.map(entry).join(""))}
  ${section("Work Experience", cvWork.map(entry).join(""))}
  ${section("Organizational Experience", cvOrganization.map(entry).join(""))}
  ${section(
    "Education",
    `<div class="entry"><div class="row"><b>${esc(cvEducation.school)}</b><i>${esc(cvEducation.period)}</i></div>
     <div class="role"><i>${esc(cvEducation.degree)}</i></div>
     <div class="role"><b>GPA: ${esc(cvEducation.gpa)}</b></div></div>`,
  )}
  ${section(
    "Skills &amp; Languages",
    `<div class="skills"><p><b>Skills</b>: ${esc(cvSkills.skills)}</p><p><b>Languages</b>: ${esc(cvSkills.languages)}</p></div>`,
  )}
</body></html>`;

const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].filter(Boolean);
const chrome = candidates.find((p) => existsSync(p));
if (!chrome) throw new Error("Chrome/Edge not found. Set CHROME_PATH.");

const outDir = resolve("cv");
mkdirSync(outDir, { recursive: true });
const out = join(outDir, "CV-Aisyah_Mahla_Nurussalamah.pdf");
const tmp = join(tmpdir(), "cv-build.html");
writeFileSync(tmp, html);

execFileSync(chrome, [
  "--headless",
  "--disable-gpu",
  "--no-pdf-header-footer",
  `--print-to-pdf=${out}`,
  pathToFileURL(tmp).href,
]);
rmSync(tmp);
console.log(`CV written to ${out}`);
