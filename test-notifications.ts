#!/usr/bin/env bun
// Quick test script for DevPulse notifications

import chalk from "chalk";
import notifier from "node-notifier";
import { exec } from "child_process";

console.log(chalk.bgBlue.white.bold("🧪 Testing DevPulse Notifications..."));

// Test 1: Terminal visual alerts
console.log("\n" + chalk.bgRed.white.bold("  🚨 TIMER COMPLETE! 🚨  "));
console.log(chalk.bgYellow.black.bold("  🎉 GREAT JOB! 🎉  "));
console.log(chalk.bgGreen.white.bold("  ✨ TIME FOR A BREAK! ✨  "));

// Test 2: Terminal bells
console.log("\n" + chalk.yellow("Testing terminal bells..."));
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    process.stdout.write("\x07");
  }, i * 500);
}

// Test 3: Desktop notification
setTimeout(() => {
  console.log(chalk.cyan("Testing desktop notification..."));
  notifier.notify({
    title: "🎉 DevPulse Test Notification",
    message: "🚀 This is a test of the notification system!",
    timeout: 5,
    sound: true,
    urgency: "critical",
    appName: "DevPulse"
  });
}, 1000);

// Test 4: Sound alerts
setTimeout(() => {
  console.log(chalk.magenta("Testing sound alerts..."));
  exec("./alerts/play-sound.sh", (error) => {
    if (error) {
      console.log(chalk.red("Sound script failed, testing fallback..."));
      process.stdout.write("\x07\x07\x07");
    } else {
      console.log(chalk.green("✅ Sound alerts working!"));
    }
  });
}, 2000);

// Test 5: Browser alarm
setTimeout(() => {
  console.log(chalk.blue("Testing browser alarm..."));
  exec("xdg-open alerts/alarm.html", (error) => {
    if (error) {
      console.log(chalk.yellow("Browser alarm failed (no display?)"));
    } else {
      console.log(chalk.green("✅ Browser alarm opened!"));
    }
  });
}, 3000);

setTimeout(() => {
  console.log("\n" + chalk.bgMagenta.white.bold("🎊 🎊 🎊 TEST COMPLETE! 🎊 🎊 🎊"));
  console.log(chalk.green("\nAll notification methods have been tested!"));
  console.log(chalk.cyan("Now try: bun run src/index.ts focus 1"));
}, 5000);
