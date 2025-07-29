#!/usr/bin/env bun
console.log("DevPulse is working!");
console.log("Arguments:", process.argv.slice(2));

const args = process.argv.slice(2);
const command = args[0];

if (command === "log") {
  console.log("📅 No logs yet - this is a test");
} else if (command === "focus") {
  console.log("🎯 Focus command received");
} else {
  console.log("ℹ️  Available commands: focus, break, log, report");
}
