#!/usr/bin/env bun
import chalk from "chalk";
import ora from "ora";
import notifier from "node-notifier";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { exec } from "child_process";

// CLI Args
const args = process.argv.slice(2);
const command = args[0];
const minutes = parseInt(args[1] ?? "") || 25;

// Log file
const logDir = "./data";
const logFile = `${logDir}/logs.json`;

// Create data directory if missing
if (!existsSync(logDir)) mkdirSync(logDir);

// Show Desktop Notification
function showPopup(title: string, message: string) {
  notifier.notify({
    title,
    message,
    timeout: 5,
    sound: false
  });
}

// Save session to log
function saveSession(mins: number, type: string) {
  const data: Record<string, any[]> = existsSync(logFile)
    ? JSON.parse(readFileSync(logFile, "utf-8"))
    : {};
  const date = new Date().toISOString().split("T")[0] || "";
  if (date && !data[date]) data[date] = [];
  if (date) {
    if (!data[date]) data[date] = [];
    data[date].push({ mins, type, time: new Date().toLocaleTimeString() });
  }
  writeFileSync(logFile, JSON.stringify(data, null, 2));
}

// Start timer with spinner
function startTimer(mins: number, type: "focus" | "break") {
  const emoji = type === "focus" ? "⏳" : "🍵";
  const spinner = ora(`${emoji} ${type.toUpperCase()} for ${mins} min`).start();
  let seconds = mins * 60;

  const interval = setInterval(() => {
    seconds--;
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    spinner.text = `${emoji} ${chalk.green(m)}:${chalk.yellow(s < 10 ? '0' + s : s)}`;
   if (seconds <= 0) {
  clearInterval(interval);
  spinner.succeed(`✅ ${type} session complete! (${mins} min)`);

  process.stdout.write("\x07"); // Terminal bell
  exec("xdg-open alerts/alarm.html"); // Open browser tab with sound
  showPopup(`${type.toUpperCase()} session complete!`, `🎉 You completed ${mins} minutes.`);
  saveSession(mins, type);
}

  }, 1000);
}

// Show today's log
function logToday() {
  if (!existsSync(logFile)) return console.log("No logs yet.");
  const data = JSON.parse(readFileSync(logFile, "utf-8")) as Record<string, any[]>;
  const today = new Date().toISOString().split("T")[0];
  const sessions = data[today || ""] || [];

  console.log(chalk.bold(`\n📅 ${today} - Sessions:`));
  let total = 0;
  sessions.forEach((s: any, i: number) => {
    const color = s.type === "focus" ? chalk.cyan : chalk.gray;
    console.log(`${i + 1}. ${color(s.type)} - ${s.mins} min at ${s.time}`);
    total += s.mins;
  });
  console.log(chalk.green(`\n🧠 Total time today: ${total} min\n`));
}

// Weekly summary
function showReport() {
  if (!existsSync(logFile)) return console.log("No logs yet.");
  const data = JSON.parse(readFileSync(logFile, "utf-8")) as Record<string, any[]>;

  console.log(chalk.bold("\n📊 Weekly Summary:"));
  Object.entries(data).forEach(([date, sessions]) => {
    const total = sessions.reduce((sum: number, s: any) => sum + s.mins, 0);
    console.log(`${chalk.yellow(date)} – ${chalk.green(total)} min`);
  });
  console.log();
}

// CLI Commands
switch (command) {
  case "focus":
    startTimer(minutes, "focus");
    break;
  case "break":
    startTimer(minutes, "break");
    break;
  case "log":
    logToday();
    break;
  case "report":
    showReport();
    break;
  default:
    console.log(`
🧠 DevPulse – Terminal Focus Tracker (Bun)
Usage:
  devpulse focus [minutes]     Start a focus session
  devpulse break [minutes]     Start a break session
  devpulse log                 Show today’s log
  devpulse report              Weekly summary
`);
}
