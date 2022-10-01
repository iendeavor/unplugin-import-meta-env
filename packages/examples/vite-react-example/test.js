const runTest = require("../run-test");

const commands = [
  "pnpm exec rimraf dist",
  "pnpm exec vite build",
  "pnpm exec cross-env HELLO=foo pnpm exec final-env --example .env.example.public",
];
const longRunningCommands = ["pnpm exec vite preview --port 4191"];
const expected = "Hello: foo";
const url = "http://localhost:4191";
const waitMs = 1000;

runTest({
  commands,
  longRunningCommands,
  expected,
  url,
  waitMs,
});
