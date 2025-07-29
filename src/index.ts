#!/usr/bin/env bun
import chalk from "chalk";
import ora from "ora";

console.log(chalk.blue("🧠 DevPulse - Enhanced Focus Timer"));

// CLI Args
const args = process.argv.slice(2);
const command = args[0];
const minutes = parseFloat(args[1] ?? "") || 25;

// Enhanced notifications function
function triggerNotifications(type: string, mins: number) {
  // Terminal alerts
  console.log(chalk.bgRed.white.bold("  🚨 TIMER COMPLETE! 🚨  "));
  console.log(chalk.bgYellow.black.bold("  🎉 GREAT JOB! 🎉  "));
  console.log(chalk.bgGreen.white.bold("  ✨ TIME FOR A BREAK! ✨  "));
  
  // Terminal bells
  for (let i = 0; i < 5; i++) {
    setTimeout(() => process.stdout.write("\x07"), i * 300);
  }
  
  // Try desktop notification
  import("node-notifier").then(notifier => {
    notifier.default.notify({
      title: `🎉 ${type.toUpperCase()} SESSION COMPLETE!`,
      message: `🚀 Amazing! You completed ${mins} minutes of ${type}!`,
      timeout: 10,
      sound: true
    });
  }).catch(() => console.log(chalk.yellow("Desktop notifications unavailable")));
  
  // Try to open browser alarm
  import("child_process").then(cp => {
    cp.exec("xdg-open alerts/alarm.html", (error) => {
      if (error) console.log(chalk.yellow("Browser alarm unavailable"));
    });
  }).catch(() => {});
  
  // Final celebration
  setTimeout(() => {
    console.log(chalk.bgMagenta.white.bold("🎊 🎊 🎊 SESSION COMPLETE! 🎊 🎊 🎊"));
  }, 1000);
}

// Timer function
function startTimer(mins: number, type: "focus" | "break") {
  const emoji = type === "focus" ? "⏳" : "🍵";
  console.log(chalk.green(`🎯 Starting ${mins}-minute ${type} session...`));
  
  const spinner = ora(`${emoji} ${type.toUpperCase()} for ${mins} min`).start();
  let seconds = Math.floor(mins * 60);

  const interval = setInterval(() => {
    seconds--;
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    spinner.text = `${emoji} ${chalk.green(m)}:${chalk.yellow(s < 10 ? '0' + s : s)}`;
    
    if (seconds <= 0) {
      clearInterval(interval);
      spinner.succeed(`✅ ${type} session complete! (${mins} min)`);
      
      triggerNotifications(type, mins);
      
      // Exit after notifications
      setTimeout(() => process.exit(0), 3000);
    }
  }, 1000);
}

// Handle commands
if (command === "focus") {
  startTimer(minutes, "focus");
} else if (command === "break") {
  startTimer(minutes, "break");
} else if (command === "log") {
  console.log("📅 Session logging coming soon!");
} else if (command === "report") {
  console.log("📊 Reports coming soon!");
} else {
  console.log(`
🧠 DevPulse – Enhanced Terminal Focus Tracker

Usage:
  bun run src/index.ts focus [minutes]     Start a focus session
  bun run src/index.ts break [minutes]     Start a break session
  bun run src/index.ts log                 Show today's sessions
  bun run src/index.ts report              Weekly summary

Examples:
  bun run src/index.ts focus 1    # 1-minute test session
  bun run src/index.ts focus 25   # 25-minute Pomodoro
  bun run src/index.ts break 5    # 5-minute break

✨ Features:
  🔊 Multiple sound alerts
  🎨 Terminal visual notifications  
  📱 Desktop notifications
  🌐 Browser alarm popup
`);
}
