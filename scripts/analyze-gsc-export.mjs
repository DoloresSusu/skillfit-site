import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { homedir } from "node:os";
import path from "node:path";

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (quoted) {
      if (char === '"' && next === '"') {
        field += '"';
        index += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      quoted = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (char !== "\r") {
      field += char;
    }
  }

  if (field || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  const [headers, ...data] = rows.filter((item) => item.some(Boolean));
  return data.map((item) =>
    Object.fromEntries(headers.map((header, index) => [header, item[index] || ""]))
  );
}

function findLatestExport() {
  const downloads = path.join(homedir(), "Downloads");
  if (!existsSync(downloads)) return undefined;

  return readdirSync(downloads)
    .filter((file) => file.includes("get-skill-fit.com-Performance-on-Search") && file.endsWith(".zip"))
    .map((file) => path.join(downloads, file))
    .sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs)[0];
}

function readExportFile(source, name) {
  if (!source) {
    throw new Error("Pass a Search Console export zip or directory path.");
  }

  if (statSync(source).isDirectory()) {
    return readFileSync(path.join(source, `${name}.csv`), "utf8");
  }

  return execFileSync("unzip", ["-p", source, `${name}.csv`], {
    encoding: "utf8",
    maxBuffer: 1024 * 1024
  });
}

function asNumber(value) {
  return Number(String(value).replace(/[%,$]/g, "")) || 0;
}

function normalizeRows(rows, label) {
  return rows.map((row) => ({
    label: row[label],
    clicks: asNumber(row.Clicks),
    impressions: asNumber(row.Impressions),
    ctr: asNumber(row.CTR),
    position: asNumber(row.Position)
  }));
}

function score(row) {
  const positionBoost = row.position > 0 ? Math.max(0.2, 80 / Math.max(row.position, 1)) : 0.2;
  const noClickBoost = row.clicks === 0 ? 1.4 : 1;
  const ctrGap = row.ctr < 2 ? 1.2 : 1;
  return Math.round(row.impressions * positionBoost * noClickBoost * ctrGap);
}

function table(rows, label) {
  if (rows.length === 0) return "_No matching rows._";

  const header = `| ${label} | clicks | impressions | CTR | position | score |\n|---|---:|---:|---:|---:|---:|`;
  const body = rows
    .map(
      (row) =>
        `| ${row.label} | ${row.clicks} | ${row.impressions} | ${row.ctr.toFixed(2)}% | ${row.position.toFixed(2)} | ${score(row)} |`
    )
    .join("\n");
  return `${header}\n${body}`;
}

function topRows(rows, predicate, limit = 10) {
  return rows
    .filter(predicate)
    .sort((a, b) => score(b) - score(a))
    .slice(0, limit);
}

const source = process.argv[2] || findLatestExport();
const queries = normalizeRows(parseCsv(readExportFile(source, "Queries")), "Top queries");
const pages = normalizeRows(parseCsv(readExportFile(source, "Pages")), "Top pages");
const countries = normalizeRows(parseCsv(readExportFile(source, "Countries")), "Country");
const devices = normalizeRows(parseCsv(readExportFile(source, "Devices")), "Device");

const totals = pages.reduce(
  (acc, row) => ({
    clicks: acc.clicks + row.clicks,
    impressions: acc.impressions + row.impressions
  }),
  { clicks: 0, impressions: 0 }
);

const ctr = totals.impressions > 0 ? (totals.clicks / totals.impressions) * 100 : 0;

console.log(`# SkillFit GSC Opportunity Report`);
console.log("");
console.log(`Source: ${source}`);
console.log(`Total page clicks: ${totals.clicks}`);
console.log(`Total page impressions: ${totals.impressions}`);
console.log(`Page CTR: ${ctr.toFixed(2)}%`);
console.log("");
console.log("## CTR rewrite candidates");
console.log("");
console.log("Pages or queries already near page one but still under-clicked. Rewrite title, description, H1, short answer, and above-the-fold next step first.");
console.log("");
console.log(table(topRows(pages, (row) => row.clicks === 0 && row.impressions >= 5 && row.position <= 20), "page"));
console.log("");
console.log(table(topRows(queries, (row) => row.clicks === 0 && row.impressions >= 2 && row.position <= 20), "query"));
console.log("");
console.log("## Content depth candidates");
console.log("");
console.log("These have meaningful impressions but sit around positions 20-60. Add exact-match sections, FAQs, internal links, and stronger examples.");
console.log("");
console.log(table(topRows(pages, (row) => row.impressions >= 10 && row.position > 20 && row.position <= 60), "page"));
console.log("");
console.log(table(topRows(queries, (row) => row.impressions >= 4 && row.position > 20 && row.position <= 60), "query"));
console.log("");
console.log("## Authority and internal-link candidates");
console.log("");
console.log("These are too low to fix with title changes alone. Link to them from stronger pages or consolidate intent.");
console.log("");
console.log(table(topRows(pages, (row) => row.impressions >= 10 && row.position > 60), "page"));
console.log("");
console.log(table(topRows(queries, (row) => row.impressions >= 4 && row.position > 60), "query"));
console.log("");
console.log("## Geography and device notes");
console.log("");
console.log(table(topRows(countries, (row) => row.impressions >= 20 && row.ctr < 2, 8), "country"));
console.log("");
console.log(table(devices.sort((a, b) => b.impressions - a.impressions), "device"));
