// Renders the portfolio PDF (cv/Portfolio-Aisyah_Mahla_Nurussalamah.pdf) straight from
// src/data/content.js, so it follows the website. Usage: npm run portfolio-pdf
// (set CHROME_PATH to override the browser binary).
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

// content.js imports assets (jpeg/mp4) that Node can't load. Rewrite those imports into
// plain absolute file URLs, then import the result as a normal module.
const dataDir = resolve("src/data");
const source = readFileSync(join(dataDir, "content.js"), "utf8").replace(
  /^import (\w+) from "(.+?)";$/gm,
  (_, name, rel) =>
    `const ${name} = ${JSON.stringify(pathToFileURL(resolve(dataDir, rel)).href)};`,
);
const tmpModule = join(tmpdir(), `content-${process.pid}.mjs`);
writeFileSync(tmpModule, source);
const { profile, bio, skills, education, experience, gallery, contentPosts } =
  await import(pathToFileURL(tmpModule).href);
rmSync(tmpModule);

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const card = (item) => {
  const link = item.youtubeId
    ? `<div class="link">Watch: youtu.be/${esc(item.youtubeId)}</div>`
    : item.video
      ? `<div class="link">Video available on the website</div>`
      : "";
  return `
  <article class="card">
    <img src="${item.image}" alt="">
    <div class="body">
      <div class="role">${esc(item.role)}</div>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.description)}</p>
      ${link}
    </div>
  </article>`;
};

const html = `<!doctype html>
<html><head><meta charset="utf-8"><title>Portfolio - ${esc(profile.name)}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Poppins:wght@500;600&display=swap" rel="stylesheet">
<style>
  @page { size: A4; margin: 0; }
  :root { --cream:#faf7f2; --beige:#f1ebe0; --border:#e6ddcb; --text:#3a342b; --muted:#6f6657; --heading:#24201a; --accent:#a9763f; --soft:#f3e4cf; }
  * { box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { margin: 0; background: var(--cream); color: var(--text); font-family: Inter, "Segoe UI", sans-serif; font-size: 10pt; line-height: 1.5; }
  h1, h2, h3 { font-family: Poppins, "Segoe UI", sans-serif; color: var(--heading); margin: 0; }
  .page { width: 210mm; height: 297mm; padding: 16mm 16mm 12mm; page-break-after: always; overflow: hidden; }
  .page:last-child { page-break-after: auto; }
  .eyebrow { font-size: 8pt; letter-spacing: .14em; text-transform: uppercase; color: var(--accent); font-weight: 500; }
  .cover { text-align: center; }
  .cover img { width: 46mm; height: 46mm; border-radius: 50%; object-fit: cover; border: 3px solid #fff; margin-top: 6mm; }
  .cover h1 { font-size: 26pt; margin: 6mm 0 2mm; }
  .cover .title { color: var(--accent); font-family: Poppins, sans-serif; font-weight: 500; font-size: 12pt; }
  .cover .tagline { max-width: 130mm; margin: 4mm auto 0; color: var(--muted); }
  .contact { margin-top: 5mm; font-size: 9.5pt; color: var(--muted); }
  .panel { background: #fff; border: 1px solid var(--border); border-radius: 12px; padding: 5mm 6mm; }
  .section { margin-top: 9mm; text-align: left; }
  .section h2 { font-size: 15pt; margin: 1mm 0 4mm; }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 5mm; }
  .panel h3 { font-size: 11pt; margin-bottom: 2mm; }
  .panel ul { list-style: none; margin: 0; padding: 0; }
  .panel li { padding: 1.4mm 0; border-bottom: 1px solid var(--beige); }
  .panel li:last-child { border-bottom: 0; }
  .exp { margin-bottom: 4mm; break-inside: avoid; }
  .exp .row { display: flex; justify-content: space-between; gap: 6mm; font-size: 9.5pt; }
  .exp b { color: var(--heading); } .exp .period { color: var(--muted); white-space: nowrap; }
  .exp .org { color: var(--accent); font-size: 9.5pt; }
  .exp ul { margin: 1mm 0 0; padding-left: 5mm; }
  .page-title { margin-bottom: 7mm; } .page-title h2 { font-size: 18pt; }
  .card { display: flex; gap: 6mm; background: #fff; border: 1px solid var(--border); border-radius: 12px; padding: 4mm; margin-bottom: 5mm; height: 79mm; overflow: hidden; }
  .card img { width: 52mm; height: 71mm; object-fit: cover; border-radius: 8px; flex: none; }
  .card .body { display: flex; flex-direction: column; justify-content: center; }
  .card .role { font-size: 8pt; letter-spacing: .1em; text-transform: uppercase; color: var(--accent); font-weight: 500; margin-bottom: 1.5mm; }
  .card h3 { font-size: 12pt; line-height: 1.3; margin-bottom: 2.5mm; }
  .card p { margin: 0; color: var(--muted); font-size: 9.5pt; }
  .card .link { margin-top: 2.5mm; font-size: 8.5pt; color: var(--accent-dark, #8a5f30); background: var(--soft); border-radius: 99px; padding: .8mm 3mm; align-self: flex-start; }
</style></head><body>
  <section class="page cover">
    <div class="eyebrow">${esc(profile.title)}</div>
    <img src="${profile.photo}" alt="">
    <h1>${esc(profile.name)}</h1>
    <div class="title">${esc(profile.title)}</div>
    <p class="tagline">${esc(profile.tagline)}</p>
    <div class="contact">${esc(profile.location)} &nbsp;|&nbsp; ${esc(profile.phone)} &nbsp;|&nbsp; ${esc(profile.email)}</div>
    <div class="section"><div class="eyebrow">About me</div><h2>Behind every smooth event</h2>
      <div class="panel"><p style="margin:0">${esc(bio)}</p></div></div>
    <div class="section"><div class="eyebrow">Skills</div><h2>What I bring to the table</h2>
      <div class="grid2">
        <div class="panel"><h3>Hard Skills</h3><ul>${skills.hard.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>
        <div class="panel"><h3>Soft Skills</h3><ul>${skills.soft.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>
      </div></div>
  </section>

  <section class="page">
    <div class="page-title"><div class="eyebrow">Experience</div><h2>Where I've worked</h2></div>
    ${experience
      .map(
        (e) => `<div class="exp panel"><div class="row"><b>${esc(e.role)}</b><span class="period">${esc(e.period)}</span></div>
        <div class="org">${esc(e.org)}</div><ul>${e.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul></div>`,
      )
      .join("")}
    <div class="section"><div class="eyebrow">Education</div>
      <div class="panel" style="margin-top:3mm"><div class="exp" style="margin:0"><div class="row"><b>${esc(education.degree)}</b><span class="period">${esc(education.period)}</span></div>
      <div class="org">${esc(education.institution)}</div><div>GPA ${esc(education.gpa)}</div></div></div></div>
  </section>

  ${chunk(gallery, 3, "Portfolio", "Events I've worked on")}
  ${chunk(contentPosts, 3, "Content", "Videos & short films")}
</body></html>`;

function chunk(items, size, eyebrow, heading) {
  const pages = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push(
      `<section class="page">${
        i === 0
          ? `<div class="page-title"><div class="eyebrow">${eyebrow}</div><h2>${heading}</h2></div>`
          : ""
      }${items.slice(i, i + size).map(card).join("")}</section>`,
    );
  }
  return pages.join("\n");
}

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
const out = join(outDir, "Portfolio-Aisyah_Mahla_Nurussalamah.pdf");
// Written next to the project so file:// image URLs and web fonts load without issue.
const tmp = join(tmpdir(), "portfolio-build.html");
writeFileSync(tmp, html);

execFileSync(chrome, [
  "--headless",
  "--disable-gpu",
  "--no-pdf-header-footer",
  "--virtual-time-budget=8000",
  `--print-to-pdf=${out}`,
  pathToFileURL(tmp).href,
]);
rmSync(tmp);
console.log(`Portfolio PDF written to ${out}`);
