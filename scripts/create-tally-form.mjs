import { randomUUID } from "node:crypto";

const token = process.env.TALLY_API_KEY;

if (!token) {
  console.error("Missing TALLY_API_KEY. Usage: TALLY_API_KEY=xxx node scripts/create-tally-form.mjs");
  process.exit(1);
}

function title(html) {
  return {
    uuid: randomUUID(),
    type: "TITLE",
    groupUuid: randomUUID(),
    groupType: "QUESTION",
    payload: { html }
  };
}

function input(type, placeholder, isRequired = false) {
  return {
    uuid: randomUUID(),
    type,
    groupUuid: randomUUID(),
    groupType: type,
    payload: { placeholder, isRequired }
  };
}

function textarea(placeholder, isRequired = false) {
  return input("TEXTAREA", placeholder, isRequired);
}

function dropdown(options) {
  const groupUuid = randomUUID();
  return options.map((text, index) => ({
    uuid: randomUUID(),
    type: "DROPDOWN_OPTION",
    groupUuid,
    groupType: "DROPDOWN",
    payload: {
      index,
      text,
      isFirst: index === 0,
      isLast: index === options.length - 1
    }
  }));
}

function questionWithInput(label, block) {
  return [title(label), block];
}

function questionWithDropdown(label, options) {
  return [title(label), ...dropdown(options)];
}

const blocks = [
  {
    uuid: randomUUID(),
    type: "FORM_TITLE",
    groupUuid: randomUUID(),
    groupType: "TEXT",
    payload: {
      title: "Submit to SkillFit",
      html: "Submit to SkillFit"
    }
  },
  {
    uuid: randomUUID(),
    type: "TEXT",
    groupUuid: randomUUID(),
    groupType: "TEXT",
    payload: {
      html:
        "Share a Skill link, a concrete task, a review, or an Arena duel idea. We use submissions to improve task-to-Skill recommendations."
    }
  },
  ...questionWithDropdown("What are you submitting?", [
    "Skill link",
    "Task / use case",
    "Skill review",
    "Arena duel idea",
    "Safety issue"
  ]),
  ...questionWithInput("Skill name", input("INPUT_TEXT", "e.g. frontend-design")),
  ...questionWithInput("Skill URL", input("INPUT_LINK", "https://...", true)),
  ...questionWithDropdown("Which platform is it from?", [
    "skills.sh",
    "SkillHub",
    "GitHub",
    "Claude Plugin",
    "MCP marketplace",
    "Other"
  ]),
  ...questionWithInput(
    "What task did you use it for?",
    textarea("Describe the concrete task, input, and expected output.", true)
  ),
  ...questionWithDropdown("Did it work?", [
    "Worked well",
    "Partially worked",
    "Failed",
    "Not tested yet"
  ]),
  ...questionWithInput(
    "What happened?",
    textarea("Tell us what worked, what failed, and what surprised you.", true)
  ),
  ...questionWithInput(
    "Output sample or notes",
    textarea("Paste a short output sample, notes, or safety concerns.")
  ),
  ...questionWithInput("Contact email", input("INPUT_EMAIL", "you@example.com")),
  ...questionWithDropdown("Can SkillFit publish this anonymously?", ["Yes", "No"])
];

const response = await fetch("https://api.tally.so/forms", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    status: "PUBLISHED",
    blocks
  })
});

const body = await response.text();

if (!response.ok) {
  console.error(`Tally API failed: ${response.status}`);
  console.error(body);
  process.exit(1);
}

const form = JSON.parse(body);
const url = `https://tally.so/r/${form.id}`;

console.log(JSON.stringify({ ...form, url }, null, 2));
