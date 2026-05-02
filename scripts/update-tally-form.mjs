import { randomUUID } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";

let token = process.env.TALLY_API_KEY || process.env.TALLY_KEY;
const formId = process.env.TALLY_FORM_ID || "D4X1AZ";

if (!token && !process.stdin.isTTY) {
  token = (await readFile("/dev/stdin", "utf8")).trim();
}

if (!token) {
  console.error(
    "Missing TALLY_API_KEY. Usage: TALLY_API_KEY=xxx node scripts/update-tally-form.mjs"
  );
  process.exit(1);
}

const apiBase = "https://api.tally.so";

async function tally(path, options = {}) {
  const response = await fetch(`${apiBase}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...options.headers
    }
  });

  const body = await response.text();

  if (!response.ok) {
    throw new Error(`Tally API failed: ${response.status} ${body}`);
  }

  return body ? JSON.parse(body) : null;
}

function block(type, groupUuid, groupType, payload = {}) {
  return {
    uuid: randomUUID(),
    type,
    groupUuid,
    groupType,
    payload
  };
}

function formTitle(titleText) {
  const groupUuid = randomUUID();

  return block("FORM_TITLE", groupUuid, "FORM_TITLE", {
    title: titleText,
    html: titleText,
    button: {
      label: "Submit"
    }
  });
}

function text(html) {
  const groupUuid = randomUUID();
  return block("TEXT", groupUuid, "TEXT", { html });
}

function title(html, groupUuid) {
  return block("TITLE", groupUuid, "QUESTION", { html });
}

function question(groupUuid, isRequired = false) {
  return block("QUESTION", groupUuid, "QUESTION", {
    isRequired,
    isHidden: false
  });
}

function inputQuestion(label, type, { placeholder = "", isRequired = false, name } = {}) {
  const groupUuid = randomUUID();

  return [
    question(groupUuid, isRequired),
    title(label, groupUuid),
    block(type, groupUuid, type, {
      placeholder,
      isRequired,
      name
    })
  ];
}

function multipleChoiceQuestion(label, options, { isRequired = false } = {}) {
  const groupUuid = randomUUID();

  return [
    question(groupUuid, isRequired),
    title(label, groupUuid),
    ...options.map((option, index) =>
      block("MULTIPLE_CHOICE_OPTION", groupUuid, "MULTIPLE_CHOICE", {
        index,
        text: option,
        name: option,
        isFirst: index === 0,
        isLast: index === options.length - 1,
        isRequired,
        allowMultiple: false
      })
    )
  ];
}

const blocks = [
  formTitle("Submit a Skill or Task to SkillFit"),
  text(
    "Help SkillFit turn real AI Agent tasks into better task-to-Skill recommendations. You can submit a task, a Skill source, an output sample, or a failure case."
  ),
  ...multipleChoiceQuestion(
    "What are you submitting?",
    [
      "A task I need help with",
      "A Skill source",
      "A real output sample",
      "A failure case",
      "An Arena comparison idea"
    ],
    { isRequired: true }
  ),
  ...inputQuestion("What task are you trying to complete?", "TEXTAREA", {
    placeholder: "Describe the real task, context, and input.",
    isRequired: true,
    name: "task"
  }),
  ...inputQuestion("What output do you expect?", "TEXTAREA", {
    placeholder: "For example: memo, article, deck, code review, landing page, spreadsheet.",
    isRequired: true,
    name: "expected_output"
  }),
  ...multipleChoiceQuestion(
    "Which AI agent do you use?",
    ["Codex", "Claude Code", "Cursor", "ChatGPT", "Gemini", "Other"],
    { isRequired: true }
  ),
  ...inputQuestion("Which Skill did you try or consider?", "INPUT_TEXT", {
    placeholder: "For example: web-access, copywriting, frontend-design.",
    name: "skill_name"
  }),
  ...inputQuestion("Skill source URL", "INPUT_LINK", {
    placeholder: "https://...",
    name: "skill_source_url"
  }),
  ...inputQuestion("What worked?", "TEXTAREA", {
    placeholder: "If you tried it, describe what worked.",
    name: "worked"
  }),
  ...inputQuestion("What failed or felt risky?", "TEXTAREA", {
    placeholder: "Describe failure cases, hallucinations, safety concerns, or confusing setup.",
    name: "failed_or_risky"
  }),
  ...multipleChoiceQuestion(
    "Can SkillFit publish this anonymously?",
    ["Yes, anonymous is OK", "Ask me first", "No"],
    { isRequired: true }
  ),
  ...inputQuestion("Email", "INPUT_EMAIL", {
    placeholder: "you@example.com",
    name: "email"
  }),
  ...inputQuestion("Anything else?", "TEXTAREA", {
    placeholder: "Add links, screenshots notes, or context.",
    name: "anything_else"
  })
];

const existing = await tally(`/forms/${formId}`);
const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
const backupPath = join(tmpdir(), `skillfit-tally-${formId}-backup-${timestamp}.json`);
await writeFile(backupPath, JSON.stringify(existing, null, 2));

const updated = await tally(`/forms/${formId}`, {
  method: "PATCH",
  body: JSON.stringify({
    name: "Submit a Skill or Task to SkillFit",
    status: "PUBLISHED",
    blocks,
    settings: {
      ...(existing.settings || {}),
      isClosed: false
    }
  })
});

console.log(
  JSON.stringify(
    {
      ok: true,
      formId,
      url: `https://tally.so/r/${formId}`,
      backupPath,
      updatedAt: updated.updatedAt,
      numberOfSubmissions: updated.numberOfSubmissions
    },
    null,
    2
  )
);
